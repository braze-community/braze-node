import { buildOptions, post } from '../../common/request'
import { CreateContentBlockBody, PostContentBlockResponse } from './types'

/**
 * Create content block.
 *
 * {@link https://www.braze.com/docs/api/endpoints/templates/content_blocks_templates/post_create_email_content_block/}
 */
export function createContentBlock(
  apiUrl: string,
  apiKey: string,
  body: CreateContentBlockBody,
): Promise<PostContentBlockResponse> {
  return post(`${apiUrl}/content_blocks/create`, body, buildOptions({ apiKey }))
}
