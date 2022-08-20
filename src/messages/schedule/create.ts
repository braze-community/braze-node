import { post } from '../../common/request'
import type { MessagesScheduleCreateObject } from './types'

/**
 * Create scheduled messages.
 *
 * Use this endpoint to send messages directly from the API.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/schedule_messages/post_schedule_messages/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function create(apiUrl: string, apiKey: string, body: MessagesScheduleCreateObject) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return post(`${apiUrl}/messages/schedule/create`, body, options) as Promise<{
    dispatch_id: string
    schedule_id: string
    message: 'success' | string
  }>
}
