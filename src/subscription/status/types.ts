/**
 * Request body for update user’s subscription group status.
 *
 * {@link https://www.braze.com/docs/api/endpoints/subscription_groups/post_update_user_subscription_group_status/#request-body}
 */
export type SubscriptionStatusSetObject =
  | SubscriptionStatusSetWithPhone
  | SubscriptionStatusSetWithEmail

/**
 * Request body for get users’ subscription group status.
 *
 * {@link https://www.braze.com/docs/api/endpoints/subscription_groups/get_list_user_subscription_group_status/#request-parameters}
 */
export interface SubscriptionStatusGetObject {
  subscription_group_id: string
  external_id?: string | string[]
  email?: string | string[]
  phone?: string | string[]
}

interface SubscriptionStatusSet {
  subscription_group_id: string
  subscription_state: 'unsubscribed' | 'subscribed'
  external_id: string[]
}

interface SubscriptionStatusSetWithPhone extends SubscriptionStatusSet {
  phone: string[]
}

interface SubscriptionStatusSetWithEmail extends SubscriptionStatusSet {
  email: string[]
}
