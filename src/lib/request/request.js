import qs from 'qs'

import { transformStrapiData } from '../../utils'

import { instance } from './instance'

export const request = async ({
  publicationState = 'live',
  locale,
  url,
  filters,
  populate = '*',
  sort,
  start = 0,
  limit = 25,
}) => {
  const query = qs.stringify(
    {
      publicationState,
      locale,
      populate,
      filters,
      sort,
      pagination: {
        start,
        limit,
      },
    },
    {
      encodeValuesOnly: true,
    },
  )

  // TODO Consider a better error handling
  try {
    const response = await instance.get(`/${url}?${query}`)
    return transformStrapiData(response.data)
  } catch (error) {
    console.error(error.data || error.response || error.message)
    return null
  }
}
