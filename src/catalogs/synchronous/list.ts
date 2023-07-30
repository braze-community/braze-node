import { buildOptions, get } from '../../common/request'
import { CatalogListResponse } from './types'

/**
 * Request category synchronous list.
 *
 * {@link https://www.braze.com/docs/api/endpoints/catalogs/catalog_management/synchronous/get_list_catalogs/}
 */
export function listCatalogs(apiUrl: string, apiKey: string): Promise<CatalogListResponse> {
  return get(`${apiUrl}/catalogs`, buildOptions({ apiKey }))
}
