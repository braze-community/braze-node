import type { RequestInit } from 'node-fetch'
import fetch from 'node-fetch'

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RequestBody = Record<string, any>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ResponseBody = Record<string, any>

/**
 * {@link https://www.braze.com/docs/api/errors/#server-responses}
 */
interface ServerResponse {
  message: string
  errors?: string[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

class ResponseError extends Error {
  status: number
  errors?: ServerResponse['errors']

  constructor(message: string, status: number, errors?: ServerResponse['errors']) {
    super(message)
    this.status = status
    this.errors = errors
  }
}

/**
 * Makes a request.
 *
 * @param url - Request endpoint.
 * @param body - Request body.
 * @param options - Request options.
 * @returns - Response.
 */
export async function request(
  url: string,
  body: RequestBody,
  options?: RequestInit,
): Promise<ResponseBody> {
  const response = await fetch(url, {
    body: JSON.stringify(body),
    ...options,
  })

  const data: ServerResponse = await response.json()

  if (response.ok) {
    return data
  }

  throw new ResponseError(data.message, response.status, data.errors)
}
