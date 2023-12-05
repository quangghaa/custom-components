import VirtualList from "rc-virtual-list";
import { Avatar, List, Select, Space, message } from "antd";
import { useEffect, useState } from "react";
import "./data-list.scss";
import { UserItem } from "./types";
import { ContainerHeight, fakeDataUrl } from "./constant";
import { spaceChildren } from "antd/es/button";
import Header from "./Header";

const ListHeader = () => {
  return (
    <>
      <div className="list-header">
        <div className="meta-item">User info</div>
        <div className="item">Gender</div>
        <div className="item">Age</div>
        <div className="actions-item"></div>
      </div>
    </>
  );
};

const DataList = () => {
  const [data, setData] = useState<UserItem[]>([]);

  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        message.success(`${body.results.length} more items loaded!`);
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    const height = e.currentTarget.scrollHeight - e.currentTarget.scrollTop;
    if (parseInt(height.toFixed(0)) === ContainerHeight) {
      appendData();
    }
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Header />
      <div style={{padding: "0 16px"}}>
        <div className="filter-bar">
          <div className="filter-bar__label">Loc</div>
          <div className="filter-bar__content">
            <Space wrap>
              <Select
                defaultValue="Gender"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
              <Select
                defaultValue="Age"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
              <Select
                defaultValue="Status"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </Space>
          </div>
        </div>
        <List header={<ListHeader />}>
          <VirtualList
            data={data}
            height={ContainerHeight}
            itemHeight={47}
            itemKey="email"
            onScroll={onScroll}
          >
            {(item: UserItem) => (
              <List.Item
                key={item.email}
                actions={[
                  <a key="list-edit">edit</a>,
                  <a key="list-more">more</a>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.picture.large} />}
                  title={<a href="https://ant.design">{item.name.last}</a>}
                  description={item.email}
                />
                <div className="item-info">Male</div>
                <div className="item-info">22</div>
              </List.Item>
            )}
          </VirtualList>
        </List>
      </div>
    </>
  );
};
export default DataList;
