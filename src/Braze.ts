import * as campaigns from './campaigns'
import * as canvas from './canvas'
import * as catalogs from './catalogs'
import * as email from './email'
import * as messages from './messages'
import * as segments from './segments'
import * as sends from './sends'
import * as subscription from './subscription'
import * as templates from './templates'
import * as transactional from './transactional'
import * as users from './users'
import * as v2 from './v2'

export class Braze {
  /**
   * {@link https://www.braze.com/docs/api/basics/#endpoints}
   */
  private readonly apiUrl: string

  /**
   * {@link https://www.braze.com/docs/user_guide/administrative/app_settings/api_settings_tab/}
   */
  private readonly apiKey: string

  /**
   * @param apiUrl - Braze REST endpoint.
   * @param apiKey - Braze API key.
   */
  constructor(apiUrl: string, apiKey: string) {
    if (!apiUrl || typeof apiUrl !== 'string') {
      throw new Error(`Invalid Braze API URL: ${apiUrl}`)
    }

    if (!apiKey || typeof apiKey !== 'string') {
      throw new Error(`Invalid Braze API key: ${apiKey}`)
    }

    this.apiUrl = apiUrl
    this.apiKey = apiKey
  }

  /* eslint-disable tsdoc/syntax */
  campaigns = {
    /**
     * GET /campaigns/list
     */
    list: (parameters?: campaigns.CampaignsListParameters) => {
      return campaigns.list(this.apiUrl, this.apiKey, parameters)
    },

    trigger: {
      schedule: {
        /**
         * POST /campaigns/trigger/schedule/create
         */
        create: (body: campaigns.trigger.schedule.CampaignsTriggerScheduleCreateObject) => {
          return campaigns.trigger.schedule.create(this.apiUrl, this.apiKey, body)
        },

        /**
         * POST /campaigns/trigger/schedule/delete
         */
        delete: (body: campaigns.trigger.schedule.CampaignsTriggerScheduleDeleteObject) => {
          return campaigns.trigger.schedule._delete(this.apiUrl, this.apiKey, body)
        },

        /**
         * POST /campaigns/trigger/schedule/update
         */
        update: (body: campaigns.trigger.schedule.CampaignsTriggerScheduleUpdateObject) => {
          return campaigns.trigger.schedule.update(this.apiUrl, this.apiKey, body)
        },
      },

      /**
       * POST /campaigns/trigger/send
       */
      send: (body: campaigns.trigger.CampaignsTriggerSendObject) => {
        return campaigns.trigger.send(this.apiUrl, this.apiKey, body)
      },
    },
  }

  canvas = {
    /**
     * GET /canvas/list
     */
    list: (parameters?: canvas.CanvasListParameters) => {
      return canvas.list(this.apiUrl, this.apiKey, parameters)
    },

    trigger: {
      schedule: {
        /**
         * POST /canvas/trigger/schedule/create
         */
        create: (body: canvas.trigger.schedule.CanvasTriggerScheduleCreateObject) => {
          return canvas.trigger.schedule.create(this.apiUrl, this.apiKey, body)
        },

        /**
         * POST /canvas/trigger/schedule/delete
         */
        delete: (body: canvas.trigger.schedule.CanvasTriggerScheduleDeleteObject) => {
          return canvas.trigger.schedule._delete(this.apiUrl, this.apiKey, body)
        },

        /**
         * POST /canvas/trigger/schedule/update
         */
        update: (body: canvas.trigger.schedule.CanvasTriggerScheduleUpdateObject) => {
          return canvas.trigger.schedule.update(this.apiUrl, this.apiKey, body)
        },
      },

      /**
       * POST /canvas/trigger/send
       */
      send: (body: canvas.trigger.CanvasTriggerSendObject) => {
        return canvas.trigger.send(this.apiUrl, this.apiKey, body)
      },
    },
  }

  /**
   * {@link https://www.braze.com/docs/api/endpoints/catalogs}
   */
  catalogs = {
    synchronous: {
      /**
       * GET /catalogs
       */
      list: () => {
        return catalogs.synchronous.listCatalogs(this.apiUrl, this.apiKey)
      },

      /**
       * GET /catalogs/{catalog_name}/items
       */
      items: <T extends catalogs.synchronous.CatalogListItem>(
        body: catalogs.synchronous.CatalogListItemsBody,
      ) => {
        return catalogs.synchronous.getListCatalogItemsIterator<T>(this.apiUrl, this.apiKey, body)
      },

      /**
       * GET /catalogs/{catalog_name}/items/{item_id}
       */
      item: <T extends catalogs.synchronous.CatalogListItem>(
        body: catalogs.synchronous.CatalogListItemBody,
      ) => {
        return catalogs.synchronous.getCatalogItem<T>(this.apiUrl, this.apiKey, body)
      },
    },
  }

  /**
   * {@link https://www.braze.com/docs/api/endpoints/email}
   */
  email = {
    /**
     * POST /email/blacklist
     */
    blacklist: (body: email.EmailBlacklistObject) => {
      return email.blacklist(this.apiUrl, this.apiKey, body)
    },

    /**
     * POST /email/blacklist
     */
    bounce: {
      remove: (body: email.bounce.EmailBounceRemoveObject) => {
        return email.bounce.remove(this.apiUrl, this.apiKey, body)
      },
    },

    /**
     * POST /email/spam/remove
     */
    spam: {
      remove: (body: email.spam.EmailSpamRemoveObject) => {
        return email.spam.remove(this.apiUrl, this.apiKey, body)
      },
    },
  }

  /**
   * {@link https://www.braze.com/docs/api/endpoints/messaging}
   */
  messages = {
    schedule: {
      /**
       * POST /messages/schedule/create
       */
      create: (body: messages.schedule.MessagesScheduleCreateObject) => {
        return messages.schedule.create(this.apiUrl, this.apiKey, body)
      },

      /**
       * POST /messages/schedule/delete
       */
      delete: (body: messages.schedule.MessagesScheduleDeleteObject) => {
        return messages.schedule._delete(this.apiUrl, this.apiKey, body)
      },

      /**
       * POST /messages/schedule/update
       */
      update: (body: messages.schedule.MessagesScheduleUpdateObject) => {
        return messages.schedule.update(this.apiUrl, this.apiKey, body)
      },
    },

    /**
     * GET /messages/scheduled_broadcasts
     */
    scheduled_broadcasts: (body: Parameters<typeof messages.scheduled_broadcasts>[2]) => {
      return messages.scheduled_broadcasts(this.apiUrl, this.apiKey, body)
    },

    /**
     * POST /messages/send
     */
    send: (body: messages.MessagesSendObject) => {
      return messages.send(this.apiUrl, this.apiKey, body)
    },
  }

  segments = {
    /**
     * GET /segments/data_series
     */
    analytics: (parameters: segments.SegmentsAnalyticsParameters) => {
      return segments.analytics(this.apiUrl, this.apiKey, parameters)
    },

    /**
     * GET /segments/details
     */
    details: (parameters: segments.SegmentsDetailsParameters) => {
      return segments.details(this.apiUrl, this.apiKey, parameters)
    },

    /**
     * GET /segments/list
     */
    list: (parameters?: segments.SegmentsListParameters) => {
      return segments.list(this.apiUrl, this.apiKey, parameters)
    },
  }

  sends = {
    id: {
      /**
       * POST /sends/id/create
       */
      create: (body: sends.id.SendsIdCreateObject) => {
        return sends.id.create(this.apiUrl, this.apiKey, body)
      },
    },
  }

  /**
   * {@link https://www.braze.com/docs/api/endpoints/subscription_groups}
   */
  subscription = {
    status: {
      /**
       * GET /subscription/status/get
       */
      get: (body: subscription.status.SubscriptionStatusGetObject) => {
        return subscription.status.get(this.apiUrl, this.apiKey, body)
      },

      /**
       * POST /subscription/status/set
       */
      set: (body: subscription.status.SubscriptionStatusSetObject) => {
        return subscription.status.set(this.apiUrl, this.apiKey, body)
      },
    },

    user: {
      /**
       * GET /subscription/user/status
       */
      status: (body: subscription.user.SubscriptionUserStatusObject) => {
        return subscription.user.status(this.apiUrl, this.apiKey, body)
      },
    },
  }

  /**
   * {@link https://www.braze.com/docs/api/endpoints/templates}
   */
  templates = {
    content_blocks: {
      /**
       * GET /content_blocks/info
       */
      get: (body: templates.content_blocks.ContentBlockBody) => {
        return templates.content_blocks.getContentBlock(this.apiUrl, this.apiKey, body)
      },

      /**
       * GET /content_blocks/list
       */
      list: (body: templates.content_blocks.ContentBlockListBody) => {
        return templates.content_blocks.listContentBlocks(this.apiUrl, this.apiKey, body)
      },

      /**
       * POST /content_blocks/create
       */
      create: (body: templates.content_blocks.CreateContentBlockBody) => {
        return templates.content_blocks.createContentBlock(this.apiUrl, this.apiKey, body)
      },

      /**
       * POST /content_blocks/update
       */
      update: (body: templates.content_blocks.UpdateContentBlockBody) => {
        return templates.content_blocks.updateContentBlock(this.apiUrl, this.apiKey, body)
      },
    },

    email_templates: {
      /**
       * GET /templates/email/info
       */
      get: (body: templates.email_templates.EmailTemplateBody) => {
        return templates.email_templates.getEmailTemplate(this.apiUrl, this.apiKey, body)
      },

      /**
       * GET /templates/email/list
       */
      list: (body: templates.email_templates.EmailTemplateListBody) => {
        return templates.email_templates.getEmailTemplateList(this.apiUrl, this.apiKey, body)
      },

      /**
       * POST /templates/email/create
       */
      create: (body: templates.email_templates.CreateEmailTemplateBody) => {
        return templates.email_templates.createEmailTemplate(this.apiUrl, this.apiKey, body)
      },

      /**
       * POST /templates/email/update
       */
      update: (body: templates.email_templates.UpdateEmailTemplateBody) => {
        return templates.email_templates.updateEmailTemplate(this.apiUrl, this.apiKey, body)
      },
    },
  }

  transactional = {
    v1: {
      campaigns: {
        /**
         * POST /transactional/v1/campaigns/{campaign_id}/send
         */
        send: (
          campaignId: string,
          body: transactional.v1.campaigns.TransactionalV1CampaignsSendObject,
        ) => {
          return transactional.v1.campaigns.send(this.apiUrl, this.apiKey, campaignId, body)
        },
      },
    },
  }

  /**
   * {@link https://www.braze.com/docs/api/endpoints/user_data}
   */
  users = {
    alias: {
      /**
       * POST /users/alias/new
       */
      new: (body: users.alias.UsersAliasObject) => {
        return users.alias._new(this.apiUrl, this.apiKey, body)
      },

      /**
       * POST /users/alias/update
       */
      update: (body: users.alias.UserAliasUpdates) => {
        return users.alias._update(this.apiUrl, this.apiKey, body)
      },
    },

    /**
     * POST /users/delete
     */
    delete: (body: users.UsersDeleteObject) => {
      return users._delete(this.apiUrl, this.apiKey, body)
    },

    export: {
      /**
       * POST /users/export/global_control_group
       */
      global_control_group: (body: users.export.UsersExportGlobalControlGroupObject) => {
        return users.export.global_control_group(this.apiUrl, this.apiKey, body)
      },

      /**
       * POST /users/export/ids
       */
      ids: (body: users.export.UsersExportIdsObject) => {
        return users.export.ids(this.apiUrl, this.apiKey, body)
      },

      /**
       * POST /users/export/segment
       */
      segment: (body: users.export.UsersExportSegmentObject) => {
        return users.export.segment(this.apiUrl, this.apiKey, body)
      },
    },

    /**
     * {@link https://www.braze.com/docs/api/endpoints/user_data/external_id_migration}
     */
    external_ids: {
      /**
       * POST /users/external_ids/remove
       */
      remove: (body: users.external_ids.UsersExternalIdsRemoveObject) => {
        return users.external_ids.remove(this.apiUrl, this.apiKey, body)
      },

      /**
       * POST /users/external_ids/rename
       */
      rename: (body: users.external_ids.UsersExternalIdsRenameObject) => {
        return users.external_ids.rename(this.apiUrl, this.apiKey, body)
      },
    },

    /**
     * POST /users/identify
     */
    identify: (body: users.UsersIdentifyObject) => {
      return users.identify(this.apiUrl, this.apiKey, body)
    },

    /**
     * POST /users/merge
     */
    merge: (body: users.UsersMergeObject) => {
      return users.merge(this.apiUrl, this.apiKey, body)
    },

    /**
     * POST /users/track
     */
    track: (body: users.UsersTrackObject, bulk?: boolean) => {
      return users.track(this.apiUrl, this.apiKey, body, bulk)
    },
  }

  v2 = {
    /**
     * {@link https://www.braze.com/docs/api/endpoints/subscription_groups}
     */
    subscription: {
      status: {
        /**
         * POST /v2/subscription/status/set
         */
        set: (body: v2.subscription.status.V2SubscriptionStatusSetObject) => {
          return v2.subscription.status.set(this.apiUrl, this.apiKey, body)
        },
      },
    },
  }
  /* eslint-enable tsdoc/syntax */
}
