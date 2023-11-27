import { Button } from 'antd';
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit'
import { useEffect } from 'react';

const SIGNATURE_IMG_PATH = "../../../../src/assets/signature.jpg"
const PDF_FILE_PATH = "../../../../src/assets/recycle_plan_data.pdf"
const FONT_PATH = "../../../../src/assets/font/Open_Sans/static/OpenSans_Condensed-Medium.ttf"
const EditingPDF = () => {

    async function getFileBytes(path: string) {
        const response = await fetch(path).then(res => res.arrayBuffer())
        return response
    }

    async function handleSign() {
        // This should be a Uint8Array or ArrayBuffer
        // This data can be obtained in a number of different ways
        // If your running in a Node environment, you could use fs.readFile()
        // In the browser, you could make a fetch() call and use res.arrayBuffer()
        const existingPdfBytes = await getFileBytes(PDF_FILE_PATH)
        const signatureImgBytes = await getFileBytes(SIGNATURE_IMG_PATH)
        const fontBytes = await getFileBytes(FONT_PATH)

        // Load a PDFDocument from the existing PDF bytes
        const pdfDoc = await PDFDocument.load(existingPdfBytes)


        // Embed the Helvetica font
        pdfDoc.registerFontkit(fontkit)
        const customFont = await pdfDoc.embedFont(new Uint8Array(fontBytes))

        // Embed the JPG image bytes and PNG image bytes
        const jpgImage = await pdfDoc.embedJpg(signatureImgBytes)

        // Get the width/height of the JPG image scaled down to 25% of its original size
        const jpgDims = jpgImage.scale(0.25)

        // Get the first page of the document
        const pages = pdfDoc.getPages()
        const lastPage = pages[pages.length - 1]

        // // Add a new page
        // const newPage = pdfDoc.addPage();

        // Get the width and height of the first page
        const { width, height } = lastPage.getSize()

        // // --- DONT DELETE ME
        // newPage.drawText('Hà Nội, ngày 22 tháng 10 năm 2023', {
        //     x: (width / 3) * 2,
        //     y: height - 48,
        //     size: 12,
        //     font: customFont,
        // })
        // newPage.drawText('Người đại diện', {
        //     x: (width / 3) * 2 + 40,
        //     y: height - 48 - 20,
        //     size: 12,
        //     font: customFont,
        // })
        // newPage.drawText('Nguyễn Văn A', {
        //     x: (width / 3) * 2 + 40,
        //     y: height - 48 - 20 - 100,
        //     size: 12,
        //     font: customFont,
        // })
        // // ---

        // Draw the JPG image in the center of the page
        // 464 114
        lastPage.drawImage(jpgImage, {
            // x: newPage.getWidth() / 2 - jpgDims.width / 2,
            // y: newPage.getHeight() / 2 - jpgDims.height / 2,
            x: 464,
            y: height - 114 - 40, // height - padding - (one text line + margin line) - image height
            width: 140,
            height: 80,
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
    }
    return (
        <Button onClick={handleSign}>
            Sign
        </Button>
    )
}
export default EditingPDF