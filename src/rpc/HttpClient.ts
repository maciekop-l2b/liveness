export class HttpClient {
  /**
   * Sends request to the provided url with init params.
   * Use this method only when you expect server to return valid JSON.
   * Default timeout is 10_000ms
   */
  async fetch(url: string, init: RequestInit) {
    const res = await fetch(url, {
      ...init,
    })

    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status} ${res.statusText}`)
    }

    return res.json()
  }

  async fetchRaw(url: string, init: RequestInit & { timeout?: number }) {
    return await fetch(url, {
      ...init,
    })
  }
}
