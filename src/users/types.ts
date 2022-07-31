import type { Properties, UserAlias } from '../common/types'

/**
 * Request body for user track.
 *
 * {@link https://www.braze.com/docs/api/endpoints/user_data/post_user_track/#request-body}
 */
export interface UsersTrackObject {
  attributes?: UserAttributesObject[]
  events?: EventObject[]
  purchases?: PurchaseObject[]
}

/**
 * Request body for user track.
 *
 * {@link https://www.braze.com/docs/api/endpoints/user_data/post_user_identify/#request-body}
 */
export interface UsersIdentifyObject {
  aliases_to_identify: {
    external_id: string
    user_alias: UserAlias
  }[]
}

/**
 * User attributes object specification.
 *
 * {@link https://www.braze.com/docs/api/objects_filters/user_attributes_object}
 */
interface UserAttributesObject extends UserProfileField {
  external_id?: string
  user_alias?: UserAlias
  braze_id?: string
  _update_existing_only?: boolean
  push_token_import?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [custom_attribute: string]: any
}

/**
 * Braze user profile fields.
 *
 * {@link https://www.braze.com/docs/api/objects_filters/user_attributes_object}
 */
interface UserProfileField {
  country?: string
  current_location?: {
    longitude: number
    latitude: number
  }
  date_of_first_session?: string
  date_of_last_session?: string
  dob?: string
  email?: string
  email_subscribe?: 'opted_in' | 'unsubscribed' | 'subscribed'
  email_open_tracking_disabled?: boolean
  email_click_tracking_disabled?: boolean
  external_id?: string
  facebook?: string
  first_name?: string
  gender?: 'M' | 'F' | 'O' | 'N' | 'P' | null
  home_city?: string
  language?: string
  last_name?: string
  marked_email_as_spam_at?: string
  phone?: string
  push_subscribe?: 'opted_in' | 'unsubscribed' | 'subscribed'
  time_zone?: string
  twitter?: string
}

/**
 * Event object specification.
 *
 * {@link https://www.braze.com/docs/api/objects_filters/event_object/}
 */
interface EventObject {
  external_id?: string
  user_alias?: UserAlias
  braze_id?: string
  app_id?: string
  name: string
  time: string
  properties?: Properties
  _update_existing_only?: boolean
}

/**
 * Purchase object specification.
 *
 * {@link https://www.braze.com/docs/api/objects_filters/purchase_object/}
 */
interface PurchaseObject {
  external_id?: string
  user_alias?: UserAlias
  braze_id?: string
  app_id: string
  product_id: string
  currency: string
  price: number
  quantity?: number
  time: string
  properties?: Properties
  _update_existing_only?: boolean
}
