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
