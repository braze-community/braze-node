import { buildOptions, post } from '../common/request'
import type { EmailBlacklistObject } from './types'

/**
 * Blacklist emails.
 *
 * Use this endpoint to unsubscribe a user from email and mark them as hard bounced.
 *
 * {@link https://www.braze.com/docs/api/endpoints/email/post_blacklist/}
 *
 * @param apiUrl - Braze REST endpoint.
 * @param apiKey - Braze API key.
 * @param body - Request parameters.
 * @returns - Braze response.
 */
export function blacklist(apiUrl: string, apiKey: string, body: EmailBlacklistObject) {
  return post(`${apiUrl}/email/blacklist`, body, buildOptions({ apiKey }))
}
