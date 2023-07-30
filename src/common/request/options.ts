import type { RequestOptions } from './request'

interface Options {
  apiKey: string
}

/**
 * Build RequestInit options.
 */
export function buildOptions({ apiKey }: Options): RequestOptions {
  const options: RequestOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }
  return options
}
