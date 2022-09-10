import { post } from '../../common/request'
import type { EmailSpamRemoveObject } from './types'

/**
 * Remove email addresses from spam list.
 *
 * Use this endpoint to remove email addresses from your Braze spam list.
 *
 * {@link https://www.braze.com/docs/api/endpoints/email/post_remove_spam/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function remove(apiUrl: string, apiKey: string, body: EmailSpamRemoveObject) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return post(`${apiUrl}/email/spam/remove`, body, options)
}
