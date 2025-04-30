import { buildOptions, buildParams, get } from '../common/request'
import type { CampaignsDetailsParameters, CampaignsDetailsResponse } from './types'

/**
 * Export campaigns details.
 *
 * Use this endpoint to retrieve relevant information on a specified campaign, which can be identified by the `campaign_id`.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/campaigns/get_campaign_details}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param parameters - Request parameters.
 * @returns - Braze response.
 */
export function details(apiUrl: string, apiKey: string, parameters?: CampaignsDetailsParameters) {
  return get(
    `${apiUrl}/campaigns/details?${buildParams(parameters)}`,
    buildOptions({ apiKey }),
  ) as Promise<CampaignsDetailsResponse>
}
