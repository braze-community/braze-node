import { get as _get } from '../../common/request'
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
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  const params = new URLSearchParams()

  if (body.subscription_group_id) {
    params.append('subscription_group_id', body.subscription_group_id)
  }

  ;(['external_id', 'email', 'phone'] as const).forEach((key) => {
    if (Array.isArray(body[key])) {
      ;(body[key] as string[]).forEach((value) => params.append(key, value))
    } else if (body[key]) {
      params.append(key, body[key] as string)
    }
  })

  return _get(`${apiUrl}/subscription/status/get?${params}`, {}, options) as Promise<{
    status: Record<string, 'Subscribed' | 'Unsubscribed' | 'Unknown'>
    message: 'success' | string
  }>
}
