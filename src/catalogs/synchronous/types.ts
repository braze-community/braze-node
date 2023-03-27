import { ServerResponse } from '../../common/request'

/**
 * Response body for catalog list.
 *
 * {@link https://www.braze.com/docs/api/endpoints/catalogs/catalog_management/synchronous/get_list_catalogs/}
 */
export interface CatalogListResponse extends ServerResponse {
  catalogs: {
    description: string
    fields: {
      name: string
      type: string
    }[]
  }[]
}

/**
 * Request body for catalog list items.
 *
 * {@link https://www.braze.com/docs/api/endpoints/catalogs/catalog_items/synchronous/get_catalog_items_details_bulk/}
 */
export interface CatalogListItemsBody {
  catalog_name: string
  cursor?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CatalogListItem<T extends Record<string, any> = Record<string, unknown>> = {
  id: string
} & T

/**
 * Response body for catalog list items.
 *
 * {@link https://www.braze.com/docs/api/endpoints/catalogs/catalog_items/synchronous/get_catalog_items_details_bulk/}
 */
export interface CatalogListItemsResponse<T extends CatalogListItem = CatalogListItem>
  extends ServerResponse {
  items: T[]
}

/**
 * Request body for catalog list items.
 *
 * {@link https://www.braze.com/docs/api/endpoints/catalogs/catalog_items/synchronous/get_catalog_item_details/}
 */
export interface CatalogListItemBody {
  catalog_name: string
  item_id: string
}

/**
 * Response body for catalog list items.
 *
 * {@link https://www.braze.com/docs/api/endpoints/catalogs/catalog_items/synchronous/get_catalog_item_details/}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface CatalogListItemResponse<T extends CatalogListItem = CatalogListItem>
  extends ServerResponse {
  items: [T]
}
