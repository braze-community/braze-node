import { URLSearchParams } from 'url'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function buildParams(body: Record<string, any>): URLSearchParams {
  return Object.entries(body).reduce((params, [key, value]) => {
    return appendParams(params, key, value)
  }, new URLSearchParams())
}

function appendParams(params: URLSearchParams, key: string, value: unknown): URLSearchParams {
  if (value === undefined || value === null) {
    return params
  }

  if (Array.isArray(value)) {
    value.forEach((currentValue) => {
      appendParams(params, key, currentValue)
    })
    return params
  }

  params.append(key, getValue(key, value))
  return params
}

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
