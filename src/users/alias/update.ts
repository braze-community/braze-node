import { buildOptions, post } from '../../common/request'
import { UserAliasUpdates } from './types'

/**
 * Update user alias.
 *
 * Use this endpoint to add update user aliases for existing identified users.
 *
 * {@link https://www.braze.com/docs/api/endpoints/user_data/post_user_alias/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Alias update request {@link UserAliasUpdates}.
 * @returns - Braze response.
 */
export function _update(apiUrl: string, apiKey: string, body: UserAliasUpdates) {
  return post(`${apiUrl}/users/alias/update`, body, buildOptions({ apiKey }))
}
