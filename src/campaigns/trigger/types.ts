import type {
  Attributes,
  ConnectedAudienceObject,
  TriggerProperties,
  UserAlias,
} from '../../common/types'

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

interface Recipient {
  trigger_properties?: TriggerProperties
  send_to_existing_only?: boolean
  attributes?: Attributes
}

interface RecipientWithExternalUserId extends Recipient {
  external_user_id: string
}

interface RecipientWithUserAlias extends Recipient {
  user_alias: UserAlias
}
