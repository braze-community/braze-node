import { buildParams, get } from '../../common/request'
import { ContentBlockBody, ContentBlockResponse } from './types'

/**
 * Request content block.
 *
 * {@link https://www.braze.com/docs/api/endpoints/templates/content_blocks_templates/get_see_email_content_blocks_information/}
 */
export function getContentBlock(
  apiUrl: string,
  apiKey: string,
  body: ContentBlockBody,
): Promise<ContentBlockResponse> {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return get(`${apiUrl}/content_blocks/info?${buildParams(body)}`, options)
}
