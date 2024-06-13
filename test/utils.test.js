import { describe, expect, it } from 'vitest'
import { parseJson, parseYaml } from '../src/utils'

describe('utils', () => {
  it('parseJson', () => {
    const version = parseJson('test/fixtures/version/package.json')
    expect(version).toBe('0.1.0')
  })
  it('parseYaml', () => {
    const version = parseYaml('test/fixtures/version/pubspec.yaml')
    expect(version).toBe('0.1.0')
  })
})
