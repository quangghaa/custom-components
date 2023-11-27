import { Button, Modal, Space, Upload, message } from "antd";
import { useState } from "react";
import { RcFile, UploadProps } from "antd/es/upload";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from 'antd/es/upload/interface';
import CustomPDFView from "./CustomPDFView";
import "./style.scss"

const Signing = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [signModal, setSignModal] = useState(false);

  const props: UploadProps = {
    fileList,
    beforeUpload: (file: RcFile) => {
      const isPDF = file.type === "application/pdf";
      if (!isPDF) {
        message.error("Only support PDF file");
      } else {
        setFileList([file]);
      }
      return false; // Prevent default upload behavior
    },
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        setFileList(fileList)
      }
    },
  };
  return (
    <div className="signing">
      <Space direction="vertical">
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Upload PDF</Button>
      </Upload>
      <Button disabled={fileList.length === 0} type="primary" onClick={() => setSignModal(true)}>
        Sign PDF
      </Button>
      </Space>
      <Modal
        centered
        open={signModal}
        onOk={() => setSignModal(false)}
        onCancel={() => setSignModal(false)}
        footer={null}
        width={"auto"}
        className="pdf-view-modal"
        closeIcon={false}
      >
        <CustomPDFView uploadedFile={fileList} />
      </Modal>
    </div>
  );
};
export default Signing;
