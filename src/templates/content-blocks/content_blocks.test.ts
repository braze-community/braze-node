import { Braze } from '../../Braze'
import { request, ServerResponse } from '../../common/request'

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
  const response: ServerResponse = { message: 'success' }

  it('calls templates.content_blocks.get()', async () => {
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

  it('calls templates.content_blocks.list()', async () => {
    mockedRequest.mockResolvedValueOnce(response)
    expect(await braze.templates.content_blocks.list({})).toBe(response)
    expect(mockedRequest).toBeCalledWith(`${apiUrl}/content_blocks/list?`, undefined, options)
    expect(mockedRequest).toBeCalledTimes(1)
  })
})
