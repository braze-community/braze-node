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
 * A Connected Audience Object is a selector that identifies the audience to send the message to. It is composed of either a single Connected Audience Filter or several Connected Audience Filters in a logical expression using either AND or OR operators.
 *
 * {@link https://www.braze.com/docs/api/objects_filters/connected_audience/}
 */
export interface ConnectedAudienceObject {
  AND?: (ConnectedAudienceFilter | ConnectedAudienceObject)[]
  OR?: (ConnectedAudienceFilter | ConnectedAudienceObject)[]
}

interface ConnectedAudienceFilter {
  custom_attribute?: {
    custom_attribute_name: string
    comparison: Comparison
    value: string | number | boolean
  }
  push_subscription_status?: {
    comparison: 'is' | 'is_not'
    value: 'opted_in' | 'subscribed' | 'unsubscribed'
  }
  email_subscription_status?: {
    comparison: 'is' | 'is_not'
    value: 'opted_in' | 'subscribed' | 'unsubscribed'
  }
  last_used_app?: {
    comparison: 'after' | 'before'
    value: string
  }
}

type Comparison =
  | 'after'
  | 'before'
  | 'does_not_equal'
  | 'does_not_exist'
  | 'does_not_include_value'
  | 'does_not_match_regex'
  | 'equals'
  | 'exists'
  | 'greater_than'
  | 'greater_than_or_equal_to'
  | 'greater_than_x_days_ago'
  | 'greater_than_x_days_in_the_future'
  | 'includes_value'
  | 'less_than'
  | 'less_than_or_equal_to'
  | 'less_than_x_days_ago'
  | 'less_than_x_days_in_the_future'
  | 'matches_regex'
  | 'not_equal'

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
  email_template_id?: string
}

interface EmailObjectWithEmailTemplateId extends EmailObject {
  body?: string
  email_template_id: string
}
