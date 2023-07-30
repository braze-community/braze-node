import { post } from '../../common/request'
import { global_control_group } from '.'
import type {
  UsersExportGlobalControlGroupObject,
  UsersExportGlobalControlGroupResponse,
} from './types'

jest.mock('../../common/request/post')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/users/export/global_control_group', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'

  const body: UsersExportGlobalControlGroupObject = {
    callback_endpoint: '',
    fields_to_export: ['email', 'braze_id'],
    output_format: 'zip',
  }

  const data: UsersExportGlobalControlGroupResponse = {
    message: 'success',
    object_prefix: 'bb8e2a91-c4aa-478b-b3f2-a4ee91731ad1-1464728599',
    url: 'https://example.com/',
  }

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await global_control_group(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toBeCalledWith(`${apiUrl}/users/export/global_control_group`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toBeCalledTimes(1)
  })
})
