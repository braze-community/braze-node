import { post } from '../../common/request'
import type { EmailBounceRemoveObject } from './types'

/**
 * Remove hard bounces.
 *
 * Use this endpoint to remove email addresses from your Braze bounce list.
 *
 * {@link https://www.braze.com/docs/api/endpoints/email/post_remove_hard_bounces/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function remove(apiUrl: string, apiKey: string, body: EmailBounceRemoveObject) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return post(`${apiUrl}/email/bounce/remove`, body, options)
}
