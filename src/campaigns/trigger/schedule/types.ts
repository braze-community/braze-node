import type { CampaignsTriggerSendObject } from '../types'

/**
 * Request body for schedule API-triggered campaigns.
 *
 * {@link https://www.braze.com/docs/api/endpoints/messaging/schedule_messages/post_schedule_triggered_campaigns/#request-body}
 */
export interface CampaignsTriggerScheduleCreateObject extends CampaignsTriggerSendObject {
  schedule: {
    time?: string
    in_local_time?: boolean
    at_optimal_time?: boolean
  }
}
