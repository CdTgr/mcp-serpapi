import {
  googleAutocompleteFields,
  googleFlightsFields,
  googleImagesFields,
  googleJobsFields,
  googleLensFields,
  googleLightFields,
  googleLocalFields,
  googleMapsDirectionsFields,
  googleMapsFields,
  googleMapsReviewsFields,
  googleNewsFields,
  googleProductFields,
  googleScholarFields,
  googleSearchFields,
  googleShoppingFields,
  googleTrendsFields,
  googleVideosFields,
} from 'n8n-nodes-serpapi/dist/nodes/SerpApi/descriptions/index.js'

import { toParams } from '../utils/params.js'

export const googleAutocompleteFieldsSchema = {
  name: 'google_autocomplete',
  description: 'Autocomplete search queries using Google',
  params: toParams(googleAutocompleteFields),
} as const
export const googleFlightsFieldsSchema = {
  name: 'google_flights',
  description: 'Search flights using Google',
  params: toParams(googleFlightsFields),
}
export const googleImagesFieldsSchema = {
  name: 'google_images',
  description: 'Search images using Google',
  params: toParams(googleImagesFields),
} as const
export const googleJobsFieldsSchema = {
  name: 'google_jobs',
  description: 'Search jobs using Google',
  params: toParams(googleJobsFields),
} as const
export const googleLensFieldsSchema = {
  name: 'google_lens',
  description: 'Search images using Google Lens',
  params: toParams(googleLensFields),
} as const
export const googleLightFieldsSchema = {
  name: 'google_light',
  description: 'Search the web using Google Light',
  params: toParams(googleLightFields),
} as const
export const googleLocalFieldsSchema = {
  name: 'google_local',
  description: 'Search local businesses using Google',
  params: toParams(googleLocalFields),
} as const
export const googleMapsDirectionsFieldsSchema = {
  name: 'google_maps_directions',
  description: 'Get directions using Google Maps',
  params: toParams(googleMapsDirectionsFields),
} as const
export const googleMapsFieldsSchema = {
  name: 'google_maps',
  description: 'Search locations using Google Maps',
  params: toParams(googleMapsFields),
} as const
export const googleMapsReviewsFieldsSchema = {
  name: 'google_maps_reviews',
  description: 'Get reviews for locations using Google Maps',
  params: toParams(googleMapsReviewsFields),
} as const
export const googleNewsFieldsSchema = {
  name: 'google_news',
  description: 'Search news articles using Google News',
  params: toParams(googleNewsFields),
} as const
export const googleProductFieldsSchema = {
  name: 'google_product',
  description: 'Search products using Google',
  params: toParams(googleProductFields),
} as const
export const googleScholarFieldsSchema = {
  name: 'google_scholar',
  description: 'Search academic papers using Google Scholar',
  params: toParams(googleScholarFields),
} as const
export const googleSearchFieldsSchema = {
  name: 'google',
  description: 'Search the web using Google',
  params: toParams(googleSearchFields),
} as const
export const googleShoppingFieldsSchema = {
  name: 'google_shopping',
  description: 'Search products using Google Shopping',
  params: toParams(googleShoppingFields),
} as const
export const googleTrendsFieldsSchema = {
  name: 'google_trends',
  description: 'Get trending topics using Google Trends',
  params: toParams(googleTrendsFields),
} as const
export const googleVideosFieldsSchema = {
  name: 'google_videos',
  description: 'Search videos using Google',
  params: toParams(googleVideosFields),
} as const

export const GoogleSchemas = [
  googleAutocompleteFieldsSchema,
  googleFlightsFieldsSchema,
  googleImagesFieldsSchema,
  googleJobsFieldsSchema,
  googleLensFieldsSchema,
  googleLightFieldsSchema,
  googleLocalFieldsSchema,
  googleMapsDirectionsFieldsSchema,
  googleMapsFieldsSchema,
  googleMapsReviewsFieldsSchema,
  googleNewsFieldsSchema,
  googleProductFieldsSchema,
  googleScholarFieldsSchema,
  googleSearchFieldsSchema,
  googleShoppingFieldsSchema,
  googleTrendsFieldsSchema,
  googleVideosFieldsSchema,
] as const
