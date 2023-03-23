import { post, ServerResponse } from '../common/request'
import { identify } from '.'
import type { UsersIdentifyObject } from './types'

jest.mock('../common/request')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/users/identify', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const body: UsersIdentifyObject = {
    aliases_to_identify: [
      {
        external_id: 'external_identifier',
        user_alias: {
          alias_name: 'example_alias',
          alias_label: 'example_label',
        },
      },
    ],
  }

  const data: ServerResponse = { message: 'success' }

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await identify(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toBeCalledWith(`${apiUrl}/users/identify`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toBeCalledTimes(1)
  })
})
