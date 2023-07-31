import type { ServerResponse } from '../common/request'

export * from './trigger/schedule/types'
export * from './trigger/types'

/**
 * Request parameters for campaigns list.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/campaigns/get_campaigns/#request-parameters}
 */
export interface CampaignsListParameters {
  page?: number
  include_archived?: boolean
  sort_direction?: string
  'last_edit.time[gt]'?: string
}

/**
 * Response body for campaigns list.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/campaigns/get_campaigns/#response}
 */
export interface CampaignsListResponse extends ServerResponse {
  campaigns: {
    id: string
    last_edited: string
    name: string
    is_api_campaign: boolean
    tags: string[]
  }[]
}
