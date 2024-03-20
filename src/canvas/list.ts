import { buildOptions, buildParams, get } from '../common/request'
import type { CanvasListParameters, CanvasListResponse } from './types'

/**
 * Export canvas list.
 *
 * Use this endpoint to export a list of canvases, each of which will include its name, canvas API identifier, whether it is an API canvas, and tags associated with the canvas.
 *
 * {@link https://www.braze.com/docs/api/endpoints/export/canvas/get_canvases/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param parameters - Request parameters.
 * @returns - Braze response.
 */
export function list(apiUrl: string, apiKey: string, parameters?: CanvasListParameters) {
  return get(
    `${apiUrl}/canvas/list?${buildParams(parameters)}`,
    buildOptions({ apiKey }),
  ) as Promise<CanvasListResponse>
}
