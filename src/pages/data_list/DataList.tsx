import VirtualList from "rc-virtual-list";
import { Avatar, List, Select, Space, message } from "antd";
import { useEffect, useState } from "react";
import "./data-list.scss";
import { UserItem } from "./types";
import { ContainerHeight, fakeDataUrl } from "./constant";
import { spaceChildren } from "antd/es/button";
import Header from "./Header";
import classNames from "classnames";
import { CloseOutlined, DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons";

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

const SelectedItemBar = (props: any) => {
  const {setSelectedId} = props
  const handleClearItem = () => {
    setSelectedId && setSelectedId(-1)
  }
  return (
    <div className="selected-item-bar">
      <div className="button-wrapper">
        <div className="icon-button" role="button" onClick={handleClearItem}>
        <CloseOutlined />
        </div>
      </div>
      <div className="label">
        1 item selected
      </div>
      <div className="button-wrapper">
        <div className="icon-button" role="button">
        <EditOutlined />
        </div>
      </div>
      <div className="button-wrapper">
        <div className="icon-button" role="button">
        <DeleteOutlined />
        </div>
      </div>
      <div className="button-wrapper">
        <div className="icon-button" role="button">
        <MoreOutlined />
        </div>
      </div>
    </div>
  )
}

const DataList = () => {
  const [data, setData] = useState<UserItem[]>([]);
  const [selectedId, setSelectedId] = useState(-1)

  const generateId = (currentData: any, newData: any) => {
    const index = currentData.length ?? 0 
    const newDataWithId = newData.map((item: any, i: number) => {
      return {...item, id: index + i+1}
    })
    return currentData.concat(newDataWithId)
  }
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        
        setData(generateId(data, body.results))
        // setData(data.concat(body.results));
        // message.success(`${body.results.length} more items loaded!`);
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

  const handleSelectItem = (item: any) => {
    setSelectedId(item.id)
  }

  return (
    <>
      <Header />
      <div className="data-list">
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
        {selectedId !== -1 && <SelectedItemBar setSelectedId={setSelectedId} />}
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
                onClick={() => handleSelectItem(item)}
                className={classNames({highlight: item.id === selectedId})}
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
