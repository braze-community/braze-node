import { ServerResponse } from '../../common/request'

/**
 * Request body for content block list.
 *
 * {@link https://www.braze.com/docs/api/endpoints/templates/content_blocks_templates/get_list_email_content_blocks/}
 */
export interface ContentBlockListBody {
  modified_after?: string
  modified_before?: string
  limit?: number
  offset?: number
}

/**
 * Response body for content block list.
 *
 * {@link https://www.braze.com/docs/api/endpoints/templates/content_blocks_templates/get_list_email_content_blocks/}
 */
export interface ContentBlockListResponse extends ServerResponse {
  count: number
  content_blocks: {
    content_block_id: string
    name: string
    content_type: string
    liquid_tag: string
    inclusion_count: number
    created_at: string
    last_edited: string
    tags: string[]
  }[]
}

/**
 * Request body for content block.
 *
 * {@link https://www.braze.com/docs/api/endpoints/templates/content_blocks_templates/get_see_email_content_blocks_information/}
 */
export interface ContentBlockBody {
  content_block_id: string
  include_inclusion_data?: boolean
}

/**
 * Response body for content block.
 *
 * {@link https://www.braze.com/docs/api/endpoints/templates/content_blocks_templates/get_see_email_content_blocks_information/}
 */
export interface ContentBlockResponse extends ServerResponse {
  content_block_id: string
  name: string
  content: string
  description: string
  content_type: string
  tags: string[]
  created_at: string
  last_edited: string
  inclusion_count: number
  inclusion_data: string[]
}
