/**
 * Request body for create send IDs.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/send_messages/post_create_send_ids/#request-body}
 */
export interface SendsIdCreateObject {
  campaign_id: string
  send_id?: string
}
