import type { UserAlias } from '../../common/types'

/**
 * {@link https://www.braze.com/docs/api/endpoints/user_data/post_user_alias/#request-body}
 */
export interface UsersAliasObject {
  user_aliases: UserAliasObject[]
}

interface UserAliasObject extends UserAlias {
  external_id?: string
}

export interface UserAliasUpdateObject {
  alias_label: string
  old_alias_name: string
  new_alias_name: string
}

/**
 * {@link https://www.braze.com/docs/api/endpoints/user_data/post_users_alias_update/#request-body}
 */
export interface UserAliasUpdates {
  alias_updates: UserAliasUpdateObject[]
}
