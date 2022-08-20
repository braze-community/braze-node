import type { ScheduleObject } from '../../common/types'
import type { MessagesSendObject } from '../types'

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
