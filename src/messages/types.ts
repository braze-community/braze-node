import type { ServerResponse } from '../common/request'
import type { ConnectedAudienceObject, UserAlias } from '../common/types'

export * from './schedule/types'

/**
 * Request body for sending messages immediately via API only.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/send_messages/post_send_messages/#request-parameters}
 */
export interface MessagesSendObject {
  broadcast?: boolean
  external_user_ids?: string[]
  user_aliases?: UserAlias[]
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
  apple_push?: ApplePushObject
  android_push?: AndroidPushObject
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
 * Apple push object
 *
 * {@link https://www.braze.com/docs/api/objects_filters/messaging/apple_object}
 */
export interface ApplePushObject {
  badge?: number
  alert?: string | ApplePushAlertObject
  sound?: string
  extra?: Record<string, string>
  'content-available'?: boolean
  interruption_level?: 'passive' | 'active' | 'time-sensitive' | 'critical'
  relevance_score?: number
  expiry?: string
  custom_uri?: string
  message_variation_id?: string
  notification_group_thread_id?: string
  asset_url?: string
  asset_file_type?: 'aif' | 'gif' | 'jpg' | 'm4a' | 'mp3' | 'mp4' | 'png' | 'wav'
  collapse_id?: string
  mutable_content?: boolean
  send_to_most_recent_device_only?: boolean
  category?: string
  buttons?: ApplePushActionButtonObject[]
  apns_priority?: number
}

/**
 * Apple push alert object
 *
 * {@link https://www.braze.com/docs/api/objects_filters/messaging/apple_object/#apple-push-alert-object}
 */
export interface ApplePushAlertObject {
  body: string
  title?: string
  title_loc_key?: string
  title_loc_args?: string[]
  action_loc_key?: string
  loc_key?: string
  loc_args?: string[]
  sound?: string
}

/**
 * Apple push action button object
 *
 * {@link https://www.braze.com/docs/api/objects_filters/messaging/apple_object/#apple-push-action-button-object}
 */
export interface ApplePushActionButtonObject {
  action_id: string
  action?: 'OPEN_APP' | 'URI' | 'DEEP_LINK' | 'CLOSE'
  uri?: string
  use_webview?: boolean
}

/**
 * Android push object
 *
 * {@link https://www.braze.com/docs/api/objects_filters/messaging/android_object}
 */
export interface AndroidPushObject {
  alert: string
  title: string
  extra?: Record<string, string>
  message_variation_id?: string
  notification_channel_id?: string
  priority?: number
  send_to_sync?: boolean
  collapse_key?: string
  sound?: string
  custom_uri?: string
  summary_text?: string
  time_to_live?: number
  notification_id?: number
  push_icon_image_url?: string
  accent_color?: number
  send_to_most_recent_device_only?: boolean
  buttons?: AndroidPushActionButtonObject[]
  conversation_data?: AndroidConversationPushObject
}

/**
 * Android push action button object
 *
 * {@link https://www.braze.com/docs/api/objects_filters/messaging/android_object/#android-push-action-button-object}
 */
export interface AndroidPushActionButtonObject {
  text: string
  action?: 'OPEN_APP' | 'URI' | 'DEEP_LINK' | 'CLOSE'
  uri?: string
  use_webview?: boolean
}

/**
 * Android conversation push object
 *
 * {@link https://www.braze.com/docs/api/objects_filters/messaging/android_object/#android-conversation-push-object}
 */
export interface AndroidConversationPushObject {
  shortcut_id: string
  reply_person_id: string
  messages: AndroidConversationPushMessageObject[]
  persons: AndroidConversationPushPersonObject[]
}

/**
 * Android conversation push message object
 *
 * {@link https://www.braze.com/docs/api/objects_filters/messaging/android_object/#android-conversation-push-message-object}
 */
export interface AndroidConversationPushMessageObject {
  text: string
  timestamp: number
  person_id: string
}

/**
 * Android conversation push person object
 *
 * {@link https://www.braze.com/docs/api/objects_filters/messaging/android_object/#android-conversation-push-person-object}
 */
export interface AndroidConversationPushPersonObject {
  id: string
  name: string
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

export interface ScheduledBroadcastsObject {
  end_time: string
}

export interface ScheduledBroadcastsResponse extends ServerResponse {
  scheduled_broadcasts: {
    name: string
    id: string
    type: 'Canvas' | 'Campaign'
    tags: string[]
    next_send_time: string
    schedule_type: 'local_time_zones' | 'intelligent_delivery' | string
  }[]
}
