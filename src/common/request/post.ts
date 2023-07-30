import type { RequestBody, RequestOptions, RequestURL, ServerResponse } from './request'
import { request, RequestMethod } from './request'

/**
 * Makes a POST request.
 *
 * @param url - Request endpoint.
 * @param body - Request body.
 * @param options - Request options.
 * @returns - Response.
 */
export function post<Response extends ServerResponse>(
  url: RequestURL,
  body: RequestBody,
  options: RequestOptions,
) {
  return request<Response>(url, body, { ...options, method: RequestMethod.POST })
}
