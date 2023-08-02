import { get as _get, ServerResponse } from '../../common/request'
import { get } from '.'
import type { SubscriptionStatusGetObject } from './types'

jest.mock('../../common/request/get')
const mockedGet = jest.mocked(_get)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/subscription/status/get', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const data: ServerResponse = { message: 'success' }

  const testData: { message: string; body: SubscriptionStatusGetObject; expected: string }[] = [
    {
      message: 'multiple `external_id`s',
      body: { subscription_group_id: 'subscription_group_id', external_id: ['1', '2'] },
      expected: `${apiUrl}/subscription/status/get?subscription_group_id=subscription_group_id&external_id%5B%5D=1&external_id%5B%5D=2`,
    },
    {
      message: 'single `external_id`',
      body: { subscription_group_id: 'subscription_group_id', external_id: '1' },
      expected: `${apiUrl}/subscription/status/get?subscription_group_id=subscription_group_id&external_id=1`,
    },
    {
      message: 'multiple `email`s',
      body: {
        subscription_group_id: 'subscription_group_id',
        email: ['example@braze.com', 'braze@example.com'],
      },
      expected: `${apiUrl}/subscription/status/get?subscription_group_id=subscription_group_id&email%5B%5D=example%40braze.com&email%5B%5D=braze%40example.com`,
    },
    {
      message: 'single `email`',
      body: { subscription_group_id: 'subscription_group_id', email: 'example@braze.com' },
      expected: `${apiUrl}/subscription/status/get?subscription_group_id=subscription_group_id&email=example%40braze.com`,
    },
    {
      message: 'multiple `phone`s',
      body: {
        subscription_group_id: 'subscription_group_id',
        phone: ['+11112223333', '+12223334444'],
      },
      expected: `${apiUrl}/subscription/status/get?subscription_group_id=subscription_group_id&phone%5B%5D=%2B11112223333&phone%5B%5D=%2B12223334444`,
    },
    {
      message: 'single `phone`',
      body: { subscription_group_id: 'subscription_group_id', phone: '+11112223333' },
      expected: `${apiUrl}/subscription/status/get?subscription_group_id=subscription_group_id&phone=%2B11112223333`,
    },
  ]

  it.each(testData)('calls request for ($message)', async ({ body, expected }) => {
    mockedGet.mockResolvedValueOnce(data)

    expect(await get(apiUrl, apiKey, body)).toBe(data)
    expect(mockedGet).toBeCalledWith(expected, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedGet).toBeCalledTimes(1)
  })
})
