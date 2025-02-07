
export type TransactionType = 'stateUpdate' | 'batchSubmission'

export type TrackedTransaction = {
  projectId: string
  type: TransactionType
  addressTo?: string
  addressFrom?: string
  selector?: string
  functionSignature?: string
}

export type Stack = {
  name: string
  projects: StackProject[]
}

export type StackProject = {
  name: string
  address: string
}

export type Config = {
  trackedTransactions: TrackedTransaction[]
  stacks: Stack[]
}

export type Result = {
  projectId: string,
  type: TransactionType,
  timestamp: Date,
}