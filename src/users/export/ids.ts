import { post } from '../../common/request'
import type { UsersExportsIdsObject, UsersExportsIdsResponse } from './types'

/**
 * Users by identifier endpoint.
 *
 * This endpoint allows you to export data from any user profile by specifying a form of user identifier.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/user_data/post_users_identifier/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function ids(apiUrl: string, apiKey: string, body: UsersExportsIdsObject) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return post(`${apiUrl}/users/export/ids`, body, options) as Promise<UsersExportsIdsResponse>
}
