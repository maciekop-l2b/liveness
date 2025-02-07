import type { Config } from "./types";

export const config: Config = {
  trackedTransactions: [
    {
      projectId: 'Taiko',
      type: 'batchSubmission',
      addressTo: '0x06a9Ab27c7e2255df1815E6CC0168d7755Feb19a',
      selector: '0xef16e845',
      functionSignature: 'function proposeBlock(bytes _params, bytes _txList) payable returns (tuple(bytes32 l1Hash, bytes32 difficulty, bytes32 blobHash, bytes32 extraData, bytes32 depositsHash, address coinbase, uint64 id, uint32 gasLimit, uint64 timestamp, uint64 l1Height, uint16 minTier, bool blobUsed, bytes32 parentMetaHash, address sender) meta_, tuple(address recipient, uint96 amount, uint64 id)[] deposits_)'
    },
    {
      projectId: 'Taiko',
      type: 'batchSubmission',
      addressTo: '0x06a9Ab27c7e2255df1815E6CC0168d7755Feb19a',
      selector: '0xef16e845',
      functionSignature: 'function proposeBlock(bytes _params, bytes _txList) payable returns (tuple(bytes32 l1Hash, bytes32 difficulty, bytes32 blobHash, bytes32 extraData, bytes32 depositsHash, address coinbase, uint64 id, uint32 gasLimit, uint64 timestamp, uint64 l1Height, uint16 minTier, bool blobUsed, bytes32 parentMetaHash, address sender) meta_, tuple(address recipient, uint96 amount, uint64 id)[] deposits_)'
    },
    {
      projectId: 'Taiko',
      type: 'batchSubmission',
      addressTo: '0x06a9Ab27c7e2255df1815E6CC0168d7755Feb19a',
      selector: '0x648885fb',
      functionSignature: 'function proposeBlockV2(bytes _params, bytes _txList) returns (tuple meta_)'
    },
    {
      projectId: 'Taiko',
      type: 'batchSubmission',
      addressTo: '0x06a9Ab27c7e2255df1815E6CC0168d7755Feb19a',
      selector: '0x0c8f4a10',
      functionSignature: 'function proposeBlocksV2(bytes[] _paramsArr, bytes[] _txListArr) returns (tuple[] metaArr_)'
    },
    {
      projectId: 'Taiko',
      type: 'stateUpdate',
      addressTo: '0x06a9Ab27c7e2255df1815E6CC0168d7755Feb19a',
      selector: '0x10d008bd',
      functionSignature: 'function proveBlock(uint64 _blockId, bytes _input)',
    },
    {
      projectId: 'Taiko',
      type: 'stateUpdate',
      addressTo: '0x06a9Ab27c7e2255df1815E6CC0168d7755Feb19a',
      selector: '0x440b6e18',
      functionSignature: 'function proveBlocks(uint64[] _blockIds, bytes[] _inputs, bytes _batchProof)'
    },
    {
      projectId: 'OrbitStack',
      type: 'batchSubmission',
      selector: "0xe0bc9729",
      functionSignature: "function addSequencerL2Batch(uint256 sequenceNumber,bytes calldata data,uint256 afterDelayedMessagesRead,address gasRefunder,uint256 prevMessageCount,uint256 newMessageCount)"
    },
    {
      projectId: 'OrbitStack',
      type: 'batchSubmission',
      selector: "0x8f111f3c",
      functionSignature: "function addSequencerL2BatchFromOrigin(uint256 sequenceNumber,bytes data,uint256 afterDelayedMessagesRead,address gasRefunder,uint256 prevMessageCount,uint256 newMessageCount)"
    },
    {
      projectId: 'OrbitStack',
      type: 'batchSubmission',
      selector: "0x3e5aa082",
      functionSignature: "function addSequencerL2BatchFromBlobs(uint256 sequenceNumber,uint256 afterDelayedMessagesRead,address gasRefunder,uint256 prevMessageCount,uint256 newMessageCount)"
    },
    {
      projectId: 'OrbitStack',
      type: 'stateUpdate',
      selector: "0xa04cee60",
      functionSignature: "function updateSendRoot(bytes32 root, bytes32 l2BlockHash) external"
    },
    {
      projectId: 'Base',
      type: 'batchSubmission',
      addressFrom: '0x5050F69a9786F081509234F1a7F4684b5E5b76C9',
      addressTo: '0xFf00000000000000000000000000000000008453',
    },
    {
      projectId: 'stateUpdate',
      type: 'batchSubmission',
      addressTo: "0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e",
      selector: "0x82ecf2f6",
      functionSignature: "function create(uint32 _gameType, bytes32 _rootClaim, bytes _extraData) payable returns (address proxy_)"
    },
    {
      projectId: 'WorldChain',
      type: "batchSubmission",
      addressFrom: "0xdBBE3D8c2d2b22A2611c5A94A9a12C2fCD49Eb29",
      addressTo: "0xff00000000000000000000000000000000000480",
    },
    {
      projectId: 'WorldChain',
      type: "stateUpdate",
      addressTo: "0x069c4c579671f8c120b1327a73217D01Ea2EC5ea",
      selector: "0x82ecf2f6",
      functionSignature: "function create(uint32 _gameType, bytes32 _rootClaim, bytes _extraData) payable returns(address proxy_)"
    },
    {
      projectId: 'Optimism',
      type: 'batchSubmission',
      addressFrom: "0x6887246668a3b87F54DeB3b94Ba47a6f63F32985",
      addressTo: "0xFF00000000000000000000000000000000000010",
    },
    {
      projectId: 'Optimism',
      type: 'batchSubmission',
      addressTo: "0xe5965Ab5962eDc7477C8520243A95517CD252fA9",
      selector: "0x82ecf2f6",
      functionSignature: "function create(uint32 _gameType, bytes32 _rootClaim, bytes _extraData) payable returns(address proxy_)"
    }
  ],
  stacks: [
    {
      name: 'OrbitStack',
      projects: [
        { name: "ebichain", address: "0x0D51c6664A773873971336850C51A5caE8e63e89" },
        { name: "orderly", address: "0x08aA34cC843CeEBcC88A627F18430294aA9780be" },
        { name: "nova", address: "0x211E1c4c7f1bF5351Ac850Ed10FD68CFfCF6c21b" },
        { name: "alienx", address: "0xb7d188eb30e7984f93Bec34Ee8b45A148bd594C6" },
        { name: "hypr", address: "0x0C57B7f3bAc278bE091431B52470fBAdBc4240E6" },
        { name: "bob", address: "0x3A75346f81302aAc0333FB5DCDD407e12A6CfA83" },
        { name: "edgeless", address: "0xFfbf2b49524e09B1F1fBcA707B830e79c68c2086" },
        { name: "real", address: "0x51C4a227D59E49E26Ea07D8e4E9Af163da4c87A0" },
        { name: "kinto", address: "0xF4Ef823D57819AC7202a081A5B49376BD28E7b3a" },
        { name: "reya", address: "0x6CA2A628fb690Bd431F4aA608655ce37c66aff9d" },
        { name: "xchain", address: "0x47861E0419BE83d0175818a09221B6DF2EFD7793" },
        { name: "galxegravity", address: "0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3" },
        { name: "corn", address: "0x4ad144ea249A98F77e0b78104D3B6eB6cd3a76DA" },
        { name: "oevnetwork", address: "0xD5dD6114a5DC6d1352C0EE47Cbed6a1807F079c7" },
        { name: "polynomial", address: "0x0bd57e83B5E0f9eCD84d559bB58e1EcFEEdD2565" },
        { name: "hychain", address: "0xaF5800ADF22301968613c37DA9C3C2a486eA915A" },
        { name: "parallel", address: "0xb4795A0edae98d7820C37F06f6b858e7acb51DF8" },
        { name: "fluence", address: "0xD04Cf183526aDC4a37B72D49bFe6eE19d9E19bd0" },
        { name: "sxnetwork", address: "0xD80a805c86C14c879420eC6acb366D04D318fC0C" },
        { name: "river", address: "0x9BE0c82d5bA973a9e6861695626D4F9983e80C88" },
        { name: "arenaz", address: "0x00f9BCEe08DCe4F0e7906c1f6cFb10c77802EEd0" },
        { name: "alephzero", address: "0xF75206c49c1694594E3e69252E519434f1579876" },
        { name: "arbitrum", address: "0x1c479675ad559DC151F6Ec7ed3FbF8ceE79582B6" },
        { name: "everclear", address: "0x7B0517E0104dB60198f9d573C0aB8d480207827E" }
      ]
    }
  ]
}

