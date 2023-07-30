import type { RequestInit } from 'node-fetch'
import fetch from 'node-fetch'

export enum RequestMethod {
  POST = 'POST',
}

/**
 * {@link https://www.braze.com/docs/api/errors/#server-responses}
 */
export interface ServerResponse {
  message: string
  errors?: string[]
}

export class ResponseError extends Error {
  status: number
  errors?: ServerResponse['errors']

  constructor(message: string, status: number, errors?: ServerResponse['errors']) {
    super(message)
    this.status = status
    this.errors = errors
  }
}

export type RequestURL = string
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RequestBody = Record<string, any>
export type RequestOptions = RequestInit

/**
 * Makes a request.
 *
 * @param url - Request endpoint.
 * @param body - Request body.
 * @param options - Request options.
 * @returns - Response.
 */
export async function request<Response extends ServerResponse>(
  url: RequestURL,
  body?: RequestBody,
  options?: RequestOptions,
): Promise<Response> {
  const response = await fetch(url, {
    body: body ? JSON.stringify(body) : undefined,
    ...options,
  })

  const data: Response = await response.json()

  if (response.ok) {
    return data
  }

  throw new ResponseError(data.message, response.status, data.errors)
}
