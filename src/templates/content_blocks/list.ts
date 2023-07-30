import { buildOptions, buildParams, get } from '../../common/request'
import { ContentBlockListBody, ContentBlockListResponse } from './types'

/**
 * Request content block list.
 *
 * {@link https://www.braze.com/docs/api/endpoints/templates/content_blocks_templates/get_list_email_content_blocks/}
 */
export function listContentBlocks(
  apiUrl: string,
  apiKey: string,
  body: ContentBlockListBody,
): Promise<ContentBlockListResponse> {
  return get(`${apiUrl}/content_blocks/list?${buildParams(body)}`, buildOptions({ apiKey }))
}
