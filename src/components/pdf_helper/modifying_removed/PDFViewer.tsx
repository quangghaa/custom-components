import { Button } from "antd";
import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import { useEffect, useRef, useState } from "react";

const SIGNATURE_IMG_PATH = "../../../../src/assets/signature.jpg";
const PDF_FILE_PATH = "../../../../src/assets/recycle_plan_data.pdf";
const FONT_PATH =
  "../../../../src/assets/font/Open_Sans/static/OpenSans_Condensed-Medium.ttf";
const PDFViewer: React.FC = () => {
  const [pdfInfo, setPdfInfo] = useState<string>();
  const iframeRef = useRef<HTMLIFrameElement>(null)

  async function getFileBytes(path: string) {
    const response = await fetch(path).then((res) => res.arrayBuffer());
    return response;
  }

  useEffect(() => {
    loadPDF()
  }, [])

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const { data } = event;
      if (data.x && data.y) {
        // Handle the received coordinates
        const { x, y } = data;
        console.log(`Clicked coordinates: x=${x}, y=${y}`);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  async function loadPDF() {
    // This should be a Uint8Array or ArrayBuffer
    // This data can be obtained in a number of different ways
    // If your running in a Node environment, you could use fs.readFile()
    // In the browser, you could make a fetch() call and use res.arrayBuffer()
    const existingPdfBytes = await getFileBytes(PDF_FILE_PATH);

    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const pdfBytes = await pdfDoc.save();
    // For example, `pdfBytes` can be:
    //   • Written to a file in Node
    //   • Downloaded from the browser
    //   • Rendered in an <iframe>

    // Convert the PDF bytes to a base64 string
    const base64String = btoa(
      new Uint8Array(pdfBytes).reduce((data, byte) => data + String.fromCharCode(byte), '')
    );

    const pdfDataUri = `data:application/pdf;base64,${base64String}`;

    setPdfInfo(pdfDataUri)
    // Render the PDF in an <iframe>
    // renderPDFInIframe(pdfDataUri);
  }
  function renderPDFInIframe(pdfDataUri: string) {
    const iframe = document.createElement("iframe");
    iframe.src = pdfDataUri;
    iframe.width = "100%";
    iframe.height = "500px";
    document.body.appendChild(iframe);
  }

  function onLoadIframe() {
    console.log(">> load iframe: ")
    if (!iframeRef.current) return;
    // const iframe = iframeRef.current;
    const iframe = (document.getElementById('iframeId')) as HTMLIFrameElement;
    const handleIframeClick = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      window.parent.postMessage({ x: clientX, y: clientY }, '*');
    };

    iframe.contentWindow?.addEventListener('click', handleIframeClick);
    return () => {
      iframe.removeEventListener('click', handleIframeClick);
    };
  }

  return (
    <div>
      <iframe id="iframeId" onLoad={onLoadIframe} ref={iframeRef} src={pdfInfo} width={"100%"} height={"800px"} />
    </div>
  );
};

export default PDFViewer;
