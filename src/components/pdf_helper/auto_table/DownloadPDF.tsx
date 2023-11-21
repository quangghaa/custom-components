import { Button } from "antd"
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { useEffect, useState } from "react"
import { FONT_PATH } from "./constant"
import { renderHeaderView, transformTableData } from "./helper"

export type ColumnType<T> = {
    title: string
    dataIndex?: string
    key?: string
    width?: number | string
    children?: ColumnType<T>[]
}

interface Props {
    tableColumns: ColumnType<any>[]
    tableData: any[]
}

const DownloadPDF: React.FC<Props> = (props) => {
    const { tableColumns, tableData } = props

    const [fontBase64, setFontBase64] = useState<string>("")
    async function getFontBase64() {
        const fontData = await fetch(FONT_PATH).then((res) => res.arrayBuffer())
        // Convert ArrayBuffer to base64-encoded string using btoa
        const _fontBase64 = btoa(new Uint8Array(fontData).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        setFontBase64(_fontBase64)
    }
    useEffect(() => {
        getFontBase64()
    }, [])

    async function generatePDF() {
        const doc = new jsPDF()
        if (fontBase64.length === 0) {
            console.log("font not found")
            alert("font not found")
            return
        }
        doc.addFileToVFS('OpenSans_Condensed-Light.ttf', fontBase64);
        doc.addFont('OpenSans_Condensed-Light.ttf', 'custom', 'normal');
        // Set the font for the document
        doc.setFont('custom');
        // Add text using the custom font
        // doc.text('Chào bạn!', 10, 10);

        const pdfTableHeader = renderHeaderView(tableColumns)
        const pdfTableData = transformTableData(tableColumns, tableData)

        autoTable(doc, {
            head: pdfTableHeader,
            body: pdfTableData,
        })

        // Continue adding content as needed

        // Generate the PDF
        doc.save('table.pdf');
    }
    return (
        <>
            <Button onClick={generatePDF}>PDF</Button>
        </>
    )
}
export default DownloadPDF