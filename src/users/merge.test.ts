import { post, ServerResponse } from '../common/request'
import { merge } from '.'
import type { UsersMergeObject } from './types'

jest.mock('../common/request/post')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/users/merge', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const body: UsersMergeObject = {
    merge_updates: [
      {
        identifier_to_keep: { external_id: 'external_identifier' },
        identifier_to_merge: {
          user_alias: {
            alias_name: 'example_alias',
            alias_label: 'example_label',
          },
        },
      },
    ],
  }

  const data: ServerResponse = { message: 'success' }

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await merge(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toBeCalledWith(`${apiUrl}/users/merge`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toBeCalledTimes(1)
  })
})
