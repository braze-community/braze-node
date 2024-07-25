import { buildOptions, buildParams, get } from '../common/request'
import type { SegmentsAnalyticsParameters, SegmentsAnalyticsResponse } from './types'

/**
 * Get segments analytics.
 *
 * Use this endpoint to get analytics on a segment, which includes the size of the segment for each of the requested number of days.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/segments/get_segment_analytics/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param parameters - Request parameters.
 * @returns - Braze response.
 */
export function analytics(apiUrl: string, apiKey: string, parameters: SegmentsAnalyticsParameters) {
  return get(
    `${apiUrl}/segments/data_series?${buildParams(parameters)}`,
    buildOptions({ apiKey }),
  ) as Promise<SegmentsAnalyticsResponse>
}
