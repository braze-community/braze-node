import { buildOptions, post } from '../../../common/request'
import type { CanvasTriggerScheduleDeleteObject } from './types'

/**
 * Delete scheduled API-triggered canvases.
 *
 * The delete schedule endpoint allows you to cancel a message that you previously scheduled API-triggered Canvases before it has been sent.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/schedule_messages/post_delete_scheduled_triggered_canvases/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function _delete(apiUrl: string, apiKey: string, body: CanvasTriggerScheduleDeleteObject) {
  return post(`${apiUrl}/canvas/trigger/schedule/delete`, body, buildOptions({ apiKey }))
}
