import { buildParams, get } from '../../common/request'
import { EmailTemplateListBody, EmailTemplateListResponse } from './types'

/**
 * Request email template list
 *
 * {@link https://www.braze.com/docs/api/endpoints/templates/email_templates/get_list_email_templates/}
 */
export function getEmailTemplateList(
  apiUrl: string,
  apiKey: string,
  body: EmailTemplateListBody,
): Promise<EmailTemplateListResponse> {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return get(`${apiUrl}/templates/email/list?${buildParams(body)}`, options)
}
