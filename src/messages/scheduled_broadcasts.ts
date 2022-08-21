import { get } from '../common/request'

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
export function scheduled_broadcasts(apiUrl: string, apiKey: string, body: { end_time: string }) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return get(
    `${apiUrl}/messages/scheduled_broadcasts?${new URLSearchParams(body)}`,
    {},
    options,
  ) as Promise<{
    scheduled_broadcasts: {
      name: string
      id: string
      type: 'Canvas' | 'Campaign'
      tags: string[]
      next_send_time: string
      schedule_type: 'local_time_zones' | 'intelligent_delivery' | string
    }[]
  }>
}
