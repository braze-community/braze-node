/**
 * Request body for update user’s subscription group status.
 *
 * {@link https://www.braze.com/docs/api/endpoints/subscription_groups/post_update_user_subscription_group_status_v2/#request-body}
 */
export interface V2SubscriptionStatusSetObject {
  subscription_groups:
    | SubscriptionGroupWithExternalIds[]
    | SubscriptionGroupWithPhones[]
    | SubscriptionGroupWithEmails[]
}

interface SubscriptionGroup {
  subscription_group_id: string
  subscription_state: 'unsubscribed' | 'subscribed'
}

interface SubscriptionGroupWithExternalIds extends SubscriptionGroup {
  external_ids: string[]
}

interface SubscriptionGroupWithPhones extends SubscriptionGroup {
  phones: string[]
}

interface SubscriptionGroupWithEmails extends SubscriptionGroup {
  emails: string[]
}
