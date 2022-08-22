import { post } from '../../../common/request'
import type { V2SubscriptionStatusSetObject } from './types'

/**
 * Update user’s subscription group status.
 *
 * Use this endpoint to update the subscription group status of up to 50 users on the Braze dashboard.
 *
 * {@link https://www.braze.com/docs/api/endpoints/subscription_groups/post_update_user_subscription_group_status_v2/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function set(apiUrl: string, apiKey: string, body: V2SubscriptionStatusSetObject) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return post(`${apiUrl}/v2/subscription/status/set`, body, options) as Promise<{
    message: 'success' | string
  }>
}
