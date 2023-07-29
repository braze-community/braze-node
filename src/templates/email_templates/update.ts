import { post } from '../../common/request'
import { PostEmailTemplateResponse, UpdateEmailTemplateBody } from './types'

/**
 * Update email template.
 *
 * {@link https://www.braze.com/docs/api/endpoints/templates/email_templates/post_update_email_template/}
 */
export function updateEmailTemplate(
  apiUrl: string,
  apiKey: string,
  body: UpdateEmailTemplateBody,
): Promise<PostEmailTemplateResponse> {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return post(`${apiUrl}/templates/email/update`, body, options)
}
