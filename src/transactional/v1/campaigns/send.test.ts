import { post, ServerResponse } from '../../../common/request'
import { send } from '.'
import type { TransactionalV1CampaignsSendObject } from './types'

jest.mock('../../../common/request/post')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/transactional/v1/campaigns/YOUR_CAMPAIGN_ID_HERE/send', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const campaignId = 'YOUR_BASE64_COMPATIBLE_ID'
  const body: TransactionalV1CampaignsSendObject = {
    external_send_id: campaignId,
    trigger_properties: {
      example_string_property: 'YOUR_EXAMPLE_STRING',
      example_integer_property: 1234567890,
    },
    recipient: [
      {
        external_user_id: 'TARGETED_USER_ID_STRING',
      },
    ],
  }
  const data: ServerResponse = { message: 'success' }

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await send(apiUrl, apiKey, campaignId, body)).toBe(data)
    expect(mockedPost).toBeCalledWith(
      `${apiUrl}/transactional/v1/campaigns/${campaignId}/send`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      },
    )
    expect(mockedPost).toBeCalledTimes(1)
  })
})
