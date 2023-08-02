import { buildOptions, buildParams, get as _get } from '../../common/request'
import type { SubscriptionStatusGetObject } from './types'

/**
 * Get users’ subscription group status.
 *
 * Use these endpoints to get the subscription state of a user in a subscription group.
 *
 * {@link https://www.braze.com/docs/api/endpoints/subscription_groups/get_list_user_subscription_group_status/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function get(apiUrl: string, apiKey: string, body: SubscriptionStatusGetObject) {
  const newBody = Object.entries(body).reduce((agg, [key, value]) => {
    switch (key) {
      case 'email':
      case 'external_id':
      case 'phone':
        return { ...agg, [Array.isArray(value) ? key + '[]' : key]: value }
      default:
        return { ...agg, [key]: value }
    }
  }, {})
  return _get(
    `${apiUrl}/subscription/status/get?${buildParams(newBody)}`,
    buildOptions({ apiKey }),
  ) as Promise<{
    status: Record<string, 'Subscribed' | 'Unsubscribed' | 'Unknown'>
    message: 'success' | string
  }>
}
