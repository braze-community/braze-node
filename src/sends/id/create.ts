import { post } from '../../common/request'
import type { SendsIdCreateObject } from './types'

/**
 * Create send IDs for message send tracking.
 *
 * Braze’s Send Identifier adds the ability to send messages and track message performance entirely programmatically, without campaign creation for each send.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/send_messages/post_create_send_ids/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function create(apiUrl: string, apiKey: string, body: SendsIdCreateObject) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return post(`${apiUrl}/sends/id/create`, body, options) as Promise<{
    message: string
    send_id: string
  }>
}
