import { config } from "./config"
import { HttpClient } from "./rpc/HttpClient"
import { RpcClient } from "./rpc/RpcClient"
import type { Block } from "./rpc/types"
import type { Result } from "./types"

import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3001 });
wss.on('connection', function connection(ws) {
  console.log('Connection established')
});

main()
  .catch((e: unknown) => {
    console.error(e)
  })

let lastBlock = 0

async function main() {
  const rpcCLient = new RpcClient('https://eth.llamarpc.com', new HttpClient())

  const block = await rpcCLient.getBlockWithTransactions('latest')

  if (block.number > lastBlock) {
    const results = matchTransactions(block)
    if (results.length > 0) {
      // biome-ignore lint/complexity/noForEach: <explanation>
      results.forEach((result) => {
        // biome-ignore lint/complexity/noForEach: <explanation>
        wss.clients.forEach((client) => {
          console.log('Sending result to client')
          client.send(JSON.stringify(result))
        })
      })
    }
  }

  lastBlock = block.number
  setTimeout(main, 2000);
}

function matchTransactions(block: Block): Result[] {
  console.log(`Block ${block.number} ${new Date(block.timestamp * 1000).toISOString()}`)

  const results: Result[] = []

  for (const tx of block.transactions) {
    for (const trackedTx of config.trackedTransactions) {
      // match addressTo and selector
      if (trackedTx.addressTo && trackedTx.selector) {
        if (tx.to?.toLocaleLowerCase() === trackedTx.addressTo.toLocaleLowerCase() && tx.data?.includes(trackedTx.selector)) {
          results.push({
            projectId: trackedTx.projectId,
            type: trackedTx.type,
            timestamp: block.timestamp,
          })
        }

      }
      // match addressTo and addressFrom
      else if (trackedTx.addressTo && trackedTx.addressFrom) {
        if (tx.to?.toLocaleLowerCase() === trackedTx.addressTo.toLocaleLowerCase() && tx.from?.toLocaleLowerCase() === trackedTx.addressFrom.toLocaleLowerCase()) {
          results.push({
            projectId: trackedTx.projectId,
            type: trackedTx.type,
            timestamp: block.timestamp,
          })
        }
      }
      // match stack
      else if (trackedTx.selector) {
        const stack = config.stacks.find(s => s.name === trackedTx.projectId)
        if (!stack) {
          continue
        }

        const project = stack.projects.find(p => p.address.toLowerCase() === tx.to?.toLocaleLowerCase())
        if (!project) {
          continue
        }

        results.push({
          projectId: project.name,
          type: trackedTx.type,
          timestamp: block.timestamp,
        })
      }
    }
  }

  // spread transactions evenly across 12s interval
  results.forEach((r, i) => {
    r.timestamp = (r.timestamp + i) * 1000
  })

  return results
}