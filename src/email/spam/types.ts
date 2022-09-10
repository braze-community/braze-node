/**
 * Request body for remove email addresses from spam list.
 *
 * {@link https://www.braze.com/docs/api/endpoints/email/post_remove_spam/#request-body}
 */
export interface EmailSpamRemoveObject {
  email: string | string[]
}
