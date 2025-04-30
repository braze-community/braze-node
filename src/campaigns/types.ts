import type { ServerResponse } from '../common/request'

export * from './trigger/schedule/types'
export * from './trigger/types'

/**
 * Request parameters for campaigns details.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/campaigns/get_campaign_details/#request-parameters}
 */
export interface CampaignsDetailsParameters {
  campaign_id: string
}

/**
 * Response body for campaigns details.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/campaigns/get_campaign_details/#responses}
 */
export interface CampaignsDetailsResponse extends ServerResponse {
  message: string
  created_at: string
  updated_at: string
  archived: boolean
  draft: boolean
  name: string
  description: string
  schedule_type: string
  channels: string[]
  first_sent: string
  last_sent: string
  tags: string[]
  teams: string[]
  messages: {
    message_variation_id: string
    channel: string
    name: string
    [key: string]: unknown
  }[]
  conversion_behaviors: {
    type: string
    window: number
    product?: string
    custom_event_name?: string
    app_ids?: string[] | null
  }[]
}

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
