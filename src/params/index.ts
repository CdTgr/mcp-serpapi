import { BaiduSchemas } from './baidu.js'
import { BingSchemas } from './bing.js'
import { DuckDuckGoSchemas } from './duckduckgo.js'
import { EbaySchemas } from './ebay.js'
import { GoogleSchemas } from './google.js'

export const schemas = [
  ...BaiduSchemas,
  ...BingSchemas,
  ...DuckDuckGoSchemas,
  ...EbaySchemas,
  ...GoogleSchemas,
] as const
