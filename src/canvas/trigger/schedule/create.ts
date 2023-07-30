import { buildOptions, post } from '../../../common/request'
import type { CanvasTriggerScheduleCreateObject } from './types'
import { CanvasTriggerScheduleCreatResponse } from './types'

/**
 * Schedule API-triggered canvases.
 *
 * Use this endpoint to trigger API-Triggered Canvases, which are created on the dashboard and initiated via the API.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/schedule_messages/post_schedule_triggered_canvases/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function create(
  apiUrl: string,
  apiKey: string,
  body: CanvasTriggerScheduleCreateObject,
): Promise<CanvasTriggerScheduleCreatResponse> {
  return post(`${apiUrl}/canvas/trigger/schedule/create`, body, buildOptions({ apiKey }))
}
