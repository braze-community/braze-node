import { ServerResponse } from '../common/request'

export * from './trigger/schedule/types'
export * from './trigger/types'

/**
 * Request parameters for canvases list.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/canvas/get_canvases/#request-parameters}
 */
export interface CanvasListParameters {
  page?: number
  include_archived?: boolean
  sort_direction?: string
  'last_edit.time[gt]'?: string
}

/**
 * Response body for canvases list.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/canvas/get_canvases/#response}
 */
export interface CanvasListResponse extends ServerResponse {
  canvases: {
    id: string
    last_edited: string
    name: string
    tags: string[]
  }[]
}
