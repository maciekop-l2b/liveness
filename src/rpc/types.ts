
import { z } from 'zod'

export const RpcResponse = z.object({ id: z.string(), result: z.unknown() })

export const Quantity = {
  decode: z.preprocess((s) => {
    const res = z.string().parse(s)
    if (res.startsWith('0x0') && res.length !== 3) {
      throw new Error('No leading zeroes allowed')
    }
    return BigInt(res)
  }, z.bigint()),

  encode: (n: bigint) => `0x${n.toString(16)}`,
}

export type EVMTransaction = z.infer<typeof EVMTransaction>
export const EVMTransaction = z
  .object({
    hash: z.string(),
    from: z.string(),
    /** Address of the receiver, null when its a contract creation transaction. */
    to: z
      .union([z.string(), z.null()])
      .transform((to) => (to === null ? undefined : to))
      .optional(),
    input: z.string(),
    type: Quantity.decode.transform((n) => String(n)).optional(),
    blobVersionedHashes: z.array(z.string()).optional(),
    blockNumber: z.union([
      Quantity.decode.transform((n) => Number(n)),
      z.null(),
    ]),
  })
  .transform((tx) => ({
    hash: tx.hash,
    from: tx.from,
    to: tx.to,
    data: tx.input,
    type: tx.type,
    blobVersionedHashes: tx.blobVersionedHashes,
    blockNumber: tx.blockNumber,
  }))

export const EVMTransactionResponse = z.object({
  result: EVMTransaction,
})

const EVMTransactionReceipt = z.object({
  logs: z.array(
    z.object({
      topics: z.array(z.string()),
      data: z.string(),
    }),
  ),
})

export const EVMTransactionReceiptResponse = z.object({
  result: EVMTransactionReceipt,
})

export type EVMBlock = z.infer<typeof EVMBlock>
const EVMBlock = z.object({
  timestamp: Quantity.decode.transform((n) => Number(n)),
  hash: z.string(),
  number: Quantity.decode.transform((n) => Number(n)),
  parentBeaconBlockRoot: z.string().optional(),
})

export const EVMBlockResponse = z.object({
  result: EVMBlock,
})

export type EVMBlockWithTransactions = z.infer<typeof EVMBlockWithTransactions>
const EVMBlockWithTransactions = EVMBlock.extend({
  transactions: z.array(EVMTransaction),
})

export const EVMBlockWithTransactionsResponse = z.object({
  result: EVMBlockWithTransactions,
})

export type RPCError = z.infer<typeof RPCError>
export const RPCError = z.object({
  error: z.object({
    code: z.number(),
    message: z.string(),
  }),
})

export interface Block {
  number: number
  hash: string
  timestamp: number
  transactions: Transaction[]
}

export interface Transaction {
  hash?: string
  from?: string
  to?: string
  data?: string
  type?: string
}

