import type { ScheduleObject } from '../../../common/types'
import type { CanvasTriggerSendObject } from '../types'

/**
 * Request body for schedule API-triggered canvases.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/schedule_messages/post_schedule_triggered_canvases/#request-body}
 */
export interface CanvasTriggerScheduleCreateObject extends CanvasTriggerSendObject {
  schedule: ScheduleObject
}
