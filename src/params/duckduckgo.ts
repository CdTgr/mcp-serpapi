import { duckDuckGoSearchFields } from 'n8n-nodes-serpapi/dist/nodes/SerpApi/descriptions/index.js'

import { toParams } from '../utils/params.js'

export const duckDuckGoSearchFieldsSchema = {
  name: 'duckduckgo',
  description: 'Search the web using DuckDuckGo',
  params: toParams(duckDuckGoSearchFields),
} as const

export const DuckDuckGoSchemas = [duckDuckGoSearchFieldsSchema] as const
