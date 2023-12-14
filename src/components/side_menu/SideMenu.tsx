import React from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("PDF", "1", <PieChartOutlined />),
  getItem("Admin tool UI", "2", <DesktopOutlined />),

  getItem("Views", "view", <MailOutlined />, [
    getItem("Table", "v1"),
    getItem("List", "v2"),
    getItem("Collapse", "v3"),
    getItem("Card", "v4"),
  ]),

  // getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
  //   getItem("Option 9", "9"),
  //   getItem("Option 10", "10"),

  //   getItem("Submenu", "sub3", null, [
  //     getItem("Option 11", "11"),
  //     getItem("Option 12", "12"),
  //   ]),
  // ]),
];

const URLs = new Map([
  ["1", "/pdf"],
  ["2", "/admin-tool"],
  ["v1", "/table-view"],
  ["v2", "/list-view"],
  ["v3", "/collapse-view"],
  ["v4", "/card-view"]
])

const SideMenu: React.FC = () => {
  const navigate = useNavigate()
  
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    navigate(URLs.get(e.key) ?? "/")
  };
  return (
    <div style={{ width: "auto" }}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        items={items}
        onClick={handleMenuClick}
      />
    </div>
  );
};

export default SideMenu;
