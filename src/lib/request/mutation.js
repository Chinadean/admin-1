import { fetcher } from './fetcher'

export const mutation = {
  post: async (url, data) => fetcher(url, data, 'post'),
  put: async (url, id, data) => fetcher(`/${url}/${id}`, data, 'put'),
  delete: async (url, id) => fetcher(`/${url}/${id}`, 'delete'),
  // https://docs.strapi.io/developer-docs/latest/plugins/i18n.html#creating-a-localization-for-an-existing-entry
  localize: async (url, id, data) => fetcher(`/${url}/${id}/localization`, data, 'post'),
}
