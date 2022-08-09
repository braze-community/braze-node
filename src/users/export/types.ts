import type { UserAlias } from '../../common/types'

/**
 * Request body for users by identifier endpoint.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/user_data/post_users_identifier/#request-body}
 */
export interface UsersExportIdsObject {
  external_ids?: string[]
  user_aliases?: UserAlias[]
  device_id?: string
  braze_id?: string
  email_address?: string
  phone?: string
  fields_to_export?: FieldsToExport[]
}

/**
 * Response body for users by identifier endpoint.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/user_data/post_users_identifier/#response}
 */
export interface UsersExportIdsResponse {
  message: string
  users: Partial<UserExportObject>[]
  invalid_user_ids?: string[]
}

/**
 * Request body for users by segment endpoint.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/user_data/post_users_segment/#request-body}
 */
export interface UsersExportSegmentObject {
  segment_id: string
  callback_endpoint?: string
  fields_to_export: FieldsToExport[]
  output_format?: 'zip' | 'gzip'
}

/**
 * Response body for users by segment endpoint.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/user_data/post_users_segment/#response}
 */
export interface UsersExportSegmentResponse {
  message: string
  object_prefix: string
  url?: string
}

interface UserExportObject {
  created_at: string
  external_id: string
  user_aliases: UserAlias[]
  braze_id: string
  random_bucket: number
  first_name: string
  last_name: string
  email: string
  dob: string
  home_city: string
  country: string
  phone: string
  language: string
  time_zone: string
  last_coordinates: [number, number]
  gender: 'M' | 'F' | 'O' | 'N' | 'P' | null
  total_revenue: number
  attributed_campaign: string
  attributed_source: string
  attributed_adgroup: string
  attributed_ad: string
  push_subscribe: 'opted_in' | 'subscribed' | 'unsubscribed'
  push_opted_in_at: string
  email_subscribe: 'opted_in' | 'subscribed' | 'unsubscribed'
  custom_attributes: object
  custom_events: Partial<CustomEvent>[]
  purchases: Partial<Purchase>[]
  devices: Partial<Device>[]
  push_tokens: Partial<PushToken>[]
  apps: Partial<App>[]
  campaigns_received: Partial<CampaignReceived>[]
  canvases_received: Partial<CanvasReceived>[]
  cards_clicked: { name: string }[]
}

interface CustomEvent {
  name: string
  first: string
  last: string
  count: number
}

interface Purchase {
  name: string
  first: string
  last: string
  count: number
}

interface Device {
  model: string
  os: string
  carrier?: string | null
  device_id?: string
  idfv?: string
  idfa?: string | null
  google_ad_id?: string | null
  roku_ad_id?: string
  windows_ad_id?: string
  ad_tracking_enabled: boolean
}

interface PushToken {
  app: string
  platform: string
  token: string
  device_id?: string
  notifications_enabled?: boolean
}

interface App {
  name: string
  platform: string
  version: string
  sessions: number
  first_used: string
  last_used: string
}

interface CampaignReceived {
  name: string
  last_received: string
  engaged: {
    opened_email?: boolean
    opened_push?: boolean
    clicked_email?: boolean
    clicked_triggered_in_app_message?: boolean
  }
  converted: boolean
  multiple_converted?: object
  api_campaign_id: string
  variation_name?: string
  variation_api_id?: string
  in_control?: boolean
}

interface CanvasReceived {
  name: string
  api_canvas_id: string
  last_received_message: string
  last_entered: string
  variation_name: string
  in_control: boolean
  last_entered_control_at?: string | null
  last_exited: string
  steps_received: {
    name: string
    api_canvas_step_id: string
    last_received: string
  }[]
}

/**
 * The following is a list of valid `fields_to_export`.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/user_data/post_users_identifier/#fields-to-export}
 * {@link https://www.braze.com/docs/api/endpoints/export/user_data/post_users_segment/#fields-to-export}
 */
type FieldsToExport =
  | 'apps'
  | 'attributed_campaign'
  | 'attributed_source'
  | 'attributed_adgroup'
  | 'attributed_ad'
  | 'braze_id'
  | 'country'
  | 'created_at'
  | 'custom_attributes'
  | 'custom_events'
  | 'devices'
  | 'dob'
  | 'email'
  | 'external_id'
  | 'first_name'
  | 'gender'
  | 'home_city'
  | 'language'
  | 'last_coordinates'
  | 'last_name'
  | 'phone'
  | 'purchases'
  | 'random_bucket'
  | 'time_zone'
  | 'total_revenue'
  | 'uninstalled_at'
  | 'user_aliases'
