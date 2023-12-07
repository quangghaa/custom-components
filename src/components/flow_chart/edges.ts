import { MarkerType } from "reactflow";

export const initialEdges = [
    { id: "e-u-1", type: 'normalEdge', source: "nginx-1", target: "api-1", animated: false, targetHandle: "api-1-target", markerEnd: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: "green"}, style: {strokeWidth: 2} },
    { id: "e-u-2", type: 'normalEdge', source: "nginx-1", target: "api-2", animated: false, markerEnd: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: "green"}, style: {strokeWidth: 2} },
    { id: "e-u-3", type: 'normalEdge', source: "nginx-2", target: "api-1", animated: false, markerEnd: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: "green"}, style: {strokeWidth: 2} },
    { id: "e-u-4", type: 'normalEdge', source: "nginx-2", target: "api-2", animated: false, markerEnd: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: "green"}, style: {strokeWidth: 2} },

    { id: "e-app-1", type: 'normalEdge', source: "appclient-group", target: "unknown-group", targetHandle: "unknown-group-target-2", animated: false, markerEnd: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: "green"}, style: {strokeWidth: 2} },
    { id: "e-app-2", type: 'normalEdge', source: "appclient-group", target: "fabric-group", sourceHandle: "appclient-group-source-2", targetHandle: "unknown-group-target", animated: false, markerEnd: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: "green"}, style: {strokeWidth: 2} },

    { id: "e-s-1", type: 'normalEdge', source: "sidechain-group", target: "unknown-group", targetHandle: "unknown-group-target-2", animated: false, markerEnd: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: "green"}, style: {strokeWidth: 2} },
    { id: "e-s-2", type: 'normalEdge', source: "sidechain-group", target: "finalize-group", sourceHandle: "sidechain-group-source-2", targetHandle: "finalize-group-target-2", animated: false, markerEnd: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: "green"}, style: {strokeWidth: 2} },
  
    { id: "e-acc-1", type: 'normalEdge', source: "account-state-group", target: "txmanager-group", targetHandle: "txmanager-group-target", animated: false, markerEnd: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: "green"}, style: {strokeWidth: 2} },
 
    { id: "e-t-1", type: 'normalEdge', source: "txmanager-group", target: "appclient-group", sourceHandle: "txmanager-group-source-1", targetHandle: "appclient-group-target", animated: false, markerEnd: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: "green"}, style: {strokeWidth: 2} },
    { id: "e-t-2", type: 'normalEdge', source: "txmanager-group", target: "wallet-group", sourceHandle: "txmanager-group-source-2", targetHandle: "wallet-group-target-1", animated: false, markerEnd: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: "green"}, style: {strokeWidth: 2} },
  
    { id: "e-w-1", type: 'normalEdge', source: "wallet-group", target: "gstate-group", sourceHandle: "wallet-group-source-1", targetHandle: "gstate-group-target", animated: false, markerEnd: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: "green"}, style: {strokeWidth: 2} },
    { id: "e-w-2", type: 'normalEdge', source: "wallet-group", target: "finalize-group", sourceHandle: "wallet-group-source-2", targetHandle: "finalize-group-target-1", animated: false, markerEnd: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: "green"}, style: {strokeWidth: 2} },
  
    { id: "e-g-1", type: 'normalEdge', source: "gstate-group", target: "fabric-group", sourceHandle: "gstate-group-source-1", targetHandle: "fabric-group-target", animated: false, markerEnd: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: "green"}, style: {strokeWidth: 2} },
    { id: "e-g-2", type: 'normalEdge', source: "gstate-group", target: "finalize-group", sourceHandle: "gstate-group-source-2", targetHandle: "finalize-group-target-1", animated: false, markerEnd: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: "green"}, style: {strokeWidth: 2} },
  
    { id: "e-f-1", type: 'normalEdge', source: "finalize-group", target: "wallet-group", sourceHandle: "finalize-group-source", targetHandle: "wallet-group-target-2", animated: false, markerEnd: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: "green"}, style: {strokeWidth: 2} },
    { id: "e-f-2", type: 'normalEdge', source: "finalize-group", target: "txmanager-group", sourceHandle: "finalize-group-source", targetHandle: "txmanager-group-target", animated: false, markerEnd: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: "green"}, style: {strokeWidth: 2} },
    { id: "e-f-3", type: 'normalEdge', source: "finalize-group", target: "account-state-group", sourceHandle: "finalize-group-source", targetHandle: "account-state-group-target", animated: false, markerEnd: {type: MarkerType.ArrowClosed, width: 20, height: 20, color: "green"}, style: {strokeWidth: 2} },
  ];