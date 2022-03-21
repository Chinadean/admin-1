import qs from 'qs'

import { transformStrapiData } from '../../utils'

import { fetcher } from './fetcher'

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

  try {
    const response = await fetcher(`/${url}?${query}`)

    // returns {data: any[], total: number}
    const transformedData = transformStrapiData(response.data)

    return transformedData
  } catch (error) {
    // TODO Consider a better error handling
    console.error('Request error', error.data || error.response || error.message)
    return null
  }
}
