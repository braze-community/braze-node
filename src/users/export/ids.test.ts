import { post } from '../../common/request'
import { ids } from '.'
import type { UsersExportIdsObject, UsersExportIdsResponse } from './types'

jest.mock('../../common/request/post')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/users/export/ids', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'

  const body: UsersExportIdsObject = {
    external_ids: ['user_identifier1', 'user_identifier2'],
    user_aliases: [
      {
        alias_name: 'example_alias',
        alias_label: 'example_label',
      },
    ],
    device_id: '1234567',
    braze_id: 'braze_identifier',
    email_address: 'example@braze.com',
    phone: '+11112223333',
    fields_to_export: ['first_name', 'email', 'purchases'],
  }

  const data: UsersExportIdsResponse = {
    message: 'success',
    users: [
      {
        created_at: '2020-07-10 15:00:00.000 UTC',
        external_id: 'A8i3mkd99',
        user_aliases: [
          {
            alias_name: 'user_123',
            alias_label: 'amplitude_id',
          },
        ],
        braze_id: '5fbd99bac125ca40511f2cb1',
        random_bucket: 2365,
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'example@braze.com',
        dob: '1980-12-21',
        home_city: 'Chicago',
        country: 'US',
        phone: '+442071838750',
        language: 'en',
        time_zone: 'Eastern Time (US & Canada)',
        last_coordinates: [41.84157636433568, -87.83520818508256],
        gender: 'F',
        total_revenue: 65,
        attributed_campaign: 'braze_test_campaign_072219',
        attributed_source: 'braze_test_source_072219',
        attributed_adgroup: 'braze_test_adgroup_072219',
        attributed_ad: 'braze_test_ad_072219',
        push_subscribe: 'opted_in',
        push_opted_in_at: '2020-01-26T22:45:53.953Z',
        email_subscribe: 'subscribed',
        custom_attributes: {
          loyaltyId: '37c98b9d-9a7f-4b2f-a125-d873c5152856',
          loyaltyPoints: '321',
          loyaltyPointsNumber: 107,
        },
        custom_events: [
          {
            name: 'Loyalty Acknowledgement',
            first: '2021-06-28T17:02:43.032Z',
            last: '2021-06-28T17:02:43.032Z',
            count: 1,
          },
        ],
        purchases: [
          {
            name: 'item_40834',
            first: '2021-09-05T03:45:50.540Z',
            last: '2022-06-03T17:30:41.201Z',
            count: 10,
          },
        ],
        devices: [
          {
            model: 'Pixel XL',
            os: 'Android (Q)',
            carrier: null,
            device_id: '312ef2c1-83db-4789-967-554545a1bf7a',
            ad_tracking_enabled: true,
          },
        ],
        push_tokens: [
          {
            app: 'MovieCanon',
            platform: 'Android',
            token: '12345abcd',
            device_id: '312ef2c1-83db-4789-967-554545a1bf7a',
            notifications_enabled: true,
          },
        ],
        apps: [
          {
            name: 'MovieCannon',
            platform: 'Android',
            version: '3.29.0',
            sessions: 1129,
            first_used: '2020-02-02T19:56:19.142Z',
            last_used: '2021-11-11T00:25:19.201Z',
          },
        ],
        campaigns_received: [
          {
            name: 'Email Unsubscribe',
            api_campaign_id: 'd72fdc84-ddda-44f1-a0d5-0e79f47ef942',
            last_received: '2022-06-02T03:07:38.105Z',
            engaged: {
              opened_email: true,
            },
            converted: true,
            multiple_converted: {
              'Primary Conversion Event - A': true,
            },
            in_control: false,
            variation_name: 'Variant 1',
            variation_api_id: '1bddc73a-a134-4784-9134-5b5574a9e0b8',
          },
        ],
        canvases_received: [
          {
            name: 'Non Global  Holdout Group 4/21/21',
            api_canvas_id: '46972a9d-dc81-473f-aa03-e3473b4ed781',
            last_received_message: '2021-07-07T20:46:24.136Z',
            last_entered: '2021-07-07T20:45:24.000+00:00',
            variation_name: 'Variant 1',
            in_control: false,
            last_entered_control_at: null,
            last_exited: '2021-07-07T20:46:24.136Z',
            steps_received: [
              {
                name: 'Step',
                api_canvas_step_id: '43d1a349-c3c8-4be1-9fbe-ce708e4d1c39',
                last_received: '2021-07-07T20:46:24.136Z',
              },
            ],
          },
        ],
        cards_clicked: [
          {
            name: 'Loyalty Promo',
          },
        ],
      },
    ],
  }

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await ids(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toHaveBeenCalledWith(`${apiUrl}/users/export/ids`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toHaveBeenCalledTimes(1)
  })
})
