import { ServerResponse } from '../../common/request'

/**
 * Request body for email template list.
 *
 * {@link https://www.braze.com/docs/api/endpoints/templates/email_templates/get_list_email_templates/}
 */
export interface EmailTemplateListBody {
  modified_after?: string
  modified_before?: string
  limit?: number
  offset?: number
}

/**
 * Response body for email template list.
 *
 * {@link https://www.braze.com/docs/api/endpoints/templates/email_templates/get_list_email_templates/}
 */
export interface EmailTemplateListResponse extends ServerResponse {
  count: number
  templates: {
    email_template_id: string
    template_name: string
    created_at: string
    updated_at: string
    tags: string[]
  }[]
}

/**
 * Request body for email template.
 *
 * {@link https://www.braze.com/docs/api/endpoints/templates/email_templates/get_see_email_template_information/}
 */
export interface EmailTemplateBody {
  email_template_id: string
}

/**
 * Response body for email template.
 *
 * {@link https://www.braze.com/docs/api/endpoints/templates/email_templates/get_see_email_template_information/}
 */
export interface EmailTemplateResponse extends ServerResponse {
  email_template_id: string
  template_name: string
  description: string
  subject: string
  preheader?: string
  body?: string
  plaintext_body?: string
  should_inline_css?: boolean
  tags: string
  created_at: string
  updated_at: string
}

/**
 * Request body for create/update email template.
 *
 * {@link https://www.braze.com/docs/api/endpoints/templates/email_templates/post_create_email_template/}
 */
export interface CreateEmailTemplateBody {
  template_name: string
  subject: string
  body: string
  plaintext_body?: string
  preheader?: string
  tags?: string[]
  should_inline_css?: boolean
}

/**
 * Request body for update email template.
 *
 * {@link https://www.braze.com/docs/api/endpoints/templates/email_templates/post_update_email_template/}
 */
export interface UpdateEmailTemplateBody extends CreateEmailTemplateBody {
  email_template_id: string
}

/**
 * Response body for create/update email template.
 *
 * {@link https://www.braze.com/docs/api/endpoints/templates/email_templates/post_create_email_template/}
 * {@link https://www.braze.com/docs/api/endpoints/templates/email_templates/post_update_email_template/}
 */
export interface PostEmailTemplateResponse extends ServerResponse {
  email_template_id: string
}
