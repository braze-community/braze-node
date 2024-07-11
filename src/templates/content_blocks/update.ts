import { buildOptions, post } from '../../common/request'
import { PostContentBlockResponse, UpdateContentBlockBody } from './types'

/**
 * Update content block.
 *
 * {@link https://www.braze.com/docs/api/endpoints/templates/content_blocks_templates/post_update_content_block/}
 */
export function updateContentBlock(
  apiUrl: string,
  apiKey: string,
  body: UpdateContentBlockBody,
): Promise<PostContentBlockResponse> {
  return post(`${apiUrl}/content_blocks/update`, body, buildOptions({ apiKey }))
}
