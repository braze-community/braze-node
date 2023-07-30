import { post, ServerResponse } from '../common/request'
import { track } from '.'
import type { UsersTrackObject } from './types'

jest.mock('../common/request/post')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/users/track', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const body: UsersTrackObject = {
    attributes: [
      {
        external_id: 'user_identifier',
        string_attribute: 'fruit',
        boolean_attribute_1: true,
        integer_attribute: 25,
        array_attribute: ['banana', 'apple'],
      },
    ],
    events: [
      {
        external_id: 'user_identifier',
        app_id: 'app_identifier',
        name: 'watched_trailer',
        time: '2013-07-16T19:20:30+1:00',
      },
    ],
    purchases: [
      {
        external_id: 'user_identifier',
        app_id: 'app_identifier',
        product_id: 'product_name',
        currency: 'USD',
        price: 12.12,
        quantity: 6,
        time: '2017-05-12T18:47:12Z',
        properties: {
          integer_property: 3,
          string_property: 'Russell',
          date_property: '2014-02-02T00:00:00Z',
        },
      },
    ],
  }

  const data: ServerResponse = { message: 'success' }

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await track(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toBeCalledWith(`${apiUrl}/users/track`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toBeCalledTimes(1)
  })

  it('makes bulk update', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await track(apiUrl, apiKey, body, true)).toBe(data)
    expect(mockedPost).toBeCalledWith(`${apiUrl}/users/track`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'X-Braze-Bulk': 'true',
      },
    })
    expect(mockedPost).toBeCalledTimes(1)
  })
})
