import { buildOptions, buildParams, get } from '../common/request'
import type { CampaignsListParameters, CampaignsListResponse } from './types'

/**
 * Export campaigns list.
 *
 * Use this endpoint to export a list of campaigns, each of which will include its name, campaign API identifier, whether it is an API campaign, and tags associated with the campaign.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/campaigns/get_campaigns/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param parameters - Request parameters.
 * @returns - Braze response.
 */
export function list(apiUrl: string, apiKey: string, parameters?: CampaignsListParameters) {
  return get(
    `${apiUrl}/campaigns/list?${buildParams(parameters)}`,
    buildOptions({ apiKey }),
  ) as Promise<CampaignsListResponse>
}
