import { describe, it } from 'node:test'

import assert from 'assert'

import { Braze } from '../esm/index.js'

describe('index', () => {
  it('exports "Braze" class', () => {
    assert.strictEqual(typeof Braze, 'function')
  })

  it('instantiates Braze with API URL and key', () => {
    const braze = new Braze('API_URL', 'API_KEY')
    assert.strictEqual(typeof braze.messages.send, 'function')
  })
})
