import { post } from '../../common/request'
import { _delete } from '.'
import type { MessagesScheduleDeleteObject } from './types'

jest.mock('../../common/request')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/messages/schedule/delete', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const body: MessagesScheduleDeleteObject = {
    schedule_id: 'schedule_identifier',
  }
  const data = {}

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await _delete(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toBeCalledWith(`${apiUrl}/messages/schedule/delete`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toBeCalledTimes(1)
  })
})
