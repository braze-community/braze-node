import { get, ServerResponse } from '../common/request'
import { scheduled_broadcasts } from '.'

jest.mock('../common/request/get')
const mockedGet = jest.mocked(get)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('messages.scheduled_broadcasts()', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const body = {
    end_time: '2018-09-01T00:00:00-04:00',
  }
  const data: ServerResponse = { message: 'success' }

  it('calls GET /messages/scheduled_broadcasts with url and body', async () => {
    mockedGet.mockResolvedValueOnce(data)
    expect(await scheduled_broadcasts(apiUrl, apiKey, body)).toBe(data)
    expect(mockedGet).toBeCalledWith(
      `${apiUrl}/messages/scheduled_broadcasts?end_time=2018-09-01T00%3A00%3A00-04%3A00`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      },
    )
    expect(mockedGet).toBeCalledTimes(1)
  })
})
