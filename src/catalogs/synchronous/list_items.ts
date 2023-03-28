import fetch, { Response } from 'node-fetch'

import { ResponseError } from '../../common/request'
import { CatalogListItem, CatalogListItemsBody, CatalogListItemsResponse } from './types'

function getNextPageLink(linkHeader: string | null): string | undefined {
  const linkMatches = linkHeader?.matchAll(/<([^>]+)>; rel="(prev|next)"/g)
  if (linkMatches) {
    for (const match of linkMatches) {
      if (match[2] === 'next') {
        return match[1]
      }
    }
  }
}

/**
 * Request catalog items.
 *
 * {@link https://www.braze.com/docs/api/endpoints/catalogs/catalog_items/synchronous/get_catalog_items_details_bulk/}
 */
export async function listCatalogItems<T extends CatalogListItem>(
  apiUrl: string,
  apiKey: string,
  { catalog_name, max_pages }: CatalogListItemsBody,
): Promise<CatalogListItemsResponse<T>> {
  let uri: string | undefined = `/catalogs/${catalog_name}/items`
  let data: CatalogListItemsResponse<T> | undefined
  let total_requests = 0

  do {
    total_requests++
    const response: Response = await fetch(apiUrl + uri, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    const jsonResponse = await response.json()

    if (response.ok) {
      if (!data) {
        data = jsonResponse
      } else {
        data.items = data.items.concat(jsonResponse.items)
      }
    } else {
      throw new ResponseError(jsonResponse.message, response.status, jsonResponse.errors)
    }

    if (max_pages && total_requests >= max_pages) {
      break
    }

    uri = getNextPageLink(response.headers.get('Link'))
  } while (uri)

  return data as CatalogListItemsResponse<T>
}
