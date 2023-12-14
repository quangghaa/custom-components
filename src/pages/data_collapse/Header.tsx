import { ExportOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { Button, Input, Select, Space } from "antd";

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
const ShowColumns = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Select
      defaultValue="all"
      style={{ width: 140 }}
      onChange={handleChange}
      options={[
        { value: "all", label: "Show columns" },
        { value: "name", label: "Name" },
        { value: "age", label: "Age" },
        { value: "email", label: "Email" },
      ]}
    />
  );
};

const Header = () => {
  return (
    <div className="data-table__header">
      <div className="table-name">
        Users
        <span className="total-records">
            <div className="dot"></div>
            40
        </span>
      </div>
      <Search />
      <div className="actions">
        <Space>
          <Button>
            <ExportOutlined /> Export
          </Button>
          {/* <ShowColumns /> */}
          <Button className="add">
            <span>
            <PlusSquareOutlined />
            </span>
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default Header;
