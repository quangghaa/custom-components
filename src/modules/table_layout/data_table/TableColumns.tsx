import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { DataType } from "./types";
import classNames from "classnames";

const renderActionColumn = (hoveredRowId: string, record: any) => {
  const actionBarCls = classNames({
    "action-bar": true,
    "show-action-bar": record?.login?.uuid === hoveredRowId,
  });
  return (
    <div className={actionBarCls}>
      <Space>
        <button className="action-button">
          <EyeOutlined className="action-icon" />
        </button>
        <button className="action-button">
          <EditOutlined className="action-icon" />
        </button>
        <button className="action-button">
          <DeleteOutlined className="action-icon" />
        </button>

        {/* Add other actions as needed */}
      </Space>
    </div>
  );
};

export const buildColumns = (hoveredRowId: string) => {
  const columns: ColumnsType<DataType> = [
    {
      title: "No.",
      dataIndex: "#",
      width: 50,
      render: (_, __, index: any) => <span>{`${index + 1}.`}</span>,
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,
      render: (name) => `${name.first} ${name.last}`,
      width: "20%",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      filters: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
      ],
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      dataIndex: "#",
      render: (_, record) => renderActionColumn(hoveredRowId, record),
    },
  ];
  return columns;
};
