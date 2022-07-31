import type {
  CampaignsTriggerSendObject,
  MessagesSendObject,
  TransactionalV1CampaignsSendObject,
  UsersAliasObject,
  UsersIdentifyObject,
  UsersTrackObject,
} from '.'
import { Braze } from '.'
import { request } from './common/request'

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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      new Braze(apiUrl, apiKey)
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
const response = {}

it('calls campaigns.trigger.send()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.campaigns.trigger.send(body as CampaignsTriggerSendObject)).toBe(response)
  expect(mockedRequest).toBeCalledWith(`${apiUrl}/campaigns/trigger/send`, body, options)
  expect(mockedRequest).toBeCalledTimes(1)
})

it('calls messages.send()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.messages.send(body as MessagesSendObject)).toBe(response)
  expect(mockedRequest).toBeCalledWith(`${apiUrl}/messages/send`, body, options)
  expect(mockedRequest).toBeCalledTimes(1)
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
  expect(mockedRequest).toBeCalledWith(
    `${apiUrl}/transactional/v1/campaigns/${campaignId}/send`,
    body,
    options,
  )
  expect(mockedRequest).toBeCalledTimes(1)
})

it('calls users.alias.new()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.users.alias.new(body as UsersAliasObject)).toBe(response)
  expect(mockedRequest).toBeCalledWith(`${apiUrl}/users/alias/new`, body, options)
  expect(mockedRequest).toBeCalledTimes(1)
})

it('calls users.identify()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.users.identify(body as UsersIdentifyObject)).toBe(response)
  expect(mockedRequest).toBeCalledWith(`${apiUrl}/users/identify`, body, options)
  expect(mockedRequest).toBeCalledTimes(1)
})

it('calls users.track()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.users.track(body as UsersTrackObject)).toBe(response)
  expect(mockedRequest).toBeCalledWith(`${apiUrl}/users/track`, body, options)
  expect(mockedRequest).toBeCalledTimes(1)
})

it('calls users.track() with bulk', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.users.track(body as UsersTrackObject, true)).toBe(response)
  expect(mockedRequest).toBeCalledWith(`${apiUrl}/users/track`, body, {
    ...options,
    headers: {
      ...options.headers,
      'X-Braze-Bulk': 'true',
    },
  })
  expect(mockedRequest).toBeCalledTimes(1)
})
