import { post } from '../../../common/request'
import type { CampaignsTriggerScheduleUpdateObject } from './types'

/**
 * Update scheduled API-triggered campaigns.
 *
 * Use this endpoint to update scheduled API-triggered campaigns, which are created on the dashboard and initiated via the API.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/schedule_messages/post_update_scheduled_triggered_campaigns/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function update(apiUrl: string, apiKey: string, body: CampaignsTriggerScheduleUpdateObject) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return post(`${apiUrl}/campaigns/trigger/schedule/update`, body, options)
}
