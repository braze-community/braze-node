import { post } from '../common/request'
import type { UsersTrackObject } from './types'

/**
 * User track.
 *
 * Use this endpoint to record custom events, purchases, and update user profile attributes.
 *
 * {@link https://www.braze.com/docs/api/endpoints/user_data/post_user_track/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @param bulk - Bulk update.
 * @returns - Braze response.
 */
export function track(apiUrl: string, apiKey: string, body: UsersTrackObject, bulk?: boolean) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  if (bulk) {
    ;(options.headers as Record<string, string>)['X-Braze-Bulk'] = 'true'
  }

  return post(`${apiUrl}/users/track`, body, options) as Promise<{
    message: string
    attributes_processed?: number
    events_processed?: number
    purchases_processed?: number
    errors?: object
  }>
}
