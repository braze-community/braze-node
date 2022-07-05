import type { CampaignsTriggerSendObject, MessagesSendObject } from '.'
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

it('calls messages.send()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.messages.send(body as MessagesSendObject)).toBe(response)
  expect(mockedRequest).toBeCalledWith(`${apiUrl}/messages/send`, body, options)
  expect(mockedRequest).toBeCalledTimes(1)
})

it('calls campaigns.trigger.send()', async () => {
  mockedRequest.mockResolvedValueOnce(response)
  expect(await braze.campaigns.trigger.send(body as CampaignsTriggerSendObject)).toBe(response)
  expect(mockedRequest).toBeCalledWith(`${apiUrl}/campaigns/trigger/send`, body, options)
  expect(mockedRequest).toBeCalledTimes(1)
})
