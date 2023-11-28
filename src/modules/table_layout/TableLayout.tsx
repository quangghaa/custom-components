import React, { useState } from "react";
import {
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Dropdown,
  Input,
  Layout,
  Row,
  Statistic,
} from "antd";
import SideMenu from "./SideMenu";
import "./table_layout_style.scss";
import logo from "../../assets/logo3.webp";
import CountUp from 'react-countup';
import DataTable from "./data_table/DataTable";

const { Header, Content, Sider } = Layout;

const Search = () => {
  const { Search } = Input;
  const onSearch = () => {
    console.log(">>");
  };
  return (
    <div className="search">
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        style={{ maxWidth: "300px", minWidth: "200px" }}
      />
    </div>
  );
};

const Notification = () => {
  const items: MenuProps["items"] = [
    {
      label: <span>Noti 1</span>,
      key: "1",
    },
    {
      label: <span>Noti 2</span>,
      key: "2",
    },
  ];
  const handleNotification = () => {
    console.log(">>");
  };

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <div className="notification" onClick={handleNotification}>
        <BellOutlined style={{ fontSize: "18px" }} />
      </div>
    </Dropdown>
  );
};

const User = () => {
  const items: MenuProps["items"] = [
    {
      label: <span>Account</span>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <span style={{ color: "red" }}>Logout</span>,
      key: "2",
    },
  ];
  const [loggedIn, setLoggedIn] = useState(true);
  const handleNotification = () => {
    console.log(">>");
  };

  return (
    <div className="user">
      {!loggedIn ? (
        <Button type="text" className="login">
          Login
        </Button>
      ) : (
        <Dropdown menu={{ items }} trigger={["click"]}>
          <div className="logged-in" onClick={handleNotification}>
            <span>Hi, Adam</span>
            <UserOutlined style={{ fontSize: "18px" }} />
          </div>
        </Dropdown>
      )}
    </div>
  );
};
const BreadCrumb = () => {
  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};
const GeneralView = () => {
  const formatter = (value: any) => <CountUp end={value} separator="," />;
  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
          <Statistic
            title="Active Users"
            value={112893}
            formatter={formatter}
          />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
          <Statistic
            title="Account Balance (CNY)"
            value={112893}
            precision={2}
            formatter={formatter}
          />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
          <Statistic
            title="Others"
            value={112893}
            precision={2}
            formatter={formatter}
          />
          </Card>
        </Col>
      </Row>
    </>
  );
};

const TableLayout: React.FC = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <img src={logo} alt="logo" width="176px" height={"48px"} />
        </div>
        <Search />
        <Notification />
        <User />
      </Header>
      <Layout>
        <Sider width={200}>
          <SideMenu />
        </Sider>
        <Layout style={{ padding: "0 24px 24px", minHeight: "calc(100vh - 64px)", overflow: "auto" }}>
          <BreadCrumb />
          {/* <GeneralView /> */}
          <Content
            style={{
              margin: 0,
              minHeight: 280,
            }}
          >
            <DataTable />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default TableLayout;
