import { Braze } from '../../Braze'
import { request } from '../../common/request'
import { ContentBlockListResponse, ContentBlockResponse } from './types'

jest.mock('../../common/request/request')
const mockedRequest = jest.mocked(request)

const apiUrl = 'https://rest.iad-01.braze.com'
const apiKey = 'apiKey'

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Content Blocks', () => {
  const braze = new Braze(apiUrl, apiKey)
  const options = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  }

  describe('calls templates.content_blocks.get()', () => {
    const response: ContentBlockResponse = {
      content: '',
      content_block_id: '',
      content_type: '',
      created_at: '',
      description: '',
      inclusion_count: 0,
      inclusion_data: [],
      last_edited: '',
      name: '',
      tags: [],
      message: 'success',
    }

    it('is called with required params', async () => {
      mockedRequest.mockResolvedValueOnce(response)
      const contentBlockId = 'YOUR_CONTENT_BLOCK_ID'
      expect(
        await braze.templates.content_blocks.get({
          content_block_id: contentBlockId,
        }),
      ).toBe(response)
      expect(mockedRequest).toBeCalledWith(
        `${apiUrl}/content_blocks/info?content_block_id=${contentBlockId}`,
        undefined,
        options,
      )
      expect(mockedRequest).toBeCalledTimes(1)
    })

    it('is called with all params', async () => {
      mockedRequest.mockResolvedValueOnce(response)
      const contentBlockId = 'YOUR_CONTENT_BLOCK_ID'
      expect(
        await braze.templates.content_blocks.get({
          content_block_id: contentBlockId,
          include_inclusion_data: true,
        }),
      ).toBe(response)
      expect(mockedRequest).toBeCalledWith(
        `${apiUrl}/content_blocks/info?content_block_id=${contentBlockId}&include_inclusion_data=true`,
        undefined,
        options,
      )
      expect(mockedRequest).toBeCalledTimes(1)
    })
  })

  describe('templates.content_blocks.list()', () => {
    const response: ContentBlockListResponse = { content_blocks: [], count: 0, message: 'success' }

    it('is called with required params', async () => {
      mockedRequest.mockResolvedValueOnce(response)
      expect(await braze.templates.content_blocks.list({})).toBe(response)
      expect(mockedRequest).toBeCalledWith(`${apiUrl}/content_blocks/list?`, undefined, options)
      expect(mockedRequest).toBeCalledTimes(1)
    })

    it('is called with all params', async () => {
      mockedRequest.mockResolvedValueOnce(response)
      expect(
        await braze.templates.content_blocks.list({
          modified_after: '2023-03-01',
          modified_before: '2023-03-23',
          limit: 10,
          offset: 0,
        }),
      ).toBe(response)
      expect(mockedRequest).toBeCalledWith(
        `${apiUrl}/content_blocks/list?modified_after=2023-03-01&modified_before=2023-03-23&limit=10&offset=0`,
        undefined,
        options,
      )
      expect(mockedRequest).toBeCalledTimes(1)
    })
  })
})
