import { instance } from './instance'

export const mutation = {
  post: async (url, data) => instance.post(`/${url}`, data),
  put: async (url, id, data) => instance.put(`/${url}/${id}`, data),
  delete: async (url, id) => instance.delete(`/${url}/${id}`),
  // https://docs.strapi.io/developer-docs/latest/plugins/i18n.html#creating-a-localization-for-an-existing-entry
  localize: async (url, id, data) => instance.post(`/${url}/${id}/localization`, data),
}
