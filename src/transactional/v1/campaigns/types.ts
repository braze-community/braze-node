import { ServerResponse } from '../../../common/request'
import type { Attributes, TriggerProperties, UserAlias } from '../../../common/types'

/**
 * Request body for sending transactional email via API-triggered delivery.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/send_messages/post_send_transactional_message/#request-body}
 */
export interface TransactionalV1CampaignsSendObject {
  external_send_id?: string
  trigger_properties?: TriggerProperties
  recipient: (RecipientWithExternalUserId | RecipientWithUserAlias)[]
}

interface RecipientWithExternalUserId {
  external_user_id: string
  attributes?: Attributes
}

interface RecipientWithUserAlias {
  user_alias: UserAlias
  attributes?: Attributes
}

/**
 * Postback body for sending transactional email via API-triggered delivery.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/send_messages/post_send_transactional_message/#postback-body}
 */
export interface CampaignSendResponse extends ServerResponse {
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
