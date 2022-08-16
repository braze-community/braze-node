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

/**
 * Request body for delete scheduled API-triggered canvases.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/schedule_messages/post_delete_scheduled_triggered_canvases/#request-body}
 */
export interface CanvasTriggerScheduleDeleteObject {
  canvas_id: string
  schedule_id: string
}

/**
 * Request body for update scheduled API-triggered canvases.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/schedule_messages/post_update_scheduled_triggered_canvases/#request-body}
 */
export interface CanvasTriggerScheduleUpdateObject {
  canvas_id: string
  schedule_id: string
  schedule: ScheduleObject
}
