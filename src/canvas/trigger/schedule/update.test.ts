import { post, ServerResponse } from '../../../common/request'
import { update } from '.'
import type { CanvasTriggerScheduleUpdateObject } from './types'

jest.mock('../../../common/request/post')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/canvas/trigger/schedule/update', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const body: CanvasTriggerScheduleUpdateObject = {
    canvas_id: 'canvas_identifier',
    schedule_id: 'schedule_identifier',
    schedule: {
      time: '2017-05-24T21:30:00Z',
      in_local_time: true,
    },
  }
  const data: ServerResponse = { message: 'success' }

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await update(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toBeCalledWith(`${apiUrl}/canvas/trigger/schedule/update`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toBeCalledTimes(1)
  })
})
