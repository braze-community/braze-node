import { get } from '../common/request'
import { buildParams } from '../common/request/params'
import { ScheduledBroadcastsObject, ScheduledBroadcastsResponse } from './types'

/**
 * Get upcoming scheduled campaigns and Canvases.
 *
 * The endpoint will return information about scheduled campaigns and entry Canvases between now and the designated `end_time` specified in the request.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/schedule_messages/get_messages_scheduled/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function scheduled_broadcasts(
  apiUrl: string,
  apiKey: string,
  body: ScheduledBroadcastsObject,
): Promise<ScheduledBroadcastsResponse> {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return get(`${apiUrl}/messages/scheduled_broadcasts?${buildParams(body)}`, {}, options)
}
