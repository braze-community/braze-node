import { post } from '../../common/request'
import { CreateEmailTemplateBody, PostEmailTemplateResponse } from './types'

/**
 * Create email template.
 *
 * {@link https://www.braze.com/docs/api/endpoints/templates/email_templates/post_create_email_template/}
 */
export function createEmailTemplate(
  apiUrl: string,
  apiKey: string,
  body: CreateEmailTemplateBody,
): Promise<PostEmailTemplateResponse> {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return post(`${apiUrl}/templates/email/create`, body, options)
}
