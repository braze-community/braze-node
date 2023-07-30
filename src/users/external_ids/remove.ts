import { buildOptions, post } from '../../common/request'
import type { UsersExternalIdsRemoveObject } from './types'

/**
 * External ID remove.
 *
 * For security purposes, this feature is disabled by default. To enable this feature, reach out to your Success Manager.
 *
 * Use this endpoint to remove your users’ old deprecated external IDs. This endpoint completely removes the deprecated ID and cannot be undone.
 *
 * {@link https://www.braze.com/docs/api/endpoints/user_data/external_id_migration/post_external_ids_remove/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function remove(apiUrl: string, apiKey: string, body: UsersExternalIdsRemoveObject) {
  return post(`${apiUrl}/users/external_ids/remove`, body, buildOptions({ apiKey })) as Promise<{
    message: string
    removed_ids: string[]
    removal_errors: string[]
  }>
}
