import { Divider, Space } from "antd";
import "./App.css";
import DownloadPDF from "./components/pdf_helper/auto_table/DownloadPDF";
import {
  PRODUCE_PRODUCT_COLUMNS,
  TABLE_DATA,
} from "./components/pdf_helper/auto_table/constant";
import EditingPDF from "./components/pdf_helper/editing/EditingPDF";
import PDFViewer from "./components/pdf_helper/modifying/PDFViewer";
import CustomPDFView from "./components/pdf_helper/modifying_2/CustomPDFView";
import DemoSign from "./DemoSign";

function App() {
  const demoTableColumns = PRODUCE_PRODUCT_COLUMNS;
  const demoTableData = TABLE_DATA;

  return (
    <>
      <h1>Download pdf table</h1>
      <Space>
        <DownloadPDF
          tableColumns={demoTableColumns}
          tableData={demoTableData}
        />
        <EditingPDF />
      </Space>
      <Divider />
      <h1>Sign pdf</h1>
      <DemoSign />
    </>
  );
}

export default App;
