import { post, ServerResponse } from '../../common/request'
import { send } from '.'
import type { CampaignsTriggerSendObject } from './types'

jest.mock('../../common/request/post')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/campaigns/trigger/send', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const body: CampaignsTriggerSendObject = {
    campaign_id: 'abcdef12-3456-7890-abcd-ef1234567890',
    recipients: [
      {
        external_user_id: '1234567890',
        trigger_properties: {
          example_string_property: 'YOUR_EXAMPLE_STRING',
          example_integer_property: 1234567890,
          nested: {
            foo: 'bar',
          },
        },
      },
    ],
  }
  const data: ServerResponse = { message: 'success' }

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await send(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toHaveBeenCalledWith(`${apiUrl}/campaigns/trigger/send`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toHaveBeenCalledTimes(1)
  })
})
