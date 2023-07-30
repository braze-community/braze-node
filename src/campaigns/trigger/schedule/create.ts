import { buildOptions, post } from '../../../common/request'
import type { CampaignsTriggerScheduleCreateObject } from './types'
import { CampaignsTriggerScheduleCreateResponse } from './types'

/**
 * Schedule API-triggered campaigns.
 *
 * Use this endpoint to trigger API-triggered campaigns, which are created on the dashboard and initiated via the API.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/schedule_messages/post_schedule_triggered_campaigns/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function create(
  apiUrl: string,
  apiKey: string,
  body: CampaignsTriggerScheduleCreateObject,
): Promise<CampaignsTriggerScheduleCreateResponse> {
  return post(`${apiUrl}/campaigns/trigger/schedule/create`, body, buildOptions({ apiKey }))
}
