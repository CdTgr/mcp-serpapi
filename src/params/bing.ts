import {
  bingImagesFields,
  bingSearchFields,
} from 'n8n-nodes-serpapi/dist/nodes/SerpApi/descriptions/index.js'

import { toParams } from '../utils/params.js'

export const bingImagesFieldsSchema = {
  name: 'bing_images',
  description: 'Search images using Bing',
  params: toParams(bingImagesFields),
} as const
export const bingSearchFieldsSchema = {
  name: 'bing',
  description: 'Search the web using Bing',
  params: toParams(bingSearchFields),
} as const

export const BingSchemas = [
  bingImagesFieldsSchema,
  bingSearchFieldsSchema,
] as const
