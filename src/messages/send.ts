import { post } from '../common/request'
import type { MessagesSendObject } from './types'

/**
 * Sending messages immediately via API only.
 *
 * This endpoint allows you send your messages using our API. Be sure to include Messaging Objects in your body to complete your requests.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/send_messages/post_send_messages/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function send(apiUrl: string, apiKey: string, body: MessagesSendObject) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return post(`${apiUrl}/messages/send`, body, options) as Promise<{
    dispatch_id: string
    message: string
  }>
}
