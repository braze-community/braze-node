import * as campaigns from './campaigns'
import * as canvas from './canvas'
import * as catalogs from './catalogs'
import * as email from './email'
import * as messages from './messages'
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
  private apiUrl: string

  /**
   * {@link https://www.braze.com/docs/api/basics/#app-group-rest-api-keys}
   */
  private apiKey: string

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

  campaigns = {
    trigger: {
      schedule: {
        create: (body: campaigns.trigger.schedule.CampaignsTriggerScheduleCreateObject) =>
          campaigns.trigger.schedule.create(this.apiUrl, this.apiKey, body),

        delete: (body: campaigns.trigger.schedule.CampaignsTriggerScheduleDeleteObject) =>
          campaigns.trigger.schedule._delete(this.apiUrl, this.apiKey, body),

        update: (body: campaigns.trigger.schedule.CampaignsTriggerScheduleUpdateObject) =>
          campaigns.trigger.schedule.update(this.apiUrl, this.apiKey, body),
      },

      send: (body: campaigns.trigger.CampaignsTriggerSendObject) =>
        campaigns.trigger.send(this.apiUrl, this.apiKey, body),
    },
  }

  canvas = {
    trigger: {
      schedule: {
        create: (body: canvas.trigger.schedule.CanvasTriggerScheduleCreateObject) =>
          canvas.trigger.schedule.create(this.apiUrl, this.apiKey, body),

        delete: (body: canvas.trigger.schedule.CanvasTriggerScheduleDeleteObject) =>
          canvas.trigger.schedule._delete(this.apiUrl, this.apiKey, body),

        update: (body: canvas.trigger.schedule.CanvasTriggerScheduleUpdateObject) =>
          canvas.trigger.schedule.update(this.apiUrl, this.apiKey, body),
      },

      send: (body: canvas.trigger.CanvasTriggerSendObject) =>
        canvas.trigger.send(this.apiUrl, this.apiKey, body),
    },
  }

  catalogs = {
    synchronous: {
      list: () => catalogs.synchronous.listCatalogs(this.apiUrl, this.apiKey),
      items: <T extends catalogs.synchronous.CatalogListItem>(
        body: catalogs.synchronous.CatalogListItemsBody,
      ) => catalogs.synchronous.getListCatalogItemsIterator<T>(this.apiUrl, this.apiKey, body),
      item: <T extends catalogs.synchronous.CatalogListItem>(
        body: catalogs.synchronous.CatalogListItemBody,
      ) => catalogs.synchronous.getCatalogItem<T>(this.apiUrl, this.apiKey, body),
    },
  }

  email = {
    blacklist: (body: email.EmailBlacklistObject) =>
      email.blacklist(this.apiUrl, this.apiKey, body),

    bounce: {
      remove: (body: email.bounce.EmailBounceRemoveObject) =>
        email.bounce.remove(this.apiUrl, this.apiKey, body),
    },

    spam: {
      remove: (body: email.spam.EmailSpamRemoveObject) =>
        email.spam.remove(this.apiUrl, this.apiKey, body),
    },
  }

  messages = {
    schedule: {
      create: (body: messages.schedule.MessagesScheduleCreateObject) =>
        messages.schedule.create(this.apiUrl, this.apiKey, body),

      delete: (body: messages.schedule.MessagesScheduleDeleteObject) =>
        messages.schedule._delete(this.apiUrl, this.apiKey, body),

      update: (body: messages.schedule.MessagesScheduleUpdateObject) =>
        messages.schedule.update(this.apiUrl, this.apiKey, body),
    },

    scheduled_broadcasts: (body: Parameters<typeof messages.scheduled_broadcasts>[2]) =>
      messages.scheduled_broadcasts(this.apiUrl, this.apiKey, body),

    send: (body: messages.MessagesSendObject) => messages.send(this.apiUrl, this.apiKey, body),
  }

  sends = {
    id: {
      create: (body: sends.id.SendsIdCreateObject) =>
        sends.id.create(this.apiUrl, this.apiKey, body),
    },
  }

  subscription = {
    status: {
      get: (body: subscription.status.SubscriptionStatusGetObject) =>
        subscription.status.get(this.apiUrl, this.apiKey, body),

      set: (body: subscription.status.SubscriptionStatusSetObject) =>
        subscription.status.set(this.apiUrl, this.apiKey, body),
    },

    user: {
      status: (body: subscription.user.SubscriptionUserStatusObject) =>
        subscription.user.status(this.apiUrl, this.apiKey, body),
    },
  }

  templates = {
    content_blocks: {
      get: (body: templates.content_blocks.ContentBlockBody) =>
        templates.content_blocks.getContentBlock(this.apiUrl, this.apiKey, body),
      list: (body: templates.content_blocks.ContentBlockListBody) =>
        templates.content_blocks.listContentBlocks(this.apiUrl, this.apiKey, body),
    },
  }

  transactional = {
    v1: {
      campaigns: {
        send: (
          campaignId: string,
          body: transactional.v1.campaigns.TransactionalV1CampaignsSendObject,
        ) => transactional.v1.campaigns.send(this.apiUrl, this.apiKey, campaignId, body),
      },
    },
  }

  users = {
    alias: {
      new: (body: users.alias.UsersAliasObject) => users.alias._new(this.apiUrl, this.apiKey, body),
    },

    delete: (body: users.UsersDeleteObject) => users._delete(this.apiUrl, this.apiKey, body),

    export: {
      global_control_group: (body: users.export.UsersExportGlobalControlGroupObject) =>
        users.export.global_control_group(this.apiUrl, this.apiKey, body),

      ids: (body: users.export.UsersExportIdsObject) =>
        users.export.ids(this.apiUrl, this.apiKey, body),

      segment: (body: users.export.UsersExportSegmentObject) =>
        users.export.segment(this.apiUrl, this.apiKey, body),
    },

    external_ids: {
      remove: (body: users.external_ids.UsersExternalIdsRemoveObject) =>
        users.external_ids.remove(this.apiUrl, this.apiKey, body),

      rename: (body: users.external_ids.UsersExternalIdsRenameObject) =>
        users.external_ids.rename(this.apiUrl, this.apiKey, body),
    },

    identify: (body: users.UsersIdentifyObject) => users.identify(this.apiUrl, this.apiKey, body),

    track: (body: users.UsersTrackObject, bulk?: boolean) =>
      users.track(this.apiUrl, this.apiKey, body, bulk),
  }

  v2 = {
    subscription: {
      status: {
        set: (body: v2.subscription.status.V2SubscriptionStatusSetObject) =>
          v2.subscription.status.set(this.apiUrl, this.apiKey, body),
      },
    },
  }
}
