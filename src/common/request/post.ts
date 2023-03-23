import { request, RequestMethod, ServerResponse } from './request'

/**
 * Sends a post request.
 */
export function post<Response extends ServerResponse = ServerResponse>(
  ...args: Parameters<typeof request>
) {
  const [url, body, options] = args
  return request<Response>(url, body, { ...options, method: RequestMethod.POST })
}
