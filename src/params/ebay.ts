import { ebaySearchFields } from 'n8n-nodes-serpapi/dist/nodes/SerpApi/descriptions/index.js'

import { toParams } from '../utils/params.js'

export const ebaySearchFieldsSchema = {
  name: 'ebay',
  description: 'Search products on eBay',
  params: toParams(ebaySearchFields),
} as const

export const EbaySchemas = [ebaySearchFieldsSchema] as const
