import { post, ServerResponse } from '../../common/request'
import type { UserAliasUpdates } from '.'
import { _update } from './update'

jest.mock('../../common/request/post')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/users/alias/update', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const body: UserAliasUpdates = {
    alias_updates: [
      {
        alias_label: 'alias_label',
        new_alias_name: 'example_new_alias_name',
        old_alias_name: 'example_old_alias_name',
      },
    ],
  }

  const data: ServerResponse = { message: 'success' }

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await _update(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toHaveBeenCalledWith(`${apiUrl}/users/alias/update`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toHaveBeenCalledTimes(1)
  })
})
