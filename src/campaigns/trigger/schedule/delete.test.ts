import { post, ServerResponse } from '../../../common/request'
import { _delete } from '.'
import type { CampaignsTriggerScheduleDeleteObject } from './types'

jest.mock('../../../common/request/post')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/campaigns/trigger/schedule/delete', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const body: CampaignsTriggerScheduleDeleteObject = {
    campaign_id: 'campaign_identifier',
    schedule_id: 'schedule_identifier',
  }
  const data: ServerResponse = { message: 'success' }

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await _delete(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toBeCalledWith(`${apiUrl}/campaigns/trigger/schedule/delete`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toBeCalledTimes(1)
  })
})
