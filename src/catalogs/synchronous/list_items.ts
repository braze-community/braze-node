import { get } from '../../common/request'
import { buildParams } from '../../common/request/params'
import { CatalogListItem, CatalogListItemsBody, CatalogListItemsResponse } from './types'

/**
 * Request catalog items.
 *
 * {@link https://www.braze.com/docs/api/endpoints/catalogs/catalog_items/synchronous/get_catalog_items_details_bulk/}
 */
export function listCatalogItems<T extends CatalogListItem>(
  apiUrl: string,
  apiKey: string,
  body: CatalogListItemsBody,
): Promise<CatalogListItemsResponse<T>> {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }
  const { catalog_name, ...params } = body

  return get(`${apiUrl}/catalogs/${catalog_name}/items?${buildParams(params)}`, undefined, options)
}
