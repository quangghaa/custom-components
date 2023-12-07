export const initialNodes = [
    {
      id: "unknown-group",
      type: "groupNode",
      data: {
        label: "Unknown group",
        nodeType: "nginx",
        size: {width: 500, height: 600},
        ip: "10.10.10.255",
        port: "8101",
        handle: {
          target: [{id: "target-1", position: "left"}, {id: "target-2", position: "right"}]
      }
      },
      position: { x: 400, y: 0 },
    },
    {
      id: "nginx-1",
      type: "singleNode",
      data: {
        label: "Nginx 1",
        nodeType: "nginx",
        ip: "10.20.34.182",
        port: "8000",
        handle: {
            source: [{id: "source", position: "right"}]
        }
      },
      position: { x: 60, y: 95 }, 
      parentNode: "unknown-group",
      extent: "parent",
    },
    {
      id: "nginx-2",
      type: "singleNode",
      data: {
        label: "Nginx 2",
        nodeType: "nginx",
        ip: "10.20.34.182",
        port: "8000",
        handle: {
            source: [{id: "source", position: "right"}]
        }
      },
      position: { x: 60, y: 336 },
      parentNode: "unknown-group",
      extent: "parent",
    },
    {
      id: "api-1",
      type: "singleNode",
      data: {
        label: "Api 1",
        nodeType: "api",
        ip: "10.20.34.182",
        port: "8000",
        handle: {
            target: [{id: "target", position: "left"}, {id: "target-2", position: "left", style: {top: 40}}]
        }
      },
      position: { x: 292, y: 98 },
      parentNode: "unknown-group",
      extent: "parent",
    },
    {
      id: "api-2",
      type: "singleNode",
      data: {
        label: "Api 2",
        nodeType: "api",
        ip: "10.20.34.182",
        port: "8000",
        handle: {
            target: [{id: "target", position: "left"}]
        }
      },
      position: { x: 292, y: 338 },
      parentNode: "unknown-group",
      extent: "parent",
    },
  
    // App client
    {
      id: "appclient-group",
      type: "groupNode",
      data: {
        label: "Appclient",
        nodeType: "app-client",
        size: {width: 300, height: 900},
        ip: "10.10.10.255",
        port: "8101",
        handle: {
          source: [{id: "source-1", position: "left"}, {id: "source-2", position: "top"}],
          target: [{id: "target", position: "right"}]
        }
      },
      position: { x: 1343, y: -785 },
    },
    {
      id: "appclient-1",
      type: "singleNode",
      data: {
        label: "Appclient 1",
        nodeType: "app-client",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 70, y: 74 },
      parentNode: "appclient-group",
      extent: "parent",
    },
    {
      id: "appclient-2",
      type: "singleNode",
      data: {
        label: "Appclient 2",
        nodeType: "app-client",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 70, y: 274 },
      parentNode: "appclient-group",
      extent: "parent",
    },
    {
      id: "appclient-3",
      type: "singleNode",
      data: {
        label: "Appclient 3",
        nodeType: "app-client",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 70, y: 474 },
      parentNode: "appclient-group",
      extent: "parent",
    },
    {
      id: "appclient-4",
      type: "singleNode",
      data: {
        label: "Appclient 4",
        nodeType: "app-client",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 70, y: 674 },
      parentNode: "appclient-group",
      extent: "parent",
    },
  
    // Side chain
    {
      id: "sidechain-group",
      type: "groupNode",
      data: {
        label: "Sidechain",
        nodeType:"side-chain",
        size: {width: 300, height: 900},
        ip: "10.10.10.255",
        port: "8101",
        handle: {
          source: [{id: "source-1", position: "left"}, {id: "source-2", position: "bottom"}]
        }
      },
      position: { x: 1343, y: 215 },
    },
    {
      id: "sidechain-1",
      type: "singleNode",
      data: {
        label: "Sidechain 1",
        nodeType: "side-chain",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 70, y: 74 },
      parentNode: "sidechain-group",
      extent: "parent",
    },
    {
      id: "sidechain-2",
      type: "singleNode",
      data: {
        label: "Sidechain 2",
        nodeType: "side-chain",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 70, y: 274 },
      parentNode: "sidechain-group",
      extent: "parent",
    },
    {
      id: "sidechain-3",
      type: "singleNode",
      data: {
        label: "Sidechain 3",
        nodeType: "side-chain",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 70, y: 474 },
      parentNode: "sidechain-group",
      extent: "parent",
    },
    {
      id: "sidechain-4",
      type: "singleNode",
      data: {
        label: "Sidechain 4",
        nodeType: "side-chain",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 70, y: 674 },
      parentNode: "sidechain-group",
      extent: "parent",
    },
  
    // account state
    {
      id: "account-state-group",
      type: "groupNode",
      data: {
        label: "Account state",
        nodeType: "account-state",
        size: {width: 500, height: 1400},
        ip: "10.10.10.255",
        port: "8101",
        handle: {
          source: [{id: "source", position: "right"}],
          target: [{id: "target", position: "left"}]
        }
      },
      position: { x: 2083, y: -15 },
    },
    {
      id: "account-state-group-a",
      type: "groupNode",
      data: {
        label: "",
        nodeType: "account-state",
        size: {width: 400, height: 600},
      },
      position: { x: 50, y: 62 },
      parentNode: "account-state-group",
      extent: "parent"
    },
    {
      id: "account-state-group-b",
      type: "groupNode",
      data: {
        label: "",
        nodeType: "account-state",
        size: {width: 400, height: 600},
      },
      position: { x: 50, y: 685 },
      parentNode: "account-state-group",
      extent: "parent"
    },
    {
      id: "account-state-1",
      type: "singleNode",
      data: {
        label: "Account state 1",
        nodeType: "account-state",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 200, y: 20 },
      parentNode: "account-state-group-a",
      extent: "parent",
    },
    {
      id: "account-state-2",
      type: "singleNode",
      data: {
        label: "Account state 2",
        nodeType: "account-state",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 200 },
      parentNode: "account-state-group-a",
      extent: "parent",
    },
    {
      id: "account-state-3",
      type: "singleNode",
      data: {
        label: "Account state 3",
        nodeType: "account-state",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 200, y: 380 },
      parentNode: "account-state-group-a",
      extent: "parent",
    },
  
    {
      id: "account-state-4",
      type: "singleNode",
      data: {
        label: "Account state 4",
        nodeType: "account-state",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 200, y: 20 },
      parentNode: "account-state-group-b",
      extent: "parent",
    },
    {
      id: "account-state-5",
      type: "singleNode",
      data: {
        label: "Account state 5",
        nodeType: "account-state",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 200 },
      parentNode: "account-state-group-b",
      extent: "parent",
    },
    {
      id: "account-state-6",
      type: "singleNode",
      data: {
        label: "Account state 6",
        nodeType: "account-state",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 200, y: 380 },
      parentNode: "account-state-group-b",
      extent: "parent",
    },
  
    // Tx manager
    {
      id: "txmanager-group",
      type: "groupNode",
      data: {
        label: "Txmanager",
        nodeType: "tx-manager",
        size: {width: 300, height: 900},
        ip: "10.10.10.255",
        port: "8101",
        handle: {
          source: [{id: "source-1", position: "left", style: {top: 50}}, {id: "source-2", position: "right"}],
          target: [{id: "target", position: "left"}]
        }
      },
      position: { x: 2900, y: -150 },
    },
    {
      id: "txmanager-1",
      type: "singleNode",
      data: {
        label: "Txmanager 1",
        nodeType: "tx-manager",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 70, y: 74 },
      parentNode: "txmanager-group",
      extent: "parent",
    },
    {
      id: "txmanager-2",
      type: "singleNode",
      data: {
        label: "Txmanager 2",
        nodeType: "tx-manager",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 70, y: 274 },
      parentNode: "txmanager-group",
      extent: "parent",
    },
    {
      id: "txmanager-3",
      type: "singleNode",
      data: {
        label: "Txmanager 3",
        nodeType: "tx-manager",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 70, y: 474 },
      parentNode: "txmanager-group",
      extent: "parent",
    },
    {
      id: "txmanager-4",
      type: "singleNode",
      data: {
        label: "Txmanager 4",
        nodeType: "tx-manager",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 70, y: 674 },
      parentNode: "txmanager-group",
      extent: "parent",
    },
  
    // Wallet
    {
      id: "wallet-group",
      type: "groupNode",
      data: {
        label: "wallet",
        nodeType: "wallet",
        size: {width: 300, height: 600},
        ip: "10.10.10.255",
        port: "8101",
        handle: {
          source: [{id: "source-1", position: "top"}, {id: "source-2", position: "right", style: {top: 50}}],
          target: [{id: "target-1", position: "left"}, {id: "target-2", position: "right"}]
        }
      },
      position: { x: 3480, y: 0 },
    },
    {
      id: "wallet-1",
      type: "singleNode",
      data: {
        label: "Wallet 1",
        nodeType: "wallet",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 70, y: 74 },
      parentNode: "wallet-group",
      extent: "parent",
    },
    {
      id: "wallet-2",
      type: "singleNode",
      data: {
        label: "Wallet 2",
        nodeType: "wallet",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 70, y: 274 },
      parentNode: "wallet-group",
      extent: "parent",
    },
  
    // Gstate
    {
      id: "gstate-group",
      type: "groupNode",
      data: {
        label: "gstate",
        nodeType: "gstate",
        size: {width: 300, height: 800},
        ip: "10.10.10.255",
        port: "8101",
        handle: {
          source: [{id: "source-1", position: "top"}, {id: "source-2", position: "bottom"}],
          target: [{id: "target", position: "left"}]
        }
      },
      position: { x: 4030, y: -500 },
    },
    {
      id: "gstate-1",
      type: "singleNode",
      data: {
        label: "Gstate 1",
        nodeType: "gstate",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 70, y: 74 },
      parentNode: "gstate-group",
      extent: "parent",
    },
    {
      id: "gstate-2",
      type: "singleNode",
      data: {
        label: "Gstate 2",
        nodeType: "gstate",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 70, y: 274 },
      parentNode: "gstate-group",
      extent: "parent",
    },
    {
      id: "gstate-3",
      type: "singleNode",
      data: {
        label: "Gstate 3",
        nodeType: "gstate",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 70, y: 474 },
      parentNode: "gstate-group",
      extent: "parent",
    },
  
    // Finalize
    {
      id: "finalize-group",
      type: "groupNode",
      data: {
        label: "Finalize",
        nodeType: "finalize",
        size: {width: 300, height: 600},
        ip: "10.10.10.255",
        port: "8101", 
        handle: {
          source: [{id: "source", position: "left"}],
          target: [{id: "target-1", position: "top"}, {id: "target-2", position: "bottom"}]
        }
      },
      position: { x: 4030, y: 400 },
    },
    {
      id: "finalize-1",
      type: "singleNode",
      data: {
        label: "Finalize 1",
        nodeType: "finalize",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 70, y: 74 },
      parentNode: "finalize-group",
      extent: "parent",
    },
    {
      id: "finalize-2",
      type: "singleNode",
      data: {
        label: "Finalize 2",
        nodeType: "finalize",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 70, y: 274 },
      parentNode: "finalize-group",
      extent: "parent",
    },
  
    // Fabric
    {
      id: "fabric-group",
      type: "groupNode",
      data: {
        label: "Fabric",
        nodeType: "fabric",
        size: {width: 1800, height: 4100},
        ip: "10.10.10.255",
        port: "8101",
        handle: {
          target: [{id: "target", position: "bottom"}]
        }
      },
      position: { x: 1260, y: -5200 },
    },
    // 1-a
    {
      id: "shard-group-1-a",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 200, y: 100 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-1-a",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-1-a",
      extent: "parent",
    },
    {
      id: "peer-1-a",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-1-a",
      extent: "parent",
    },
    {
      id: "chaincode-1-1-a",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-1-a",
      extent: "parent",
    },
    {
      id: "chaincode-2-1-a",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-1-a",
      extent: "parent",
    },
    // 1-b
    {
      id: "shard-group-1-b",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 700, y: 100 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-1-b",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-1-b",
      extent: "parent",
    },
    {
      id: "peer-1-b",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-1-b",
      extent: "parent",
    },
    {
      id: "chaincode-1-1-b",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-1-b",
      extent: "parent",
    },
    {
      id: "chaincode-2-1-b",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-1-b",
      extent: "parent",
    },
    // 1-c
    {
      id: "shard-group-1-c",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 1200, y: 100 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-1-c",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-1-c",
      extent: "parent",
    },
    {
      id: "peer-1-c",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-1-c",
      extent: "parent",
    },
    {
      id: "chaincode-1-1-c",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-1-c",
      extent: "parent",
    },
    {
      id: "chaincode-2-1-c",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-1-c",
      extent: "parent",
    },
  
    // 2-a
    {
      id: "shard-group-2-a",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 200, y: 600 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-2-a",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-2-a",
      extent: "parent",
    },
    {
      id: "peer-2-a",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-2-a",
      extent: "parent",
    },
    {
      id: "chaincode-1-2-a",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-2-a",
      extent: "parent",
    },
    {
      id: "chaincode-2-2-a",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-2-a",
      extent: "parent",
    },
    // 2-b
    {
      id: "shard-group-2-b",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 700, y: 600 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-2-b",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-2-b",
      extent: "parent",
    },
    {
      id: "peer-2-b",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-2-b",
      extent: "parent",
    },
    {
      id: "chaincode-1-2-b",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-2-b",
      extent: "parent",
    },
    {
      id: "chaincode-2-2-b",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-2-b",
      extent: "parent",
    },
    // 2-c
    {
      id: "shard-group-2-c",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 1200, y: 600 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-2-c",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-2-c",
      extent: "parent",
    },
    {
      id: "peer-2-c",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-2-c",
      extent: "parent",
    },
    {
      id: "chaincode-1-2-c",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-2-c",
      extent: "parent",
    },
    {
      id: "chaincode-2-2-c",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-2-c",
      extent: "parent",
    },
  
    // 3-a
    {
      id: "shard-group-3-a",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 200, y: 1100 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-3-a",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-3-a",
      extent: "parent",
    },
    {
      id: "peer-3-a",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-3-a",
      extent: "parent",
    },
    {
      id: "chaincode-1-3-a",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-3-a",
      extent: "parent",
    },
    {
      id: "chaincode-2-3-a",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-3-a",
      extent: "parent",
    },
    // 3-b
    {
      id: "shard-group-3-b",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 700, y: 1100 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-3-b",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-3-b",
      extent: "parent",
    },
    {
      id: "peer-3-b",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-3-b",
      extent: "parent",
    },
    {
      id: "chaincode-1-3-b",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-3-b",
      extent: "parent",
    },
    {
      id: "chaincode-2-3-b",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-3-b",
      extent: "parent",
    },
    // 3-c
    {
      id: "shard-group-3-c",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 1200, y: 1100 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-3-c",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-3-c",
      extent: "parent",
    },
    {
      id: "peer-3-c",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-3-c",
      extent: "parent",
    },
    {
      id: "chaincode-1-3-c",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-3-c",
      extent: "parent",
    },
    {
      id: "chaincode-2-3-c",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-3-c",
      extent: "parent",
    },
  
    // 4-a
    {
      id: "shard-group-4-a",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 200, y: 1600 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-4-a",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-4-a",
      extent: "parent",
    },
    {
      id: "peer-4-a",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-4-a",
      extent: "parent",
    },
    {
      id: "chaincode-1-4-a",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-4-a",
      extent: "parent",
    },
    {
      id: "chaincode-2-4-a",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-4-a",
      extent: "parent",
    },
    // 4-b
    {
      id: "shard-group-4-b",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 700, y: 1600 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-4-b",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-4-b",
      extent: "parent",
    },
    {
      id: "peer-4-b",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-4-b",
      extent: "parent",
    },
    {
      id: "chaincode-1-4-b",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-4-b",
      extent: "parent",
    },
    {
      id: "chaincode-2-4-b",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-4-b",
      extent: "parent",
    },
    // 4-c
    {
      id: "shard-group-4-c",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 1200, y: 1600 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-4-c",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-4-c",
      extent: "parent",
    },
    {
      id: "peer-4-c",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-4-c",
      extent: "parent",
    },
    {
      id: "chaincode-1-4-c",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-4-c",
      extent: "parent",
    },
    {
      id: "chaincode-2-4-c",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-4-c",
      extent: "parent",
    },
  
    // 5-a
    {
      id: "shard-group-5-a",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 200, y: 2100 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-5-a",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-5-a",
      extent: "parent",
    },
    {
      id: "peer-5-a",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-5-a",
      extent: "parent",
    },
    {
      id: "chaincode-1-5-a",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-5-a",
      extent: "parent",
    },
    {
      id: "chaincode-2-5-a",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-5-a",
      extent: "parent",
    },
    // 5-b
    {
      id: "shard-group-5-b",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 700, y: 2100 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-5-b",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-5-b",
      extent: "parent",
    },
    {
      id: "peer-5-b",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-5-b",
      extent: "parent",
    },
    {
      id: "chaincode-1-5-b",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-5-b",
      extent: "parent",
    },
    {
      id: "chaincode-2-5-b",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-5-b",
      extent: "parent",
    },
    // 5-c
    {
      id: "shard-group-5-c",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 1200, y: 2100 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-5-c",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-5-c",
      extent: "parent",
    },
    {
      id: "peer-5-c",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-5-c",
      extent: "parent",
    },
    {
      id: "chaincode-1-5-c",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-5-c",
      extent: "parent",
    },
    {
      id: "chaincode-2-5-c",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-5-c",
      extent: "parent",
    },
  
    // 6-a
    {
      id: "shard-group-6-a",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 200, y: 2600 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-6-a",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-6-a",
      extent: "parent",
    },
    {
      id: "peer-6-a",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-6-a",
      extent: "parent",
    },
    {
      id: "chaincode-1-6-a",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-6-a",
      extent: "parent",
    },
    {
      id: "chaincode-2-6-a",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-6-a",
      extent: "parent",
    },
    // 6-b
    {
      id: "shard-group-6-b",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 700, y: 2600 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-6-b",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-6-b",
      extent: "parent",
    },
    {
      id: "peer-6-b",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-6-b",
      extent: "parent",
    },
    {
      id: "chaincode-1-6-b",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-6-b",
      extent: "parent",
    },
    {
      id: "chaincode-2-6-b",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-6-b",
      extent: "parent",
    },
    // 6-c
    {
      id: "shard-group-6-c",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 1200, y: 2600 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-6-c",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-6-c",
      extent: "parent",
    },
    {
      id: "peer-6-c",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-6-c",
      extent: "parent",
    },
    {
      id: "chaincode-1-6-c",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-6-c",
      extent: "parent",
    },
    {
      id: "chaincode-2-6-c",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-6-c",
      extent: "parent",
    },
  
    // 7-a
    {
      id: "shard-group-7-a",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 200, y: 3100 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-7-a",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-7-a",
      extent: "parent",
    },
    {
      id: "peer-7-a",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-7-a",
      extent: "parent",
    },
    {
      id: "chaincode-1-7-a",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-7-a",
      extent: "parent",
    },
    {
      id: "chaincode-2-7-a",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-7-a",
      extent: "parent",
    },
    // 7-b
    {
      id: "shard-group-7-b",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 700, y: 3100 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-7-b",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-7-b",
      extent: "parent",
    },
    {
      id: "peer-7-b",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-7-b",
      extent: "parent",
    },
    {
      id: "chaincode-1-7-b",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-7-b",
      extent: "parent",
    },
    {
      id: "chaincode-2-7-b",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-7-b",
      extent: "parent",
    },
    // 7-c
    {
      id: "shard-group-7-c",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 1200, y: 3100 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-7-c",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-7-c",
      extent: "parent",
    },
    {
      id: "peer-7-c",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-7-c",
      extent: "parent",
    },
    {
      id: "chaincode-1-7-c",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-7-c",
      extent: "parent",
    },
    {
      id: "chaincode-2-7-c",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-7-c",
      extent: "parent",
    },
  
    // 8-a
    {
      id: "shard-group-8-a",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 200, y: 3600 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-8-a",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-8-a",
      extent: "parent",
    },
    {
      id: "peer-8-a",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-8-a",
      extent: "parent",
    },
    {
      id: "chaincode-1-8-a",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-8-a",
      extent: "parent",
    },
    {
      id: "chaincode-2-8-a",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-8-a",
      extent: "parent",
    },
    // 8-b
    {
      id: "shard-group-8-b",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 700, y: 3600 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-8-b",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-8-b",
      extent: "parent",
    },
    {
      id: "peer-8-b",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-8-b",
      extent: "parent",
    },
    {
      id: "chaincode-1-8-b",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-8-b",
      extent: "parent",
    },
    {
      id: "chaincode-2-8-b",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-8-b",
      extent: "parent",
    },
    // 8-c
    {
      id: "shard-group-8-c",
      type: "groupNode",
      data: {
        label: "Fabric",
        size: {width: 450, height: 450},
        ip: "10.10.10.255",
        port: "8101"
      },
      position: { x: 1200, y: 3600 },
      parentNode: "fabric-group",
      extent: "parent"
    },
    {
      id: "oderer-8-c",
      type: "singleNode",
      data: {
        label: "Orderer",
        nodeType: "orderer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 70 },
      parentNode: "shard-group-8-c",
      extent: "parent",
    },
    {
      id: "peer-8-c",
      type: "singleNode",
      data: {
        label: "Peer",
        nodeType: "peer",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 70 },
      parentNode: "shard-group-8-c",
      extent: "parent",
    },
    {
      id: "chaincode-1-8-c",
      type: "singleNode",
      data: {
        label: "Chaincode 1",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 20, y: 270 },
      parentNode: "shard-group-8-c",
      extent: "parent",
    },
    {
      id: "chaincode-2-8-c",
      type: "singleNode",
      data: {
        label: "Chaincode 2",
        nodeType: "chaincode",
        ip: "10.20.34.182",
        port: "8000",
      },
      position: { x: 250, y: 270 },
      parentNode: "shard-group-8-c",
      extent: "parent",
    }
  ];