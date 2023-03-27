import { get } from '../../common/request'
import { CatalogListItem, CatalogListItemBody, CatalogListItemResponse } from './types'

/**
 * Request content block.
 *
 * {@link https://www.braze.com/docs/api/endpoints/catalogs/catalog_items/synchronous/get_catalog_item_details/}
 */
export function getCatalogItem<T extends CatalogListItem>(
  apiUrl: string,
  apiKey: string,
  body: CatalogListItemBody,
): Promise<CatalogListItemResponse<T>> {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  }

  return get(`${apiUrl}/catalogs/${body.catalog_name}/items/${body.item_id}`, undefined, options)
}
