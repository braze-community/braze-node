import { buildOptions, post } from '../../common/request'
import type { CanvasTriggerSendObject } from './types'

/**
 * Sending Canvas messages via API-triggered delivery.
 *
 * This endpoint allows you to send Canvas messages via API-Triggered delivery, allowing you to decide what action should trigger the message to be sent.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/send_messages/post_send_triggered_canvases/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function send(apiUrl: string, apiKey: string, body: CanvasTriggerSendObject) {
  return post(`${apiUrl}/canvas/trigger/send`, body, buildOptions({ apiKey })) as Promise<{
    dispatch_id: string
    message: string
  }>
}
