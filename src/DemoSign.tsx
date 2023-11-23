import { Button, Modal, Space, Upload, message } from "antd";
import CustomPDFView from "./components/pdf_helper/modifying_2/CustomPDFView";
import { useState } from "react";
import { RcFile, UploadProps } from "antd/es/upload";
import { UploadOutlined } from "@ant-design/icons";

const DemoSign = () => {
  const [fileList, setFileList] = useState<RcFile[]>([]);
  const [signModal, setSignModal] = useState(false);

  const props: UploadProps = {
    fileList,
    beforeUpload: (file: RcFile) => {
      const isPDF = file.type === "application/pdf";
      if (!isPDF) {
        message.error("You can only upload PDF files!");
      } else {
        setFileList([file]);
      }
      return false; // Prevent default upload behavior
    },
  };
  return (
    <div className="demo-sign">
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
        <CustomPDFView pdfFile={fileList} />
      </Modal>
    </div>
  );
};
export default DemoSign;
