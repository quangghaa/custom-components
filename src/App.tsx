import { Divider, Space } from "antd";
import "./App.css";
import DownloadPDF from "./components/pdf_helper/auto_table/DownloadPDF";
import {
  PRODUCE_PRODUCT_COLUMNS,
  TABLE_DATA,
} from "./components/pdf_helper/auto_table/constant";
import EditingPDF from "./components/pdf_helper/editing_removed/EditingPDF";
import Signing from "./components/pdf_helper/signing/Signing";
import TableLayout from "./modules/table_layout/TableLayout";
import { useState } from "react";
import FlowChart from "./components/flow_chart/FlowChart";

type ExampleName = "pdf" | "table-layout" | "flow-chart";
function App() {
  const demoTableColumns = PRODUCE_PRODUCT_COLUMNS;
  const demoTableData = TABLE_DATA;

  const exampleName: ExampleName = "flow-chart"; // change me to see other examples

  const renderExample = (exampleName: ExampleName) => {
    switch (exampleName) {
      case "pdf":
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
            <Signing />
          </>
        );
      case "table-layout":
        return (
          <>
            <TableLayout />
          </>
        );
      case "flow-chart":
        return <>
          <FlowChart />
        </>;
    }
  };

  return <>{renderExample(exampleName)}</>;
}

export default App;
