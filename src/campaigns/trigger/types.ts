import type { ConnectedAudienceObject } from '../../common/types'

/**
 * Request body for sending campaign messages via API-triggered delivery.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/send_messages/post_send_triggered_campaigns/#request-body}
 */
export interface CampaignsTriggerSendObject {
  campaign_id: string
  send_id?: string
  trigger_properties?: TriggerProperties
  broadcast?: boolean
  audience?: ConnectedAudienceObject
  recipients?: (RecipientWithExternalUserId | RecipientWithUserAlias)[]
}

type TriggerProperties = object

interface Recipient {
  trigger_properties?: TriggerProperties
  send_to_existing_only?: boolean
  attributes?: object
}

interface RecipientWithExternalUserId extends Recipient {
  external_user_id: string
}

interface RecipientWithUserAlias extends Recipient {
  user_alias: {
    alias_name: string
    alias_label: string
  }
}
