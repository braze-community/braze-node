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

export type TriggerProperties = object

export type Properties = object

export type Attributes = object

export interface UserAlias {
  alias_name: string
  alias_label: string
}

/**
 * Prioritization options for user merging when multiple users are found.
 * This is an ordered array - if more than one user matches from a prioritization, merging will not occur.
 * {@link https://www.braze.com/docs/api/endpoints/user_data/post_user_identify#identifying-users-by-email}
 */
export type Prioritization =
  | 'identified'
  | 'unidentified'
  | 'most_recently_updated'
  | 'least_recently_updated'

/**
 * Schedule object specification.
 *
 * {@link https://www.braze.com/docs/api/objects_filters/schedule_object/}
 */
export interface ScheduleObject {
  time: string
  in_local_time?: boolean
  at_optimal_time?: boolean
}
