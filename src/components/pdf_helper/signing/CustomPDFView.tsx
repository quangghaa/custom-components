import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Button, Space } from "antd";
import { PDFDocument } from "pdf-lib";
import { RcFile } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {
  uploadedFile: UploadFile[];
}

const CustomPDFView: React.FC<Props> = (props) => {
  const { uploadedFile } = props;
  const [PDFFile, setPDFFile] = useState<RcFile>();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [signatureImg, setSignatureImg] = useState<ArrayBuffer | undefined>();
  const [signatureCoordinates, setSignatureCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (uploadedFile && uploadedFile.length !== 0) {
      setPDFFile(uploadedFile[0].originFileObj);
    }
  }, [uploadedFile]);

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () => {
    if (numPages) {
      setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileType = file.type; // This will give you the MIME type of the file
      console.log("File type:", fileType);

      // Perform actions based on the file type
      if (fileType === "image/jpeg" || fileType === "image/png") {
        // Handle JPEG or PNG files
      } else if (fileType === "image/gif") {
        // Handle GIF files
      } else {
        // Handle other image types or perform a more detailed check
      }

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

  const handleImageUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const convertPdfFileToArrayBuffer = (
    file: RcFile
  ): Promise<ArrayBuffer | null> => {
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
    if (!PDFFile) return;
    const existingPdfBytes = await convertPdfFileToArrayBuffer(PDFFile);
    const signatureImgBytes = signatureImg;
    console.log(">> downlaod: ", signatureImgBytes);
    if (!existingPdfBytes || !signatureImgBytes) return;

    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Embed the JPG image bytes and PNG image bytes
    const jpgImage = await pdfDoc.embedJpg(signatureImgBytes);

    // Get the first page of the document
    const pages = pdfDoc.getPages();
    const targetPage = pages[pageNumber - 1];

    // Get the width and height of the first page
    const { width, height } = targetPage.getSize();

    // Draw the JPG image in the center of the page
    // 464 114
    const { x, y } = signatureCoordinates;
    const SIGNATURE_IMG_SIZE = {
      width: 140,
      height: 80,
    };
    targetPage.drawImage(jpgImage, {
      x: x - SIGNATURE_IMG_SIZE.width / 2,
      y: height - y - SIGNATURE_IMG_SIZE.height / 2, // height - padding - (one text line + margin line) - image height
      width: SIGNATURE_IMG_SIZE.width,
      height: SIGNATURE_IMG_SIZE.height,
    });

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();
    // For example, `pdfBytes` can be:
    //   • Written to a file in Node
    //   • Downloaded from the browser
    //   • Rendered in an <iframe>

    // Create a Blob from the PDF bytes
    const blob = new Blob([pdfBytes], { type: "application/pdf" });

    // DOWNLOAD
    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "recycle_plan_data_signed.pdf";
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);

    // CLEAR states
  };

  // ---

  const onDocumentLoadSuccess = (info: any) => {
    const { numPages } = info;
    setNumPages(numPages);
  };
  const onDocumentLoadError = (error: any) => {
    console.log(">> ", error);
    alert("load document error");
  };

  const createRectangleDivElement = (x: number, y: number) => {
    const rectangle = document.createElement("div");
    rectangle.classList.add("to-remove");
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
    return rectangle;
  };
  const createTextElement = (text: string, color?: string) => {
    const textElement = document.createElement("div");
    textElement.textContent = text;
    textElement.style.color = color ? color : "blue"; // Text color
    textElement.style.textAlign = "center";
    textElement.style.fontFamily = "Arial, sans-serif";
    return textElement;
  };
  const createImgElement = (signatureImg: ArrayBuffer | undefined) => {
    let element;
    if (!signatureImg) {
      element = createTextElement("error :(", "gray");
    } else {
      const blob = new Blob([signatureImg], { type: "image/jpeg" }); // Specify the appropriate MIME type // TODO: need to check image type
      const image = document.createElement("img");
      image.src = URL.createObjectURL(blob);
      image.style.maxWidth = "100%";
      image.style.maxHeight = "100%";
      element = image;
    }
    return element;
  };
  const removeElement = (className: string, parentNode: HTMLElement) => {
    const elementsToRemove = parentNode.querySelectorAll("." + className);
    elementsToRemove.forEach((element) => {
      element.remove();
    });
  };

  const handlePDFClick = (event: any) => {
    const overlay = document.getElementById("overlay");
    if (!overlay) return;
    const rect = overlay.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(
      `Clicked coordinates: x=${x}, y=${y} current page: ${pageNumber}`
    );

    const rectangle = createRectangleDivElement(x, y);
    const text = createTextElement("signature");
    rectangle.appendChild(text);
    const rectangleContainer = document.getElementById("document-container");
    if (!rectangleContainer) return;
    rectangle.addEventListener("click", () => {
      rectangleContainer.removeChild(rectangle);
    });

    removeElement("to-remove", rectangleContainer); // remove last clicked

    rectangleContainer.appendChild(rectangle);

    setSignatureCoordinates({ x, y });
  };
  const handlePlaceImage = (
    coordinates: any,
    signatureImg: ArrayBuffer | undefined
  ) => {
    const { x, y } = coordinates;

    const rectangle = createRectangleDivElement(x, y);
    const childElement = createImgElement(signatureImg);
    rectangle.appendChild(childElement);

    const rectangleContainer = document.getElementById("document-container");
    if (!rectangleContainer) return;

    rectangle.addEventListener("click", () => {
      rectangleContainer.removeChild(rectangle);
      setSignatureImg(undefined);
    });
    rectangleContainer.appendChild(rectangle);
  };

  return (
    <div className="pdf-view">
      {!PDFFile && <div className="error-line">error load pdf file :(</div>}
      {PDFFile && (
        <>
          <nav className="pdf-view__head">
            <div className="nav-head">
              <button
                disabled={pageNumber === 1}
                className="nav-button"
                onClick={goToPrevPage}
              >
                Prev
              </button>
              <span className="page-label">
                Page {pageNumber}/{numPages}
              </span>
              <button
                disabled={pageNumber === numPages}
                className="nav-button"
                onClick={goToNextPage}
              >
                Next
              </button>
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
                <Button
                  disabled={signatureImg === undefined}
                  type="primary"
                  onClick={handleDownload}
                >
                  Download PDF
                </Button>
              </Space>
            </div>
          </nav>
          <div
            id="document-container"
            className="pdf-view__body"
            onClick={handlePDFClick}
          >
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
              onClick={handlePDFClick}
            />

            <Document
              file={PDFFile}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomPDFView;
