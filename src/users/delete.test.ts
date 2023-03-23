import { post, ServerResponse } from '../common/request'
import { _delete } from '.'
import type { UsersDeleteObject } from './types'

jest.mock('../common/request')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/users/delete', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const body: UsersDeleteObject = {
    external_ids: ['external_identifier1', 'external_identifier2'],
    braze_ids: ['braze_identifier1', 'braze_identifier2'],
    user_aliases: [
      {
        alias_name: 'user_alias1',
        alias_label: 'alias_label1',
      },
      {
        alias_name: 'user_alias2',
        alias_label: 'alias_label2',
      },
    ],
  }

  const data: ServerResponse = { message: 'success' }

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await _delete(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toBeCalledWith(`${apiUrl}/users/delete`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toBeCalledTimes(1)
  })
})
