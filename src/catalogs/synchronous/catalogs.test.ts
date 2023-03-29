import * as fetchMockJest from 'fetch-mock-jest'
import fetch from 'node-fetch'

import { Braze } from '../../Braze'
import { request, ResponseError } from '../../common/request'
import {
  CatalogListItem,
  CatalogListItemResponse,
  CatalogListItemsResponse,
  CatalogListResponse,
} from './types'

jest.mock('../../common/request/request', () => ({
  ...jest.requireActual('../../common/request/request'),
  request: jest.fn(),
}))
const mockedRequest = jest.mocked(request)
jest.mock('node-fetch', () => fetchMockJest.sandbox())
const fetchMock = fetch as unknown as typeof fetchMockJest

const apiUrl = 'https://rest.iad-01.braze.com'
const apiKey = 'apiKey'

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Catalogs - Synchronous', () => {
  const braze = new Braze(apiUrl, apiKey)
  const options = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  }

  describe('List Catalogs', () => {
    const response: CatalogListResponse = {
      catalogs: [],
      message: 'success',
    }
    it('is called with no params', async () => {
      mockedRequest.mockResolvedValueOnce(response)
      expect(await braze.catalogs.synchronous.list()).toBe(response)
      expect(mockedRequest).toBeCalledWith(`${apiUrl}/catalogs`, undefined, options)
    })
  })

  describe('List Catalog Items', () => {
    beforeEach(() => {
      fetchMock.reset()
    })

    type ResponseType = CatalogListItem<{ foo: string }>
    const response: CatalogListItemsResponse<ResponseType> = {
      items: [
        {
          id: 'abc123',
          foo: 'bar',
        },
      ],
      message: 'success',
    }

    const catalog_name = 'CATALOG_NAME'

    it('is called with required params', async () => {
      fetchMock.get(`${apiUrl}/catalogs/${catalog_name}/items`, response)
      expect(await braze.catalogs.synchronous.items<ResponseType>({ catalog_name })).toEqual(
        response,
      )
      expect(fetchMock).toHaveFetched(`${apiUrl}/catalogs/${catalog_name}/items`, options)
    })

    it('throws exception on failed request', async () => {
      fetchMock.get(`${apiUrl}/catalogs/${catalog_name}/items`, {
        body: {
          message: 'error',
          errors: ['there was a problem'],
        },
        status: 500,
      })
      await expect(
        braze.catalogs.synchronous.items<ResponseType>({ catalog_name }),
      ).rejects.toThrow(new ResponseError('error', 500, ['there was a problem']))
      expect(fetchMock).toHaveFetched(`${apiUrl}/catalogs/${catalog_name}/items`, options)
    })

    it('is looped when there is a cursor', async () => {
      const responses: CatalogListItemsResponse<ResponseType>[] = [
        {
          items: [
            {
              id: 'abc123',
              foo: 'bar',
            },
          ],
          message: 'success',
        },
        {
          items: [
            {
              id: 'def456',
              foo: 'baz',
            },
          ],
          message: 'success',
        },
        {
          items: [
            {
              id: 'ghi789',
              foo: 'bah',
            },
          ],
          message: 'success',
        },
      ]

      fetchMock
        .get(`${apiUrl}/catalogs/${catalog_name}/items`, {
          body: responses[0],
          headers: {
            Link: `</catalogs/${catalog_name}/items?cursor=c2tpcDoxMDA=>; rel="next"`,
          },
        })
        .get(`${apiUrl}/catalogs/${catalog_name}/items?cursor=c2tpcDoxMDA=`, {
          body: responses[1],
          headers: {
            Link: `</catalogs/${catalog_name}/items?cursor=c2tpcDoxMDA=>; rel="prev",</catalogs/${catalog_name}/items?cursor=b2tpcDoxMDB=>; rel="next"`,
          },
        })
        .get(`${apiUrl}/catalogs/${catalog_name}/items?cursor=b2tpcDoxMDB=`, {
          body: responses[2],
          headers: {
            Link: `</catalogs/${catalog_name}/items?cursor=c2tpcDow>; rel="prev"`,
          },
        })

      expect(await braze.catalogs.synchronous.items<ResponseType>({ catalog_name })).toEqual({
        items: responses.reduce<ResponseType[]>(
          (items, response) => [...items, ...response.items],
          [],
        ),
        message: 'success',
      })
      expect(fetchMock).toHaveFetched(`${apiUrl}/catalogs/${catalog_name}/items`, options)
      expect(fetchMock).toHaveFetched(
        `${apiUrl}/catalogs/${catalog_name}/items?cursor=c2tpcDoxMDA=`,
        options,
      )
      expect(fetchMock).toHaveFetched(
        `${apiUrl}/catalogs/${catalog_name}/items?cursor=b2tpcDoxMDB=`,
        options,
      )
    })

    it('is stops with max pages when looped when there is a cursor', async () => {
      const responses: CatalogListItemsResponse<ResponseType>[] = [
        {
          items: [
            {
              id: 'abc123',
              foo: 'bar',
            },
          ],
          message: 'success',
        },
        {
          items: [
            {
              id: 'def456',
              foo: 'baz',
            },
          ],
          message: 'success',
        },
        {
          items: [
            {
              id: 'ghi789',
              foo: 'bah',
            },
          ],
          message: 'success',
        },
      ]

      fetchMock
        .get(`${apiUrl}/catalogs/${catalog_name}/items`, {
          body: responses[0],
          headers: {
            Link: `</catalogs/${catalog_name}/items?cursor=c2tpcDoxMDA=>; rel="next"`,
          },
        })
        .get(`${apiUrl}/catalogs/${catalog_name}/items?cursor=c2tpcDoxMDA=`, {
          body: responses[1],
          headers: {
            Link: `</catalogs/${catalog_name}/items?cursor=c2tpcDoxMDA=>; rel="prev",</catalogs/${catalog_name}/items?cursor=b2tpcDoxMDB=>; rel="next"`,
          },
        })
        .get(`${apiUrl}/catalogs/${catalog_name}/items?cursor=b2tpcDoxMDB=`, {
          body: responses[2],
          headers: {
            Link: `</catalogs/${catalog_name}/items?cursor=c2tpcDow>; rel="prev"`,
          },
        })

      expect(
        await braze.catalogs.synchronous.items<ResponseType>({ catalog_name, max_pages: 2 }),
      ).toEqual({
        items: responses
          .slice(0, 2)
          .reduce<ResponseType[]>((items, response) => [...items, ...response.items], []),
        message: 'success',
      })
      expect(fetchMock).toHaveFetched(`${apiUrl}/catalogs/${catalog_name}/items`, options)
      expect(fetchMock).toHaveFetched(
        `${apiUrl}/catalogs/${catalog_name}/items?cursor=c2tpcDoxMDA=`,
        options,
      )
      expect(fetchMock).not.toHaveFetched(
        `${apiUrl}/catalogs/${catalog_name}/items?cursor=b2tpcDoxMDB=`,
        options,
      )
    })
  })

  describe('Get Catalog Item', () => {
    type ResponseType = CatalogListItem<{ foo: string }>
    const response: CatalogListItemResponse<ResponseType> = {
      items: [
        {
          id: 'abc123',
          foo: 'bar',
        },
      ],
      message: 'success',
    }

    const catalog_name = 'CATALOG_NAME'
    const item_id = 'ITEM_ID'

    it('is called with required params', async () => {
      mockedRequest.mockResolvedValueOnce(response)
      expect(await braze.catalogs.synchronous.item<ResponseType>({ catalog_name, item_id })).toBe(
        response,
      )
      expect(mockedRequest).toBeCalledWith(
        `${apiUrl}/catalogs/${catalog_name}/items/${item_id}`,
        undefined,
        options,
      )
    })
  })
})
