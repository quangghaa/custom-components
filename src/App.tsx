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
import Example from './components/pdf_helper/example/Example';

function App() {
  const printRef = useRef(null);
  const exportRef = useRef(null)

  const handleDownloadPdf = async () => {
    const element = printRef.current;

    const canvas = await html2canvas(element!);
    const imgData = canvas.toDataURL('image/png');
    // Create a PDF document
    const pdfDoc = (
      <Document>
        <Page size="A4">
          <View>
            <Image src={imgData} style={{ width: '100%' }} />
          </View>
        </Page>
      </Document>
    );

    // Convert the PDF document to a Blob
    const asBlob = await pdf(pdfDoc).toBlob();
    // Create a download link and trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(asBlob);
    downloadLink.download = 'print.pdf';
    downloadLink.click();
  };
  async function handleExportImage(element: any) {
    const canvas = await html2canvas(element);
    const image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image, "test_img");
  }
  function downloadImage(blob: any, fileName: string) {
    const fakeLink = window.document.createElement("a");
    // fakeLink.style = "display:none;";
    fakeLink.setAttribute("style", "display:none;")
    fakeLink.download = fileName;

    fakeLink.href = blob;

    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);

    fakeLink.remove();
  }
  return (
    <>
      {/* <PDFViewer height={600} width={"100%"}>
        <Resume />
      </PDFViewer>

      <div>
        <PDFDownloadLink document={<Resume />} fileName="resume.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download now!'
          }
        </PDFDownloadLink>
      </div> */}
      <div id="id">
        <Example />
      </div>
      {/* <Button onClick={() => handleExportImage(exportRef.current)}>
        Capture Image
      </Button> */}


    </>
  )
}

export default App
