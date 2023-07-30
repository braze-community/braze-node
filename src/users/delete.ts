import { buildOptions, post } from '../common/request'
import type { UsersDeleteObject } from './types'
import { UsersDeleteResponse } from './types'

/**
 * User delete endpoint.
 *
 * This endpoint allows you to delete any user profile by specifying a known user identifier.
 *
 * {@link https://www.braze.com/docs/api/endpoints/user_data/post_user_delete/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function _delete(
  apiUrl: string,
  apiKey: string,
  body: UsersDeleteObject,
): Promise<UsersDeleteResponse> {
  return post(`${apiUrl}/users/delete`, body, buildOptions({ apiKey }))
}
