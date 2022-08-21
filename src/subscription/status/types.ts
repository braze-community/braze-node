/**
 * Request body for update user’s subscription group status.
 *
 * {@link https://www.braze.com/docs/api/endpoints/subscription_groups/post_update_user_subscription_group_status/#request-body}
 */
export type SubscriptionStatusSetObject = SubscriptionStatusWithPhone | SubscriptionStatusWithEmail

interface SubscriptionStatus {
  subscription_group_id: string
  subscription_state: 'unsubscribed' | 'subscribed'
  external_id: string[]
}

interface SubscriptionStatusWithPhone extends SubscriptionStatus {
  phone: string[]
}

interface SubscriptionStatusWithEmail extends SubscriptionStatus {
  email: string[]
}
