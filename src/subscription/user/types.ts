/**
 * Request body for get users’ subscription groups.
 *
 * {@link https://www.braze.com/docs/api/endpoints/subscription_groups/get_list_user_subscription_groups/#request-parameters}
 */
export interface SubscriptionUserStatusObject {
  external_id: string | string[]
  email?: string | string[]
  phone?: string | string[]
  limit?: number
  offset?: number
}
