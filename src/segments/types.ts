import type { ServerResponse } from '../common/request'

/**
 * Request parameters for segments analytics.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/segments/get_segment_analytics/#request-parameters}
 */
export interface SegmentsAnalyticsParameters {
  segment_id: string
  length: number
  ending_at?: string
}

/**
 * Response body for segments analytics.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/segments/get_segment_analytics/#response}
 */
export interface SegmentsAnalyticsResponse extends ServerResponse {
  data: {
    time: string
    size: number
  }[]
}

/**
 * Request parameters for segments details.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/segments/get_segment_details/#request-parameters}
 */
export interface SegmentsDetailsParameters {
  segment_id: string
}

/**
 * Response body for segments details.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/segments/get_segment_details/#response}
 */
export interface SegmentsDetailsResponse extends ServerResponse {
  message: string
  name?: string
  description?: string
  text_description?: string
  tags?: string[]
  teams?: string[]
  created_at?: string
  updated_at?: string
}

/**
 * Request parameters for segments list.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/segments/get_segment/#request-parameters}
 */
export interface SegmentsListParameters {
  page?: number
  sort_direction?: string
}

/**
 * Response body for segments list.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/segments/get_segment/#response}
 */
export interface SegmentsListResponse extends ServerResponse {
  segments: {
    id: string
    name: string
    analytics_tracking_enabled: boolean
    tags: string[]
  }[]
}
