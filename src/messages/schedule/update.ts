import { buildOptions, post } from '../../common/request'
import type { MessagesScheduleUpdateObject } from './types'

/**
 * Update scheduled messages.
 *
 * The messages update schedule endpoint accepts updates to either the `schedule` or `messages` parameter or both.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/schedule_messages/post_update_scheduled_messages/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function update(apiUrl: string, apiKey: string, body: MessagesScheduleUpdateObject) {
  return post(`${apiUrl}/messages/schedule/update`, body, buildOptions({ apiKey }))
}
