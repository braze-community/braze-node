import { post } from '../../../common/request'
import { update } from '.'
import type { CampaignsTriggerScheduleUpdateObject } from './types'

jest.mock('../../../common/request')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/campaigns/trigger/schedule/update', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const body: CampaignsTriggerScheduleUpdateObject = {
    campaign_id: 'campaign_identifier',
    schedule_id: 'schedule_identifier',
    schedule: {
      time: '2017-05-24T21:30:00Z',
      in_local_time: true,
    },
  }
  const data = {}

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await update(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toBeCalledWith(`${apiUrl}/campaigns/trigger/schedule/update`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toBeCalledTimes(1)
  })
})
