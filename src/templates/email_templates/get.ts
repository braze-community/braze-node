import { buildOptions, buildParams, get } from '../../common/request'
import { EmailTemplateBody, EmailTemplateResponse } from './types'

/**
 * Request email template.
 *
 * {@link https://www.braze.com/docs/api/endpoints/templates/email_templates/get_see_email_template_information/}
 */
export function getEmailTemplate(
  apiUrl: string,
  apiKey: string,
  body: EmailTemplateBody,
): Promise<EmailTemplateResponse> {
  return get(`${apiUrl}/templates/email/info?${buildParams(body)}`, buildOptions({ apiKey }))
}
