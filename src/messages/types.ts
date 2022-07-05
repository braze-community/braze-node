import type { ConnectedAudienceObject } from '../common/types'

/**
 * Request body for sending messages immediately via API only.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/send_messages/post_send_messages/#request-parameters}
 */
export interface MessagesSendObject {
  broadcast?: boolean
  external_user_ids?: string[]
  user_aliases?: {
    alias_name: string
    alias_label: string
  }[]
  segment_id?: string
  audience?: ConnectedAudienceObject
  campaign_id?: string
  send_id?: string
  override_frequency_capping?: boolean
  recipient_subscription_state?: string
  messages?: MessagesObject
}

/**
 * Messaging objects.
 *
 * {@link https://www.braze.com/docs/api/objects_filters/#messaging-objects}
 */
export interface MessagesObject {
  apple_push?: object
  android_push?: object
  windows_phone8_push?: object
  windows_universal_push?: object
  kindle_push?: object
  web_push?: object
  email?: EmailObjectWithBody | EmailObjectWithEmailTemplateId
  webhook?: object
  content_card?: object
  sms?: object
}

/**
 * {@link https://www.braze.com/docs/api/objects_filters/messaging/email_object/}
 */
interface EmailObject {
  app_id: string
  subject?: string
  from: string
  reply_to?: string
  bcc?: string
  plaintext_body?: string
  preheader?: string
  message_variation_id?: string
  extras?: Record<string, string>
  headers?: Record<string, string>
  should_inline_css?: boolean
  attachments?: {
    file_name: string
    url: string
  }[]
}

interface EmailObjectWithBody extends EmailObject {
  body: string
}

interface EmailObjectWithEmailTemplateId extends EmailObject {
  email_template_id: string
}
