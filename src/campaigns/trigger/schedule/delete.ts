import { post } from '../../../common/request'
import type { CampaignsTriggerScheduleDeleteObject } from './types'

/**
 * Delete scheduled API-triggered campaigns.
 *
 * The delete schedule endpoint allows you to cancel a message that you previously scheduled API-triggered campaigns before it has been sent.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/schedule_messages/post_delete_scheduled_triggered_messages/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function _delete(
  apiUrl: string,
  apiKey: string,
  body: CampaignsTriggerScheduleDeleteObject,
) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return post(`${apiUrl}/campaigns/trigger/schedule/delete`, body, options)
}
