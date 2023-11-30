import { MarkerType } from "reactflow";

export const initialEdges = [
    { id: "e-u-1", source: "nginx-1", target: "api-1", animated: false, targetHandle: "api-1-target", markerEnd: {type: MarkerType.Arrow} },
    { id: "e-u-2", source: "nginx-1", target: "api-2", animated: false, markerEnd: {type: MarkerType.Arrow} },
    { id: "e-u-3", source: "nginx-2", target: "api-1", animated: false, markerEnd: {type: MarkerType.Arrow} },
    { id: "e-u-4", source: "nginx-2", target: "api-2", animated: false, markerEnd: {type: MarkerType.Arrow} },

    { id: "e-app-1", source: "appclient-group", target: "unknown-group", targetHandle: "unknown-group-target-2", animated: false, markerEnd: {type: MarkerType.Arrow} },
    { id: "e-app-2", source: "appclient-group", target: "fabric-group", sourceHandle: "appclient-group-source-2", targetHandle: "unknown-group-target", animated: false, markerEnd: {type: MarkerType.Arrow} },

    { id: "e-s-1", source: "sidechain-group", target: "unknown-group", targetHandle: "unknown-group-target-2", animated: false, markerEnd: {type: MarkerType.Arrow} },
    { id: "e-s-2", source: "sidechain-group", target: "finalize-group", sourceHandle: "sidechain-group-source-2", targetHandle: "finalize-group-target-2", animated: false, markerEnd: {type: MarkerType.Arrow} },
  
    { id: "e-acc-1", source: "account-state-group", target: "txmanager-group", targetHandle: "txmanager-group-target", animated: false, markerEnd: {type: MarkerType.Arrow} },
 
    { id: "e-t-1", source: "txmanager-group", target: "appclient-group", sourceHandle: "txmanager-group-source-1", targetHandle: "appclient-group-target", animated: false, markerEnd: {type: MarkerType.Arrow} },
    { id: "e-t-2", source: "txmanager-group", target: "wallet-group", sourceHandle: "txmanager-group-source-2", targetHandle: "wallet-group-target-1", animated: false, markerEnd: {type: MarkerType.Arrow} },
  
    { id: "e-w-1", source: "wallet-group", target: "gstate-group", sourceHandle: "wallet-group-source-1", targetHandle: "gstate-group-target", animated: false, markerEnd: {type: MarkerType.Arrow} },
    { id: "e-w-2", source: "wallet-group", target: "finalize-group", sourceHandle: "wallet-group-source-2", targetHandle: "finalize-group-target-1", animated: false, markerEnd: {type: MarkerType.Arrow} },
  
    { id: "e-g-1", source: "gstate-group", target: "fabric-group", sourceHandle: "gstate-group-source-1", targetHandle: "fabric-group-target", animated: false, markerEnd: {type: MarkerType.Arrow} },
    { id: "e-g-2", source: "gstate-group", target: "finalize-group", sourceHandle: "gstate-group-source-2", targetHandle: "finalize-group-target-1", animated: false, markerEnd: {type: MarkerType.Arrow} },
  
    { id: "e-f-1", source: "finalize-group", target: "wallet-group", sourceHandle: "finalize-group-source", targetHandle: "wallet-group-target-2", animated: false, markerEnd: {type: MarkerType.Arrow} },
    { id: "e-f-1", source: "finalize-group", target: "txmanager-group", sourceHandle: "finalize-group-source", targetHandle: "txmanager-group-target", animated: false, markerEnd: {type: MarkerType.Arrow} },
    { id: "e-f-2", source: "finalize-group", target: "account-state-group", sourceHandle: "finalize-group-source", targetHandle: "account-state-group-target", animated: false, markerEnd: {type: MarkerType.Arrow} },
  ];