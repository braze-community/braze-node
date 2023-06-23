import { post } from '../common/request'
import type { UsersMergeObject } from './types'

/**
 * Merge users.
 *
 * Use this endpoint to merge one user into another user.
 *
 * {@link https://www.braze.com/docs/api/endpoints/user_data/post_users_merge/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function merge(apiUrl: string, apiKey: string, body: UsersMergeObject) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return post(`${apiUrl}/users/merge`, body, options)
}
