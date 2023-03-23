import { URLSearchParams } from 'url'

export function buildParams(body: Record<string, any>): URLSearchParams {
  return Object.entries(body).reduce((params, [key, value]) => {
    if (typeof value === 'boolean') {
      params.append(key, JSON.stringify(value))
    } else if (typeof value === 'string') {
      params.append(key, value)
    } else if (typeof value === 'number') {
      params.append(key, value.toString())
    } else if (typeof value === 'undefined') {
      // Intentionally skip value
    } else {
      throw new Error(`Unhandled param type for "${key}"`)
    }
    return params
  }, new URLSearchParams())
}
