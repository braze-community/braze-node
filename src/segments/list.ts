import { buildOptions, buildParams, get } from '../common/request'
import type { SegmentsListParameters, SegmentsListResponse } from './types'

/**
 * Get segments list.
 *
 * Use this endpoint to export a list of segments, each of which will include its name, segment API identifier, whether it has analytics tracking enabled, and tags associated with the segment.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/segments/get_segment/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param parameters - Request parameters.
 * @returns - Braze response.
 */
export function list(apiUrl: string, apiKey: string, parameters?: SegmentsListParameters) {
  return get(
    `${apiUrl}/segments/list?${buildParams(parameters)}`,
    buildOptions({ apiKey }),
  ) as Promise<SegmentsListResponse>
}
