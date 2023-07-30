import { buildOptions, post } from '../../common/request'
import type { SubscriptionStatusSetObject } from './types'

/**
 * Update user’s subscription group status.
 *
 * Use these endpoints to batch update the subscription state of up to 50 users on the Braze dashboard.
 *
 * {@link https://www.braze.com/docs/api/endpoints/subscription_groups/post_update_user_subscription_group_status/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function set(apiUrl: string, apiKey: string, body: SubscriptionStatusSetObject) {
  return post(`${apiUrl}/subscription/status/set`, body, buildOptions({ apiKey })) as Promise<{
    message: 'success' | string
  }>
}
