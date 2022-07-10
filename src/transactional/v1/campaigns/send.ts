import { post } from '../../../common/request'
import type { TransactionalV1CampaignsSendObject } from './types'

/**
 * Postback body for sending transactional email via API-triggered delivery.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/send_messages/post_send_transactional_message/#postback-body}
 */
type Response = {
  dispatch_id: string
  status: 'sent' | 'processed' | 'aborted' | 'delivered' | 'bounced'
  metadata: {
    external_send_id: string
    campaign_api_id: string
    received_at?: string
    enqueued_at?: string
    executed_at?: string
    sent_at?: string
    processed_at?: string
    delivered_at?: string
    bounced_at?: string
    aborted_at?: string
    reason?: string
  }
}

/**
 * Sending transactional email via API-triggered delivery.
 *
 * The Send Transactional Email endpoint allows you to send immediate, ad-hoc messages to a designated user. This endpoint is used alongside the creation of a Transactional Email campaign and corresponding campaign ID.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/send_messages/post_send_transactional_message/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param campaignId - Campaign ID.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function send(
  apiUrl: string,
  apiKey: string,
  campaignId: string,
  body: TransactionalV1CampaignsSendObject,
) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return post(
    `${apiUrl}/transactional/v1/campaigns/${campaignId}/send`,
    body,
    options,
  ) as Promise<Response>
}
