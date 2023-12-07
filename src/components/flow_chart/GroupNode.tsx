import { Handle } from "reactflow";
import "./group-node.scss";
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

const GroupNode = (props: any) => {
  const { id, data, xPos, yPos } = props;
  const {width, height} = data.size
  let source, target: any
  if (data.handle) {
    source = data.handle.source
    target = data.handle.target
  }
  const nodeCls = classNames("group-node", {
    [`group-node--${data.nodeType}`]: true,
  });
  
  return (
    <div className={nodeCls} style={{width: width, height: height}}>
      <div className="group-node__label">{data.label}</div>
      {data.ip && <div className="group-node__subtitle">{data.ip}</div>}
      {data.port && <div className="group-node__subtitle">{data.port}</div>}

      {/* <div>
        <span>x: {Number(xPos).toFixed(0)}</span>
        <br />
        <span>y: {yPos.toFixed(0)}</span>
      </div> */}
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

export default GroupNode;
