import { buildOptions, buildParams, get } from '../../common/request'
import type { SubscriptionUserStatusObject } from './types'

/**
 * Get users’ subscription groups.
 *
 * Use these endpoints to list and get the subscription groups of a certain user.
 *
 * {@link https://www.braze.com/docs/api/endpoints/subscription_groups/get_list_user_subscription_groups/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function status(apiUrl: string, apiKey: string, body: SubscriptionUserStatusObject) {
  return get(`${apiUrl}/subscription/user/status?${buildParams(body)}`, buildOptions({ apiKey }))
}
