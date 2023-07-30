import { buildOptions, post } from '../../common/request'
import type { UsersAliasObject } from './types'

/**
 * Create new user alias.
 *
 * Use this endpoint to add new user aliases for existing identified users, or to create new unidentified users.
 *
 * {@link https://www.braze.com/docs/api/endpoints/user_data/post_user_alias/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function _new(apiUrl: string, apiKey: string, body: UsersAliasObject) {
  return post(`${apiUrl}/users/alias/new`, body, buildOptions({ apiKey }))
}
