import fetch, { Response } from 'node-fetch'

import { buildOptions, ResponseError } from '../../common/request'
import { CatalogListItem, CatalogListItemsBody } from './types'

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

class CatalogListItems<T extends CatalogListItem> {
  constructor(
    private readonly apiUrl: string,
    private readonly apiKey: string,
    public readonly items: T[],
    private readonly nextPageLink?: string,
  ) {}

  hasNextPage(): boolean {
    return Boolean(this.nextPageLink)
  }

  next(): Promise<CatalogListItems<T>> {
    if (!this.nextPageLink) {
      throw new ResponseError('There is no next page', 0)
    }
    return CatalogListItems.queryItems(this.apiUrl, this.apiKey, this.nextPageLink)
  }

  static async queryItems<T extends CatalogListItem>(
    apiUrl: string,
    apiKey: string,
    url: string,
  ): Promise<CatalogListItems<T>> {
    const response: Response = await fetch(apiUrl + url, buildOptions({ apiKey }))
    const data = await response.json()

    if (!response.ok) {
      throw new ResponseError(data.message, response.status, data.errors)
    }

    return new CatalogListItems<T>(
      apiUrl,
      apiKey,
      data.items,
      getNextPageLink(response.headers.get('Link')),
    )
  }
}

/**
 * Request catalog items.
 *
 * {@link https://www.braze.com/docs/api/endpoints/catalogs/catalog_items/synchronous/get_catalog_items_details_bulk/}
 */
export function getListCatalogItems<T extends CatalogListItem>(
  apiUrl: string,
  apiKey: string,
  { catalog_name }: CatalogListItemsBody,
): Promise<CatalogListItems<T>> {
  return CatalogListItems.queryItems<T>(apiUrl, apiKey, `/catalogs/${catalog_name}/items`)
}

/**
 * Request catalog items.
 *
 * {@link https://www.braze.com/docs/api/endpoints/catalogs/catalog_items/synchronous/get_catalog_items_details_bulk/}
 */
export async function* getListCatalogItemsIterator<T extends CatalogListItem>(
  apiUrl: string,
  apiKey: string,
  body: CatalogListItemsBody,
): AsyncGenerator<T> {
  let result = await getListCatalogItems<T>(apiUrl, apiKey, body)
  do {
    for (const item of result.items) {
      yield item
    }
    if (!result.hasNextPage()) {
      break
    }
    result = await result.next()
  } while (true)
}
