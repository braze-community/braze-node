import type { RequestOptions, RequestURL, ServerResponse } from './request'
import { request } from './request'

/**
 * Makes a GET request.
 *
 * @param url - Request endpoint.
 * @param options - Request options.
 * @returns - Response.
 */
export function get<Response extends ServerResponse>(url: RequestURL, options: RequestOptions) {
  return request<Response>(url, undefined, options)
}
