import { buildOptions, post } from '../../../common/request'
import type { CampaignSendResponse, TransactionalV1CampaignsSendObject } from './types'

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
): Promise<CampaignSendResponse> {
  return post(
    `${apiUrl}/transactional/v1/campaigns/${campaignId}/send`,
    body,
    buildOptions({ apiKey }),
  )
}
