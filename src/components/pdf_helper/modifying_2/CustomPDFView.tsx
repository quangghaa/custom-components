import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "./style.scss";
import { Button, Space } from "antd";
import { PDFDocument } from "pdf-lib";
import { RcFile } from "antd/es/upload";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDF_FILE_PATH = "../../../../src/assets/recycle_plan_data.pdf";
const CustomPDFView = (props: any) => {
  const { pdfFile } = props;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [signatureImg, setSignatureImg] = useState<ArrayBuffer | undefined>();
  const [signatureCoordinates, setSignatureCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer; // ArrayBuffer representation of the image
        // console.log(arrayBuffer);
        handlePlaceImage(signatureCoordinates, arrayBuffer);
        setSignatureImg(arrayBuffer);
        // Perform actions with the arrayBuffer (e.g., send it to server, process, etc.)
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const onDocumentLoadSuccess = (info: any) => {
    const { numPages } = info;
    console.log(">> ", numPages);
    setNumPages(numPages);
  };
  const onDocumentLoadError = (error: any) => {
    console.log(">> ", error);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () => {
    if (numPages) {
      setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
    }
  };
  const handleClick = (event: any) => {
    const overlay = document.getElementById("overlay");
    if (!overlay) return;
    const rect = overlay.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(
      `Clicked coordinates: x=${x}, y=${y} current page: ${pageNumber}`
    );

    setSignatureCoordinates({ x, y });

    const rectangle = document.createElement("div");
    rectangle.classList.add("selectedPlaceClass");
    rectangle.style.position = "absolute";
    rectangle.style.top = `${y - 40}px`;
    rectangle.style.left = `${x - 70}px`;
    rectangle.style.width = "140px"; // Adjust width as needed
    rectangle.style.height = "80px"; // Adjust height as needed
    rectangle.style.zIndex = "2";
    rectangle.style.border = "1px dashed blue";
    rectangle.style.display = "flex";
    rectangle.style.alignItems = "center";
    rectangle.style.justifyContent = "center";

    const text = document.createElement("div");
    text.textContent = "signature";
    text.style.color = "blue"; // Text color
    text.style.textAlign = "center";
    text.style.fontFamily = "Arial, sans-serif";

    rectangle.appendChild(text);

    const rectangleContainer = document.getElementById("pdf-document-id");
    rectangle.addEventListener("click", () => {
      rectangleContainer?.removeChild(rectangle);
    });
    if (rectangleContainer) {
      rectangleContainer.appendChild(rectangle);
    }
  };
  const handlePlaceImage = (
    coordinates: any,
    signatureImg: ArrayBuffer | undefined
  ) => {
    const { x, y } = coordinates;

    const rectangle = document.createElement("div");
    rectangle.style.position = "absolute";
    rectangle.style.top = `${y - 40}px`;
    rectangle.style.left = `${x - 70}px`;
    rectangle.style.width = "140px"; // Adjust width as needed
    rectangle.style.height = "80px"; // Adjust height as needed
    rectangle.style.zIndex = "2";
    rectangle.style.border = "1px dashed blue";
    rectangle.style.display = "flex";
    rectangle.style.alignItems = "center";
    rectangle.style.justifyContent = "center";

    if (!signatureImg) {
      const text = document.createElement("div");
      text.textContent = "error :(";
      text.style.color = "gray"; // Text color
      text.style.textAlign = "center";
      text.style.fontFamily = "Arial, sans-serif";
    } else {
      const blob = new Blob([signatureImg], { type: "image/jpeg" }); // Specify the appropriate MIME type

      const image = document.createElement("img");
      image.src = URL.createObjectURL(blob);
      image.style.maxWidth = "100%";
      image.style.maxHeight = "100%";

      rectangle.appendChild(image);
    }

    const rectangleContainer = document.getElementById("pdf-document-id");
    if (!rectangleContainer) return;

    const elementsToRemove = rectangleContainer.querySelectorAll(
      ".selectedPlaceClass"
    );
    elementsToRemove.forEach((element) => {
      element.remove();
    });

    rectangle.addEventListener("click", () => {
      rectangleContainer?.removeChild(rectangle);

      setSignatureImg(undefined);
    });

    rectangleContainer.appendChild(rectangle);
  };

  const convertPdfFileToArrayBuffer = (file: RcFile): Promise<ArrayBuffer | null> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
  
      reader.onload = (event) => {
        const arrayBuffer = event.target?.result as ArrayBuffer;
        resolve(arrayBuffer);
      };
  
      reader.onerror = () => {
        resolve(null);
      };
  
      reader.readAsArrayBuffer(file);
    });
  };

  const handleDownload = async () => {
    // This should be a Uint8Array or ArrayBuffer
    // This data can be obtained in a number of different ways
    // If your running in a Node environment, you could use fs.readFile()
    // In the browser, you could make a fetch() call and use res.arrayBuffer()
    const existingPdfBytes = await convertPdfFileToArrayBuffer(pdfFile[0]);
    const signatureImgBytes = signatureImg
    console.log(">> downlaod: ", signatureImgBytes)
    if (!existingPdfBytes || !signatureImgBytes) return 
    

    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes)

    // Embed the JPG image bytes and PNG image bytes
    const jpgImage = await pdfDoc.embedJpg(signatureImgBytes)

    // Get the first page of the document
    const pages = pdfDoc.getPages()
    const targetPage = pages[pageNumber - 1]

    // Get the width and height of the first page
    const { width, height } = targetPage.getSize()

    // Draw the JPG image in the center of the page
    // 464 114
    const {x, y} = signatureCoordinates
    const SIGNATURE_IMG_SIZE = {
        width: 140,
        height: 80
    }
    targetPage.drawImage(jpgImage, {
        x: x - (SIGNATURE_IMG_SIZE.width / 2),
        y: height - y - (SIGNATURE_IMG_SIZE.height / 2), // height - padding - (one text line + margin line) - image height
        width: SIGNATURE_IMG_SIZE.width,
        height: SIGNATURE_IMG_SIZE.height,
    })

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save()
    // For example, `pdfBytes` can be:
    //   • Written to a file in Node
    //   • Downloaded from the browser
    //   • Rendered in an <iframe>

    // Create a Blob from the PDF bytes
    const blob = new Blob([pdfBytes], { type: 'application/pdf' })

    // DOWNLOAD
    // Create a link element to trigger the download
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'recycle_plan_data_signed.pdf'
    document.body.appendChild(link)

    // Trigger the download
    link.click()

    // Remove the link from the DOM
    document.body.removeChild(link)

    // CLEAR states
    
}
  return (
    <div className="custom-pdf-view">
      <nav className="custom-pdf-view__head">
        <div className="nav-head">
          <span className="nav-button" onClick={goToPrevPage}>
            Prev
          </span>
          <span className="page-label">
            Page {pageNumber}/{numPages}
          </span>
          <span className="nav-button" onClick={goToNextPage}>
            Next
          </span>
        </div>

        <div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <Space>
            <Button onClick={handleImageUpload}>Upload Image</Button>
            <Button type="primary" onClick={handleDownload}>Download PDF</Button>
          </Space>
        </div>
      </nav>
      <div id="pdf-document-id" className="pdf-document" onClick={handleClick}>
        <div
          id="overlay"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: "1",
          }}
          onClick={handleClick}
        />
        {pdfFile && pdfFile.length != 0 && (
          <Document
            file={pdfFile[0]}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        )}
      </div>
    </div>
  );
};

export default CustomPDFView;
