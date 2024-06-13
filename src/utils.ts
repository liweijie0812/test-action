import fs from 'node:fs'
import yaml from 'js-yaml'
import * as core from '@actions/core'
import * as github from '@actions/github'

export function parseJson(path: string) {
  const pkg = JSON.parse(fs.readFileSync(path, 'utf-8'))
  return pkg.version
}

export function parseYaml(path: string) {
  const yamlData = fs.readFileSync(path, 'utf8')
  const parsedData: any = yaml.load(yamlData)
  return parsedData.version as string
}

export function getVersion(path: string) {
  const ext = path.split('.').pop()
  if (ext === 'json') {
    return parseJson(path)
  }
  else if (ext === 'yaml' || ext === 'yml') {
    return parseYaml(path)
  }
  else {
    core.setFailed(`Unsupported file extension: ${ext}`)
  }
}
export async function getLatestTag(token: string) {
  const octokit = github.getOctokit(token)
  const tags = await octokit.rest.repos.listTags({
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
    per_page: 1,
  })
  core.info(`tags: ${JSON.stringify(tags)}`)
  return tags.data[0]?.name || ''
}
