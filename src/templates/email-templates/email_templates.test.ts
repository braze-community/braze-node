import { Braze } from '../../Braze'
import { request } from '../../common/request'
import {
  EmailTemplateListResponse,
  EmailTemplateResponse,
  PostEmailTemplateResponse,
} from './types'

jest.mock('../../common/request/request')
const mockedRequest = jest.mocked(request)

const apiUrl = 'https://rest.iad-01.braze.com'
const apiKey = 'apiKey'

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Email Templates', () => {
  const braze = new Braze(apiUrl, apiKey)
  const options = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  }

  describe('templates.email_templates.list()', () => {
    const response: EmailTemplateListResponse = {
      templates: [],
      count: 0,
      message: 'success',
    }

    it('calls GET /templates/email/list with required params', async () => {
      mockedRequest.mockResolvedValueOnce(response)
      expect(await braze.templates.email_templates.list({})).toBe(response)
      expect(mockedRequest).toBeCalledWith(`${apiUrl}/templates/email/list?`, undefined, options)
      expect(mockedRequest).toBeCalledTimes(1)
    })
  })

  describe('templates.email_templates.get()', () => {
    const response: EmailTemplateResponse = {
      created_at: '',
      description: '',
      email_template_id: '',
      subject: '',
      tags: '',
      template_name: '',
      updated_at: '',
      body: '',
      plaintext_body: '',
      message: 'success',
      preheader: '',
      should_inline_css: true,
    }

    it('calls GET /templates/email/info with required params', async () => {
      mockedRequest.mockResolvedValueOnce(response)
      const emailTemplateId = 'YOUR_EMAIL_TEMPLATE_ID'
      expect(
        await braze.templates.email_templates.get({
          email_template_id: emailTemplateId,
        }),
      ).toBe(response)
      expect(mockedRequest).toBeCalledWith(
        `${apiUrl}/templates/email/info?email_template_id=${emailTemplateId}`,
        undefined,
        options,
      )
      expect(mockedRequest).toBeCalledTimes(1)
    })
  })

  describe('templates.email_templates.create()', () => {
    const response: PostEmailTemplateResponse = {
      email_template_id: '',
      message: 'success',
    }
    const requestBody = {
      body: '',
      subject: '',
      template_name: '',
      plaintext_body: '',
      preheader: '',
      should_inline_css: true,
    }

    it('calls POST /templates/email/create with body', async () => {
      mockedRequest.mockResolvedValueOnce(response)
      expect(await braze.templates.email_templates.create(requestBody)).toBe(response)
      expect(mockedRequest).toBeCalledWith(`${apiUrl}/templates/email/create`, requestBody, {
        ...options,
        method: 'POST',
      })
      expect(mockedRequest).toBeCalledTimes(1)
    })
  })

  describe('templates.email_templates.update()', () => {
    const response: PostEmailTemplateResponse = {
      email_template_id: '5',
      message: 'success',
    }
    const requestBody = {
      email_template_id: '5',
      body: 'New Body',
      template_name: '',
      subject: '',
    }

    it('calls POST /templates/email/update with body', async () => {
      mockedRequest.mockResolvedValueOnce(response)
      expect(await braze.templates.email_templates.update(requestBody)).toBe(response)
      expect(mockedRequest).toBeCalledWith(`${apiUrl}/templates/email/update`, requestBody, {
        ...options,
        method: 'POST',
      })
      expect(mockedRequest).toBeCalledTimes(1)
    })
  })
})
