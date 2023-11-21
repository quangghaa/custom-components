import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import './App.css'
import MyDocument from './pdf_demo/MyDocument'
import { Button } from 'antd'
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import FullPage from './pdf_demo/FullPage';
import { Document, Page, View, Image, pdf } from '@react-pdf/renderer';
import MyResume from './pdf_demo/Resume';
import ComplaintForm from './pdf_demo/ComplaintLetter';
import Resume from './pdf_demo/Resume';
import Example from './components/pdf_helper/example_table/Example';
import { useReactToPrint } from 'react-to-print'
import MyPDF from './components/pdf_helper/example_table/MyPDF';
import AutoTable from './components/pdf_helper/auto_table/AutoTable';

function App() {
  return (
    <>
      <AutoTable />
    </>
  )
}

export default App
