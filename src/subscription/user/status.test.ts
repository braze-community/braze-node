import { get } from '../../common/request'
import { status } from './status'
import type { SubscriptionUserStatusObject, SubscriptionUserStatusResponse } from './types'

jest.mock('../../common/request/get')
const mockedGet = jest.mocked(get)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('subscription.user.status()', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const data: SubscriptionUserStatusResponse = {
    message: 'success',
    users: [
      {
        external_id: '1',
        email: null,
        phone: null,
        subscription_groups: [
          {
            id: '11111111-2222-3333-4444-555555555555',
            name: 'subscription group',
            channel: 'email',
            status: 'Subscribed',
          },
        ],
      },
    ],
    total_count: 1,
  }

  const testData: { message: string; body: SubscriptionUserStatusObject; expected: string }[] = [
    {
      message: 'multiple `external_id`s',
      body: { external_id: ['1', '2'] },
      expected: `${apiUrl}/subscription/user/status?external_id%5B%5D=1&external_id%5B%5D=2`,
    },
    {
      message: 'single `external_id`',
      body: { external_id: '1' },
      expected: `${apiUrl}/subscription/user/status?external_id=1`,
    },
    {
      message: 'multiple `email`s',
      body: {
        email: ['example@braze.com', 'braze@example.com'],
      },
      expected: `${apiUrl}/subscription/user/status?email%5B%5D=example%40braze.com&email%5B%5D=braze%40example.com`,
    },
    {
      message: 'single `email`',
      body: { email: 'example@braze.com' },
      expected: `${apiUrl}/subscription/user/status?email=example%40braze.com`,
    },
    {
      message: 'multiple `phone`s',
      body: {
        phone: ['+11112223333', '+12223334444'],
      },
      expected: `${apiUrl}/subscription/user/status?phone%5B%5D=%2B11112223333&phone%5B%5D=%2B12223334444`,
    },
    {
      message: 'single `phone`',
      body: { phone: '+11112223333' },
      expected: `${apiUrl}/subscription/user/status?phone=%2B11112223333`,
    },
  ]

  it.each(testData)('calls request for ($message)', async ({ body, expected }) => {
    mockedGet.mockResolvedValueOnce(data)
    expect(await status(apiUrl, apiKey, body)).toBe(data)
    expect(mockedGet).toHaveBeenCalledWith(expected, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedGet).toHaveBeenCalledTimes(1)
  })
})
