import './App.css'
import DownloadPDF from './components/pdf_helper/auto_table/DownloadPDF';
import { PRODUCE_PRODUCT_COLUMNS, TABLE_DATA } from './components/pdf_helper/auto_table/constant';

function App() {
  const demoTableColumns = PRODUCE_PRODUCT_COLUMNS
  const demoTableData = TABLE_DATA

  return (
    <>
      <h1>Download pdf table</h1>
      <DownloadPDF
        tableColumns={demoTableColumns}
        tableData={demoTableData}
      />
    </>
  )
}

export default App
