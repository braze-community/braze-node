import { post } from '../common/request'
import type { UsersIdentifyObject } from './types'

/**
 * Identify users.
 *
 * Use this endpoint to identify an unidentified (alias-only) user.
 *
 * {@link https://www.braze.com/docs/api/endpoints/user_data/post_user_identify/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function identify(apiUrl: string, apiKey: string, body: UsersIdentifyObject) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return post(`${apiUrl}/users/identify`, body, options)
}
