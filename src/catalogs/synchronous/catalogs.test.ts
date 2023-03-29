import * as fetchMockJest from 'fetch-mock-jest'
import fetch from 'node-fetch'

import { Braze } from '../../Braze'
import { request, ResponseError } from '../../common/request'
import { getListCatalogItems } from './list_items'
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
    const response: CatalogListItemsResponse<CatalogListItem> = {
      items: [
        {
          id: 'abc123',
        },
      ],
      message: 'success',
    }

    const catalog_name = 'CATALOG_NAME'

    it('raises exception when calling next for completed iteration', async () => {
      fetchMock.getOnce(`${apiUrl}/catalogs/${catalog_name}/items`, response)

      const instance = await getListCatalogItems(apiUrl, apiKey, { catalog_name })
      expect(() => instance.next()).toThrow(new ResponseError('There is no next page', 0))
    })
  })

  describe('List Catalog Items - Iterator', () => {
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
        {
          id: 'def456',
          foo: 'baz',
        },
      ],
      message: 'success',
    }

    const catalog_name = 'CATALOG_NAME'

    it('is called with required params', async () => {
      fetchMock.getOnce(`${apiUrl}/catalogs/${catalog_name}/items`, response)
      const itemIterator = await braze.catalogs.synchronous.items<ResponseType>({ catalog_name })
      await expect(itemIterator.next()).resolves.toEqual({ done: false, value: response.items[0] })
      await expect(itemIterator.next()).resolves.toEqual({ done: false, value: response.items[1] })
      await expect(itemIterator.next()).resolves.toEqual({ done: true, value: undefined })
      expect(fetchMock).toHaveFetched(`${apiUrl}/catalogs/${catalog_name}/items`, options)
    })

    it('throws exception on failed request', async () => {
      fetchMock.getOnce(`${apiUrl}/catalogs/${catalog_name}/items`, {
        body: {
          message: 'error',
          errors: ['there was a problem'],
        },
        status: 500,
      })
      const itemIterator = await braze.catalogs.synchronous.items<ResponseType>({ catalog_name })
      await expect(itemIterator.next()).rejects.toThrow(
        new ResponseError('error', 500, ['there was a problem']),
      )
      expect(fetchMock).toHaveFetched(`${apiUrl}/catalogs/${catalog_name}/items`, options)
    })

    it('calls next link when there is one', async () => {
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
            {
              id: 'jkl012',
              foo: 'bat',
            },
          ],
          message: 'success',
        },
      ]

      fetchMock
        .getOnce(`${apiUrl}/catalogs/${catalog_name}/items`, {
          body: responses[0],
          headers: {
            Link: `</catalogs/${catalog_name}/items?cursor=c2tpcDoxMDA=>; rel="next"`,
          },
        })
        .getOnce(`${apiUrl}/catalogs/${catalog_name}/items?cursor=c2tpcDoxMDA=`, {
          body: responses[1],
          headers: {
            Link: `</catalogs/${catalog_name}/items?cursor=c2tpcDoxMDA=>; rel="prev",</catalogs/${catalog_name}/items?cursor=b2tpcDoxMDB=>; rel="next"`,
          },
        })
        .getOnce(`${apiUrl}/catalogs/${catalog_name}/items?cursor=b2tpcDoxMDB=`, {
          body: responses[2],
          headers: {
            Link: `</catalogs/${catalog_name}/items?cursor=c2tpcDow>; rel="prev"`,
          },
        })

      const itemIterator = await braze.catalogs.synchronous.items<ResponseType>({ catalog_name })
      await expect(itemIterator.next()).resolves.toEqual({
        done: false,
        value: responses[0].items[0],
      })
      expect(fetchMock).toHaveFetched(`${apiUrl}/catalogs/${catalog_name}/items`, options)

      await expect(itemIterator.next()).resolves.toEqual({
        done: false,
        value: responses[1].items[0],
      })
      expect(fetchMock).toHaveFetched(
        `${apiUrl}/catalogs/${catalog_name}/items?cursor=c2tpcDoxMDA=`,
        options,
      )

      await expect(itemIterator.next()).resolves.toEqual({
        done: false,
        value: responses[2].items[0],
      })
      await expect(itemIterator.next()).resolves.toEqual({
        done: false,
        value: responses[2].items[1],
      })
      expect(fetchMock).toHaveFetched(
        `${apiUrl}/catalogs/${catalog_name}/items?cursor=b2tpcDoxMDB=`,
        options,
      )

      await expect(itemIterator.next()).resolves.toEqual({ done: true, value: undefined })
    })

    it('calls next link when there is one - loop version', async () => {
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
              id: 'ghi789',
              foo: 'bah',
            },
            {
              id: 'jkl012',
              foo: 'bat',
            },
          ],
          message: 'success',
        },
      ]

      fetchMock
        .getOnce(`${apiUrl}/catalogs/${catalog_name}/items`, {
          body: responses[0],
          headers: {
            Link: `</catalogs/${catalog_name}/items?cursor=c2tpcDoxMDA=>; rel="next"`,
          },
        })
        .getOnce(`${apiUrl}/catalogs/${catalog_name}/items?cursor=c2tpcDoxMDA=`, {
          body: responses[1],
          headers: {
            Link: `</catalogs/${catalog_name}/items?cursor=c2tpcDow>; rel="prev"`,
          },
        })

      const itemIterator = braze.catalogs.synchronous.items<ResponseType>({ catalog_name })
      const items = []
      for await (const item of itemIterator) {
        items.push(item)
      }

      expect(items).toEqual([...responses[0].items, ...responses[1].items])
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
