import { Handle } from "reactflow";
import "./single-node.scss";
import classNames from "classnames";

export type SingleNodeType =
  | "nginx"
  | "api"
  | "app-client"
  | "sidechain"
  | "account-state"
  | "tx-manager"
  | "wallet"
  | "gstate"
  | "finalize"
  | "orderer"
  | "chaincode"
  | "peer";
export type GroupNodeType =
  | "unknown"
  | "app-client"
  | "sidechain"
  | "account-state"
  | "tx-manager"
  | "wallet"
  | "gstate"
  | "finalize"
  | "fabric";
export type PositionType = "top" | "right" | "bottom" | "left"
const SingleNode = (props: any) => {
  const { id, data, xPos, yPos } = props;
  if (id.startsWith("api")) {
    console.log(">> check: ", id + "-" + "target")
  }
  let source, target: any
  if (data.handle) {
    source = data.handle.source
    target = data.handle.target
  }
  const nodeCls = classNames("single-node", {
    [`single-node--${data.nodeType}`]: true,
  });

  return (
    <div className={nodeCls}>
      <div className="single-node__label">{data.label}</div>
      <div className="single-node__info">
        {data.ip && (
          <div className="info-row">
            <span className="info-row__label">IP </span>
            <span className="info-row__value">{data.ip}</span>
          </div>
        )}
        {data.port && (
          <div className="info-row">
            <span className="info-row__label">Port </span>
            <span className="info-row__value">{data.port}</span>
          </div>
        )}
        {/* <div>
          <span>x: {xPos.toFixed(0)}</span>
          <br />
          <span>y: {yPos.toFixed(0)}</span>
        </div> */}
      </div>
      {
        source && Array.isArray(source) && source.length > 0 && 
        <>
          {source.map((item, index) => (
            <Handle key={index} id={`${id}-${item.id}`} type="source" position={item.position} style={item.style || null} />
          ))}
          
        </>
      }
      {
        target && Array.isArray(target) && target.length > 0 && 
        <>
          {target.map((item, index) => (
            <Handle key={index} id={`${id}-${item.id}`} type="target" position={item.position} style={item.style || null} />
          ))}
          
        </>
      }
    </div>
  );
};

export default SingleNode;
