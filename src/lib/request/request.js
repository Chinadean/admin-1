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
  page = 1,
  pageSize = 25,
}) => {
  const query = qs.stringify(
    {
      publicationState,
      locale,
      populate,
      filters,
      sort,
      pagination: {
        page,
        pageSize,
      },
    },
    {
      encodeValuesOnly: true,
    },
  )

  // TODO Consider a better error handling
  try {
    const response = await instance.get(`/${url}?${query}`)

    // returns {data: any[], total: number}
    const transformedData = transformStrapiData(response.data)

    return transformedData
  } catch (error) {
    console.error('Request error', error.data || error.response || error.message)
    return null
  }
}
