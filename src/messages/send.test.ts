import { post, ServerResponse } from '../common/request'
import { send } from '.'
import type { MessagesSendObject } from './types'

jest.mock('../common/request')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/messages/send', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const body: MessagesSendObject = {
    external_user_ids: ['1234567890'],
    messages: {
      email: {
        app_id: 'abcdef12-3456-7890-abcd-ef1234567890',
        from: `Company <company@example.com>`,
        email_template_id: 'abcdef12-3456-7890-abcd-ef1234567890',
      },
    },
  }
  const data: ServerResponse = { message: 'success' }

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await send(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toBeCalledWith(`${apiUrl}/messages/send`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toBeCalledTimes(1)
  })
})
