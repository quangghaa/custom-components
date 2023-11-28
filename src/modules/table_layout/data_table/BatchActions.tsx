import { Button, Space } from "antd";

interface Props {
    selectedRowKeys: React.Key[]
}
const BatchActions: React.FC<Props> = (props) => {
    const {selectedRowKeys} = props
  return (
    <div className="batch-actions">
      <Space>
        <Button disabled={selectedRowKeys.length === 0}>Duplicate</Button>
        <Button danger disabled={selectedRowKeys.length === 0}>
          Delete
        </Button>
      </Space>
    </div>
  );
};
export default BatchActions
