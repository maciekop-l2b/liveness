import { ClientCore } from "./ClientCore"
import type { HttpClient } from "./HttpClient"
import type { json } from "./json"
import { type Block, type EVMBlock, EVMBlockResponse, type EVMBlockWithTransactions, EVMBlockWithTransactionsResponse, Quantity, RPCError } from "./types"


export class RpcClient extends ClientCore {
  constructor(private readonly url: string, http: HttpClient) {
    super(http)
  }

  async getLatestBlockNumber() {
    const block = await this.getBlock('latest')
    return Number(block.number)
  }

  async getBlockWithTransactions(
    blockNumber: number | 'latest',
  ): Promise<Block> {
    return await this.getBlock(blockNumber) as Block
  }

  async getBlock(blockNumber: 'latest' | number) {
    const method = 'eth_getBlockByNumber'
    const encodedNumber =
      blockNumber === 'latest' ? 'latest' : Quantity.encode(BigInt(blockNumber))
    const blockResponse = await this.query(method, [encodedNumber, true])

    const block = EVMBlockWithTransactionsResponse.safeParse(blockResponse)

    if (!block.success) {
      throw new Error(`Block ${blockNumber}: Error during parsing`)
    }

    return { ...block.data.result }
  }

  async query(
    method: string,
    params: (string | number | boolean | Record<string, string>)[],
  ) {
    return await this.fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        method,
        params,
        id: Math.floor(Math.random() * 1000),
        jsonrpc: '2.0',
      }),
      redirect: 'follow',
    })
  }

  override validateResponse(response: json): {
    success: boolean
    message?: string
  } {
    const parsedError = RPCError.safeParse(response)

    if (parsedError.success) {
      return { success: false }
    }

    return { success: true }
  }

}