import type { HttpClient } from './HttpClient'
import type { json } from './json'

export abstract class ClientCore {
  constructor(private readonly http: HttpClient) {

  }

  async fetch(url: string, init: RequestInit): Promise<json> {
    const response = await this.http.fetch(url, init)

    const validationInfo = this.validateResponse(response as json)

    if (!validationInfo.success) {
      throw new Error(validationInfo.message ?? 'Response validation failed')
    }

    return response as json
  }

  /** This method should return false when there are errors in the response, true otherwise */
  abstract validateResponse(response: json): {
    success: boolean
    message?: string
  }
}
