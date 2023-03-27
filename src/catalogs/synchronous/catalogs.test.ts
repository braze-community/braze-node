import { Braze } from '../../Braze'
import { request } from '../../common/request'
import {
  CatalogListItem,
  CatalogListItemResponse,
  CatalogListItemsResponse,
  CatalogListResponse,
} from './types'

jest.mock('../../common/request/request')
const mockedRequest = jest.mocked(request)

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
      mockedRequest.mockResolvedValueOnce(response)
      expect(await braze.catalogs.synchronous.items<ResponseType>({ catalog_name })).toBe(response)
      expect(mockedRequest).toBeCalledWith(
        `${apiUrl}/catalogs/${catalog_name}/items?`,
        undefined,
        options,
      )
    })

    it('is called with all params', async () => {
      mockedRequest.mockResolvedValueOnce(response)
      expect(
        await braze.catalogs.synchronous.items<ResponseType>({ catalog_name, cursor: 'abcdefg' }),
      ).toBe(response)
      expect(mockedRequest).toBeCalledWith(
        `${apiUrl}/catalogs/${catalog_name}/items?cursor=abcdefg`,
        undefined,
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
