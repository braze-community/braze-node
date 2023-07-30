import { buildOptions, post } from '../../common/request'
import type {
  UsersExportGlobalControlGroupObject,
  UsersExportGlobalControlGroupResponse,
} from './types'

/**
 * Users by Global Control Group.
 *
 * This endpoint allows you to export all the users within the Global Control Group.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/user_data/post_users_global_control_group/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function global_control_group(
  apiUrl: string,
  apiKey: string,
  body: UsersExportGlobalControlGroupObject,
) {
  return post(
    `${apiUrl}/users/export/global_control_group`,
    body,
    buildOptions({ apiKey }),
  ) as Promise<UsersExportGlobalControlGroupResponse>
}
