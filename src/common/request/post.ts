import { request, RequestMethod } from './request'

/**
 * Sends a post request.
 */
export function post(...args: Parameters<typeof request>) {
  const [url, body, options] = args
  return request(url, body, { ...options, method: RequestMethod.POST })
}
