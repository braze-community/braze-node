import type {
  Attributes,
  ConnectedAudienceObject,
  TriggerProperties,
  UserAlias,
} from '../../common/types'

/**
 * Request body for sending Canvas messages via API-triggered delivery.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/send_messages/post_send_triggered_canvases/#request-body}
 */
export interface CanvasTriggerSendObject {
  canvas_id: string
  canvas_entry_properties?: CanvasEntryProperties
  broadcast?: boolean
  audience?: ConnectedAudienceObject
  recipients?: (RecipientWithExternalUserId | RecipientWithUserAlias)[]
}

type CanvasEntryProperties = object

interface Recipient {
  canvas_entry_properties?: CanvasEntryProperties
  send_to_existing_only?: boolean
  attributes?: Attributes
  trigger_properties?: TriggerProperties
}

interface RecipientWithExternalUserId extends Recipient {
  external_user_id: string
}

interface RecipientWithUserAlias extends Recipient {
  user_alias: UserAlias
}
