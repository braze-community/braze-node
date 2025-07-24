import type {
  Attributes,
  ConnectedAudienceObject,
  PrioritizationOption,
  TriggerProperties,
  UserAlias,
} from '../../common/types'
import { CanvasEntryProperties } from '../../canvas'

/**
 * Request body for sending campaign messages via API-triggered delivery.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/send_messages/post_send_triggered_campaigns/#request-body}
 */
export interface CampaignsTriggerSendObject {
  attachments?: { file_name: string; url: string }[]
  audience?: ConnectedAudienceObject
  broadcast?: boolean
  campaign_id: string
  recipients?: (RecipientWithEmail | RecipientWithExternalUserId | RecipientWithUserAlias)[]
  send_id?: string
  trigger_properties?: TriggerProperties
}

interface Recipient {
  attributes?: Attributes
  canvas_entry_properties?: CanvasEntryProperties
  send_to_existing_only?: boolean
  trigger_properties?: TriggerProperties
}

interface RecipientWithEmail extends Recipient {
  email: string
  prioritization?: PrioritizationOption[]
}

interface RecipientWithExternalUserId extends Recipient {
  external_user_id: string
  prioritization?: PrioritizationOption[]
}

interface RecipientWithUserAlias extends Recipient {
  prioritization?: PrioritizationOption[]
  user_alias: UserAlias
}
