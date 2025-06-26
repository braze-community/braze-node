import { post, ServerResponse } from '../common/request'
import { blacklist } from '.'
import type { EmailBlacklistObject } from './types'

jest.mock('../common/request/post')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/email/blacklist', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const body: EmailBlacklistObject = {
    email: ['blacklist_email1', 'blacklist_email2'],
  }
  const data: ServerResponse = { message: 'success' }

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await blacklist(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toHaveBeenCalledWith(`${apiUrl}/email/blacklist`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toHaveBeenCalledTimes(1)
  })
})
