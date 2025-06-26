import { post, ServerResponse } from '../../common/request'
import { update } from '.'
import type { MessagesScheduleUpdateObject } from './types'

jest.mock('../../common/request/post')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/messages/schedule/update', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'

  const body: MessagesScheduleUpdateObject = {
    schedule_id: 'schedule_identifier',
    schedule: {
      time: '2017-05-24T20:30:36Z',
    },
    messages: {
      apple_push: {
        alert: 'Updated Message!',
        badge: 1,
      },
      android_push: {
        title: 'Updated title!',
        alert: 'Updated message!',
      },
      sms: {
        subscription_group_id: 'subscription_group_identifier',
        message_variation_id: 'message_variation_identifier',
        body: 'This is my SMS body.',
        app_id: 'app_identifier',
      },
    },
  }

  const data: ServerResponse = { message: 'success' }

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await update(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toHaveBeenCalledWith(`${apiUrl}/messages/schedule/update`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toHaveBeenCalledTimes(1)
  })
})
