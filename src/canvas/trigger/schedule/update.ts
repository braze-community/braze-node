import { post } from '../../../common/request'
import type { CanvasTriggerScheduleUpdateObject } from './types'

/**
 * Update scheduled API-triggered canvases.
 *
 * Use this endpoint to update scheduled API-Triggered Canvases, which are created on the dashboard and initiated via the API.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/schedule_messages/post_update_scheduled_triggered_canvases/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function update(apiUrl: string, apiKey: string, body: CanvasTriggerScheduleUpdateObject) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return post(`${apiUrl}/canvas/trigger/schedule/update`, body, options)
}
