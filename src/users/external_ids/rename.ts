import { buildOptions, post } from '../../common/request'
import type { UsersExternalIdsRenameObject } from './types'

/**
 * External ID rename.
 *
 * Use this endpoint to “rename” your users’ external IDs. This endpoint sets a new (primary) `external_id` for the user and deprecates their existing `external_id`.
 *
 * {@link https://www.braze.com/docs/api/endpoints/user_data/external_id_migration/post_external_ids_rename/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function rename(apiUrl: string, apiKey: string, body: UsersExternalIdsRenameObject) {
  return post(`${apiUrl}/users/external_ids/rename`, body, buildOptions({ apiKey })) as Promise<{
    message: string
    external_ids: string[]
    rename_errors: string[]
  }>
}
