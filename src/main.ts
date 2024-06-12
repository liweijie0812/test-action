import * as core from '@actions/core'

import { getLatestTag, getVersion } from './utils'

export async function run() {
  core.info('Hello world!')
  const token = core.getInput('token')
  if (!token) {
    core.setFailed('token is required')
    return
  }

  const versionFile = core.getInput('version_file') as string || './package.json'
  core.info(`version_file: ${versionFile}`)
  const version = getVersion(versionFile)
  core.info(`version: ${version}`)
  core.setOutput('version', version)

  const latestTag = getLatestTag(token)
  core.info(`latest tag: ${latestTag}`)
  core.setOutput('latest_tag', latestTag)
}
