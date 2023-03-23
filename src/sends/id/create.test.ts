import { post, ServerResponse } from '../../common/request'
import { create } from '.'
import type { SendsIdCreateObject } from './types'

jest.mock('../../common/request')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/sends/id/create', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const body: SendsIdCreateObject = {
    campaign_id: 'campaign_identifier',
    send_id: 'send_identifier',
  }
  const data: ServerResponse = { message: 'success' }

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await create(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toBeCalledWith(`${apiUrl}/sends/id/create`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toBeCalledTimes(1)
  })
})
