import type { RequestInit } from 'node-fetch'
import fetch from 'node-fetch'

export enum RequestMethod {
  GET = 'GET',
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
  public readonly name = 'ResponseError'
  constructor(
    message: string,
    public readonly status: number,
    public readonly errors?: ServerResponse['errors'],
  ) {
    super(message)
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
export async function request<Response extends ServerResponse = ServerResponse>(
  url: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: Record<string, any>,
  options?: RequestInit,
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
