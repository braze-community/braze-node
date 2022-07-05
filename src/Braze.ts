import * as campaigns from './campaigns'
import * as messages from './messages'

export class Braze {
  /**
   * {@link https://www.braze.com/docs/api/basics/#endpoints}
   */
  private apiUrl: string

  /**
   * {@link https://www.braze.com/docs/api/basics/#app-group-rest-api-keys}
   */
  private apiKey: string

  /**
   * @param apiUrl - Braze REST endpoint.
   * @param apiKey - Braze API key.
   */
  constructor(apiUrl: string, apiKey: string) {
    if (!apiUrl || typeof apiUrl !== 'string') {
      throw new Error(`Invalid Braze API URL: ${apiUrl}`)
    }

    if (!apiKey || typeof apiKey !== 'string') {
      throw new Error(`Invalid Braze API key: ${apiKey}`)
    }

    this.apiUrl = apiUrl
    this.apiKey = apiKey
  }

  campaigns = {
    trigger: {
      send: (body: campaigns.trigger.CampaignsTriggerSendObject) =>
        campaigns.trigger.send(this.apiUrl, this.apiKey, body),
    },
  }

  messages = {
    send: (body: messages.MessagesSendObject) => messages.send(this.apiUrl, this.apiKey, body),
  }
}
