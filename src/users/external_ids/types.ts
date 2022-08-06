/**
 * Request body for external ID rename.
 *
 * {@link https://www.braze.com/docs/api/endpoints/user_data/external_id_migration/post_external_ids_rename/#request-body}
 */
export interface UsersExternalIdsRenameObject {
  external_id_renames: {
    current_external_id: string
    new_external_id: string
  }[]
}
