import type {
  CampaignsTriggerScheduleCreateObject,
  CampaignsTriggerScheduleDeleteObject,
  CampaignsTriggerScheduleUpdateObject,
  CampaignsTriggerSendObject,
  CanvasTriggerScheduleCreateObject,
  CanvasTriggerScheduleDeleteObject,
  CanvasTriggerScheduleUpdateObject,
  CanvasTriggerSendObject,
  CreateContentBlockBody,
  EmailBlacklistObject,
  EmailBounceRemoveObject,
  EmailSpamRemoveObject,
  MessagesScheduleCreateObject,
  MessagesScheduleDeleteObject,
  MessagesScheduleUpdateObject,
  MessagesSendObject,
  SendsIdCreateObject,
  SubscriptionStatusGetObject,
  SubscriptionStatusSetObject,
  SubscriptionUserStatusObject,
  TransactionalV1CampaignsSendObject,
  UpdateContentBlockBody,
  UserAliasUpdates,
  UsersAliasObject,
  UsersDeleteObject,
  UsersExportGlobalControlGroupObject,
  UsersExportIdsObject,
  UsersExportSegmentObject,
  UsersExternalIdsRemoveObject,
  UsersExternalIdsRenameObject,
  UsersIdentifyObject,
  UsersMergeObject,
  UsersTrackObject,
  V2SubscriptionStatusSetObject,
} from '.'
import { Braze } from '.'
import { request, ServerResponse } from './common/request'

jest.mock('./common/request/request')
const mockedRequest = jest.mocked(request)

const apiUrl = 'https://rest.iad-01.braze.com'
const apiKey = 'apiKey'

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Braze', () => {
  it('exports class', () => {
    expect(Braze).toBeInstanceOf(Function)
  })

  it.each([undefined, null, 0, 1, ''])('throws if first argument is %p', (apiUrl) => {
    expect(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      new Braze(apiUrl)
    }).toThrow(`Invalid Braze API URL: ${apiUrl}`)
  })

  it.each([undefined, null, 0, 1, ''])('throws if second argument is %p', (apiKey) => {
    expect(() => {
      new Braze(apiUrl, apiKey as string)
    }).toThrow(`Invalid Braze API key: ${apiKey}`)
  })
})

const braze = new Braze(apiUrl, apiKey)
const body = {}
const options = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
  method: expect.stringMatching(/^GET|POST$/),
}
const response: ServerResponse = { message: 'success' }

it('calls campaigns.trigger.schedule.create()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(
    await braze.campaigns.trigger.schedule.create(body as CampaignsTriggerScheduleCreateObject),
  ).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(
    `${apiUrl}/campaigns/trigger/schedule/create`,
    body,
    options,
  )
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls campaigns.trigger.schedule.delete()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(
    await braze.campaigns.trigger.schedule.delete(body as CampaignsTriggerScheduleDeleteObject),
  ).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(
    `${apiUrl}/campaigns/trigger/schedule/delete`,
    body,
    options,
  )
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls campaigns.trigger.schedule.update()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(
    await braze.campaigns.trigger.schedule.update(body as CampaignsTriggerScheduleUpdateObject),
  ).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(
    `${apiUrl}/campaigns/trigger/schedule/update`,
    body,
    options,
  )
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls campaigns.trigger.send()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.campaigns.trigger.send(body as CampaignsTriggerSendObject)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/campaigns/trigger/send`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls canvas.trigger.schedule.create()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(
    await braze.canvas.trigger.schedule.create(body as CanvasTriggerScheduleCreateObject),
  ).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(
    `${apiUrl}/canvas/trigger/schedule/create`,
    body,
    options,
  )
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls canvas.trigger.schedule.delete()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(
    await braze.canvas.trigger.schedule.delete(body as CanvasTriggerScheduleDeleteObject),
  ).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(
    `${apiUrl}/canvas/trigger/schedule/delete`,
    body,
    options,
  )
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls canvas.trigger.schedule.update()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(
    await braze.canvas.trigger.schedule.update(body as CanvasTriggerScheduleUpdateObject),
  ).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(
    `${apiUrl}/canvas/trigger/schedule/update`,
    body,
    options,
  )
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls canvas.trigger.send()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.canvas.trigger.send(body as CanvasTriggerSendObject)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/canvas/trigger/send`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls email.blacklist()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.email.blacklist(body as EmailBlacklistObject)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/email/blacklist`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls email.bounce.remove()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.email.bounce.remove(body as EmailBounceRemoveObject)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/email/bounce/remove`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls email.spam.remove()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.email.spam.remove(body as EmailSpamRemoveObject)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/email/spam/remove`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls messages.schedule.create()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.messages.schedule.create(body as MessagesScheduleCreateObject)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/messages/schedule/create`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls messages.schedule.delete()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.messages.schedule.delete(body as MessagesScheduleDeleteObject)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/messages/schedule/delete`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls messages.schedule.update()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.messages.schedule.update(body as MessagesScheduleUpdateObject)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/messages/schedule/update`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls messages.scheduled_broadcasts()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.messages.scheduled_broadcasts({ end_time: '2022-08-21' })).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(
    `${apiUrl}/messages/scheduled_broadcasts?end_time=2022-08-21`,
    undefined,
    { headers: options.headers },
  )
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls messages.send()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.messages.send(body as MessagesSendObject)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/messages/send`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls segments.analytics()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.segments.analytics({ segment_id: 'segment_api_identifier', length: 10 })).toBe(
    response,
  )
  expect(mockedRequest).toHaveBeenCalledWith(
    `${apiUrl}/segments/data_series?segment_id=segment_api_identifier&length=10`,
    undefined,
    { headers: options.headers },
  )
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls segments.details()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.segments.details({ segment_id: 'segment_api_identifier' })).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(
    `${apiUrl}/segments/details?segment_id=segment_api_identifier`,
    undefined,
    { headers: options.headers },
  )
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls segments.list()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.segments.list({ page: 100 })).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/segments/list?page=100`, undefined, {
    headers: options.headers,
  })
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls sends.id.create()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.sends.id.create(body as SendsIdCreateObject)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/sends/id/create`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls subscription.status.get()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  const body: SubscriptionStatusGetObject = { subscription_group_id: 'subscription_group_id' }
  expect(await braze.subscription.status.get(body)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(
    `${apiUrl}/subscription/status/get?subscription_group_id=subscription_group_id`,
    undefined,
    { headers: options.headers },
  )
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls subscription.status.set()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.subscription.status.set(body as SubscriptionStatusSetObject)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/subscription/status/set`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls subscription.user.status()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  const body: SubscriptionUserStatusObject = {
    external_id: 'external_id',
  }
  expect(await braze.subscription.user.status(body)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(
    `${apiUrl}/subscription/user/status?external_id=external_id`,
    undefined,
    { headers: options.headers },
  )
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls transactional.v1.campaigns.send()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  const campaignId = 'YOUR_CAMPAIGN_ID_HERE'
  expect(
    await braze.transactional.v1.campaigns.send(
      campaignId,
      body as TransactionalV1CampaignsSendObject,
    ),
  ).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(
    `${apiUrl}/transactional/v1/campaigns/${campaignId}/send`,
    body,
    options,
  )
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls users.alias.new()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.users.alias.new(body as UsersAliasObject)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/users/alias/new`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls users.alias.update()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.users.alias.update(body as UserAliasUpdates)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/users/alias/update`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls users.delete()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.users.delete(body as UsersDeleteObject)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/users/delete`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls users.export.global_control_group()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(
    await braze.users.export.global_control_group(body as UsersExportGlobalControlGroupObject),
  ).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(
    `${apiUrl}/users/export/global_control_group`,
    body,
    options,
  )
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls users.export.ids()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.users.export.ids(body as UsersExportIdsObject)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/users/export/ids`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls users.export.segment()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.users.export.segment(body as UsersExportSegmentObject)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/users/export/segment`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls users.external_ids.remove()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.users.external_ids.remove(body as UsersExternalIdsRemoveObject)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/users/external_ids/remove`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls users.external_ids.rename()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.users.external_ids.rename(body as UsersExternalIdsRenameObject)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/users/external_ids/rename`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls users.identify()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.users.identify(body as UsersIdentifyObject)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/users/identify`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls users.merge()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.users.merge(body as UsersMergeObject)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/users/merge`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls users.track()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.users.track(body as UsersTrackObject)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/users/track`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls users.track() with bulk', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.users.track(body as UsersTrackObject, true)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/users/track`, body, {
    ...options,
    headers: {
      ...options.headers,
      'X-Braze-Bulk': 'true',
    },
  })
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls templates.content_blocks.create()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.templates.content_blocks.create(body as CreateContentBlockBody)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/content_blocks/create`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls templates.content_blocks.update()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.templates.content_blocks.update(body as UpdateContentBlockBody)).toBe(response)
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/content_blocks/update`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})

it('calls v2.subscription.status.set()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.v2.subscription.status.set(body as V2SubscriptionStatusSetObject)).toBe(
    response,
  )
  expect(mockedRequest).toHaveBeenCalledWith(`${apiUrl}/v2/subscription/status/set`, body, options)
  expect(mockedRequest).toHaveBeenCalledTimes(1)
})
