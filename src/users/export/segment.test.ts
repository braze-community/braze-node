import { post } from '../../common/request'
import { segment } from '.'
import type { UsersExportSegmentObject, UsersExportSegmentResponse } from './types'

jest.mock('../../common/request/post')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/users/export/segment', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'

  const body: UsersExportSegmentObject = {
    segment_id: 'segment_identifier',
    callback_endpoint: 'example_endpoint',
    fields_to_export: ['first_name', 'email', 'purchases'],
    output_format: 'zip',
  }

  const data: UsersExportSegmentResponse = {
    message: 'success',
    object_prefix: 'bb8e2a91-c4aa-478b-b3f2-a4ee91731ad1-1464728599',
    url: 'https://example.com/',
  }

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await segment(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toHaveBeenCalledWith(`${apiUrl}/users/export/segment`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toHaveBeenCalledTimes(1)
  })
})
