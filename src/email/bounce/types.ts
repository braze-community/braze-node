/**
 * Request body for remove hard bounces.
 *
 * {@link https://www.braze.com/docs/api/endpoints/email/post_remove_hard_bounces/#request-body}
 */
export interface EmailBounceRemoveObject {
  email: string | string[]
}
