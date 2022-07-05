import { post } from '../../common/request'
import type { CampaignsTriggerSendObject } from './types'

/**
 * Sending campaign messages via API-triggered delivery.
 *
 * The send endpoint allows you to send immediate, ad-hoc messages to designated users.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/send_messages/post_send_triggered_campaigns/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function send(apiUrl: string, apiKey: string, body: CampaignsTriggerSendObject) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }
  return post(`${apiUrl}/campaigns/trigger/send`, body, options)
}
