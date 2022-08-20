import { post } from '../../common/request'
import type { MessagesScheduleDeleteObject } from './types'

/**
 * Delete scheduled messages.
 *
 * The delete scheduled messages endpoint allows you to cancel a message that you previously scheduled before it has been sent.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/schedule_messages/post_delete_scheduled_messages/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function _delete(apiUrl: string, apiKey: string, body: MessagesScheduleDeleteObject) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return post(`${apiUrl}/messages/schedule/delete`, body, options)
}
