import {
  Avatar,
  Collapse,
  CollapseProps,
  List,
  Select,
  Space,
  message,
} from "antd";
import "./data-collapse.scss";
import Header from "./Header";
import { data } from "./constant";
import { Customer, Subcontractor } from "./types";

const CollapseHead = () => {
  return (
    <div className="head">
      <div className="item-main">Company</div>
      <div className="item-small">Trade</div>
      <div className="item-medium">Total project workhours</div>
    </div>
  );
};

interface CollapseItemProps {
  item: Customer;
}
const CollapseItem: React.FC<CollapseItemProps> = (props) => {
  const { item } = props;
  return (
    <div className="collapse-item">
      <div className="item-main">
        <div className="circle"></div>
        &nbsp;
        {item.name}
      </div>
      <div className="item-small">{item.trade}</div>
      <div className="item-medium">{item.totalWorkhours}</div>
    </div>
  );
};

interface CollapseChildrenProps {
  childs: Subcontractor[];
}
const CollapseChildren: React.FC<CollapseChildrenProps> = (props) => {
  const { childs } = props;

  return (
    <div className="collapse-children">
      <div className="cl-head">Subcontractors</div>
      {childs.map((item, index) => (
        <div className="cl-item" key={index}>
          <div className="item-main">{item.name}</div>
          <div className="item-medium">{item.totalWorkhours}</div>
        </div>
      ))}
    </div>
  );
};

const DataCollapse = () => {
  const items: CollapseProps["items"] = data.map((item, index) => {
    return {
      key: "" + (index + 1),
      label: <CollapseItem item={item} />,
      children: <CollapseChildren childs={item.subcontractors} />,
    };
  });
  // const items: CollapseProps["items"] = [
  //   {
  //     key: "1",
  //     label: <CollapseItem />,
  //     children: <CollapseChildren />,
  //   },
  //   {
  //     key: "2",
  //     label: <CollapseItem />,
  //     children: <CollapseChildren />,
  //   },
  //   {
  //     key: "3",
  //     label: <CollapseItem />,
  //     children: <CollapseChildren />,
  //   },
  // ];
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Header />
      <div className="data-collapse">
        <div className="filter-bar">
          <div className="filter-bar__label">Filter</div>
          <div className="filter-bar__content">
            <Space wrap>
              <Select
                defaultValue="Gender"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "other", label: "Other" },
                ]}
              />
              <Select
                defaultValue="Age"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "18", label: "18" },
                  { value: "19", label: "19" },
                  { value: "20", label: "20" },
                  { value: "21", label: "21" },
                ]}
              />
              <Select
                defaultValue="Status"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "active", label: "Active" },
                  { value: "inactive", label: "Inactive" },
                  { value: "invisible", label: "Invisible" },
                ]}
              />
            </Space>
          </div>
        </div>
        <div className="collapse-bg">
          <CollapseHead />
          <Collapse items={items} bordered={false} defaultActiveKey={["1"]} />
        </div>
      </div>
    </>
  );
};
export default DataCollapse;
