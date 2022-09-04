/**
 * Request body for blacklist emails.
 *
 * {@link https://www.braze.com/docs/api/endpoints/email/post_blacklist/#request-body}
 */
export interface EmailBlacklistObject {
  email: string | string[]
}
