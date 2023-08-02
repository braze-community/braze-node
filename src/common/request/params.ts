import { URLSearchParams } from 'url'

import type { RequestBody } from './request'

/**
 * Build query string params.
 *
 * @param parameters - Request parameters.
 * @returns - Query string.
 */
export function buildParams(parameters?: RequestBody): string {
  if (!parameters) {
    return ''
  }

  const searchParams = Object.entries(parameters).reduce((params, [key, value]) => {
    if (Array.isArray(value)) {
      return appendParam(params, `${key}[]`, value)
    }
    return appendParam(params, key, value)
  }, new URLSearchParams())

  return searchParams.toString()
}

/**
 * Append query string param.
 *
 * @param searchParams - Search params.
 * @param key - Key.
 * @param value - Value.
 * @returns - URL search params.
 */
function appendParam(searchParams: URLSearchParams, key: string, value: unknown): URLSearchParams {
  if (value === undefined || value === null) {
    return searchParams
  }

  if (Array.isArray(value)) {
    value.forEach((currentValue) => {
      appendParam(searchParams, key, currentValue)
    })
    return searchParams
  }

  searchParams.append(key, getValue(key, value))
  return searchParams
}

/**
 * Get string value.
 *
 * @param key - Key.
 * @param value - Value.
 * @returns - String value.
 */
function getValue(key: string, value: unknown): string {
  switch (typeof value) {
    case 'boolean':
      return JSON.stringify(value)

    case 'string':
      return value

    case 'number':
      return value.toString()

    default:
      throw new Error(`Unhandled param type for key "${key}"`)
  }
}
