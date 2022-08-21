import type { ScheduleObject } from '../../common/types'
import type { MessagesObject, MessagesSendObject } from '../types'

/**
 * Request body for create scheduled messages.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/schedule_messages/post_schedule_messages/#request-body}
 */
export interface MessagesScheduleCreateObject
  extends Omit<MessagesSendObject, 'override_frequency_capping'> {
  override_messaging_limits?: boolean
  schedule: ScheduleObject
}

/**
 * Request body for delete scheduled messages.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/schedule_messages/post_delete_scheduled_messages/#request-body}
 */
export interface MessagesScheduleDeleteObject {
  schedule_id: string
}

/**
 * Request body for update scheduled messages.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/schedule_messages/post_update_scheduled_messages/#request-body}
 */
export interface MessagesScheduleUpdateObject {
  schedule_id: string
  schedule?: ScheduleObject
  messages?: MessagesObject
}
