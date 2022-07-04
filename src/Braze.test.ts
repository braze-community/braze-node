import { Braze } from '.'
import * as messages from './messages'

jest.mock('./messages')
const mockedMessages = jest.mocked(messages)

const apiUrl = 'https://rest.iad-01.braze.com'
const apiKey = 'apiKey'
const body = {}
const data = {}

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

describe('messages', () => {
  beforeEach(() => {
    mockedMessages.send.mockClear().mockResolvedValueOnce(data)
  })

  it('sends messages immediately via API', async () => {
    const braze = new Braze(apiUrl, apiKey)
    expect(await braze.messages.send(body as messages.MessagesSendObject)).toBe(data)
    expect(mockedMessages.send).toBeCalledWith(apiUrl, apiKey, body)
    expect(mockedMessages.send).toBeCalledTimes(1)
  })
})
