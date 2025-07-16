import { baiduSearchFields } from 'n8n-nodes-serpapi/dist/nodes/SerpApi/descriptions/index.js'

import { toParams } from '../utils/params.js'

export const baiduSearchFieldsSchema = {
  name: 'baidu',
  description: 'Search the web using Baidu',
  params: toParams(baiduSearchFields),
} as const

export const BaiduSchemas = [baiduSearchFieldsSchema] as const
