import { useState } from "react";
import { BaseEdge, EdgeLabelRenderer, getSmoothStepPath } from "reactflow";

const edgeColors = new Map([
  ["nginx-1", "#9cbdb2"],
  ["nginx-2", "#9cbdb2"],
  ["appclient-group", "#cdaa8f"],
  ["sidechain-group", "#c7a3b4"],
  ["account-state-group", "#a8b4cc"],
  ["txmanager-group", "#c9a5c8"],
  ["wallet-group", "#c8a3b4"],
  ["gstate-group", "#a8cca5"],
  ["finalize-group", "#c6b090"]
])

export default function CustomEdge(props: any) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    data,
    label,
    markerEnd,
  } = props;
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const lineColor = edgeColors.get(props.source) ?? "green"

  return (
    <>
      <BaseEdge
        path={edgePath}
        markerEnd={`${markerEnd}`}
        style={{ stroke: lineColor, strokeWidth: 2}}
      />

      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            backgroundColor: "#EEF0F6",
            fill: "#EEF0F6",
            pointerEvents: "all",
            padding: "4px",
          }}
          className="nodrag nopan"
        >
          {label}
        </div>
      </EdgeLabelRenderer>

      <circle
        style={{ filter: `drop-shadow(3px 3px 5px ${lineColor}` }}
        r="4"
        fill={lineColor}
        className="circle"
      >
        <animateMotion dur="6s" repeatCount="indefinite" path={edgePath} />
      </circle>
    </>
  );
}
