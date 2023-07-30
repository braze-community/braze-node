import { URLSearchParams } from 'url'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function buildParams(body: Record<string, any>): URLSearchParams {
  return Object.entries(body).reduce((params, [key, value]) => {
    if (value !== undefined) {
      params.append(key, getValue(value, key))
    }
    return params
  }, new URLSearchParams())
}

function getValue(value: unknown, key: string) {
  switch (typeof value) {
    case 'boolean':
      return JSON.stringify(value)

    case 'string':
      return value

    case 'number':
      return value.toString()

    default:
      throw new Error(`Unhandled param type for "${key}"`)
  }
}
