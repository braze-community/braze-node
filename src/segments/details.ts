import { buildOptions, buildParams, get } from '../common/request'
import type { SegmentsDetailsParameters, SegmentsDetailsResponse } from './types'

/**
 * Get segments list.
 *
 * Use this endpoint to get details on a segment, including its name, descriptions, created/updated times, tags and teams.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/segments/get_segment_details/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param parameters - Request parameters.
 * @returns - Braze response.
 */
export function details(apiUrl: string, apiKey: string, parameters: SegmentsDetailsParameters) {
  return get(
    `${apiUrl}/segments/details?${buildParams(parameters)}`,
    buildOptions({ apiKey }),
  ) as Promise<SegmentsDetailsResponse>
}
