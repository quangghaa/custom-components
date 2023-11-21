import { Button } from "antd"
import jsPDF from 'jspdf'
import autoTable, { RowInput } from 'jspdf-autotable'
import { useEffect, useState } from "react"

const FONT_PATH = '../../../../src/assets/font/Open_Sans/static/OpenSans_Condensed-Medium.ttf'
const TABLE_HEADER: RowInput[] = [
    [
        { content: 'TT', rowSpan: 2, styles: { font: "custom", valign: "middle", halign: "center", fontStyle: "bold" } },
        { content: 'Tên SP', rowSpan: 2, styles: { font: "custom", valign: "middle", halign: "center", fontStyle: "bold" } },
        { content: 'Mã SP', rowSpan: 2, styles: { font: "custom", valign: "middle", halign: "center", fontStyle: "bold" } },
        { content: 'Danh mục', rowSpan: 2, styles: { font: "custom", valign: "middle", halign: "center", fontStyle: "bold" } },
        { content: 'Đơn vị tính', rowSpan: 2, styles: { font: "custom", valign: "middle", halign: "center", fontStyle: "bold" } },
        { content: 'Khối lượng', rowSpan: 2, styles: { font: "custom", valign: "middle", halign: "center", fontStyle: "bold" } },
        { content: 'Doanh thu trong nước', colSpan: 2, styles: { font: "custom", valign: "middle", halign: "center", fontStyle: "bold" } },
        { content: 'Doanh thu xuất khẩu', colSpan: 2, styles: { font: "custom", valign: "middle", halign: "center", fontStyle: "bold" } },
        { content: 'Tổng doanh thu', rowSpan: 2, styles: { font: "custom", valign: "middle", halign: "center", fontStyle: "bold" } },
        { content: 'Ghi chú', rowSpan: 2, styles: { font: "custom", valign: "middle", halign: "center", fontStyle: "bold" } },
    ],
    [
        { content: 'Số lượng', colSpan: 1, styles: { font: "custom", valign: "middle", halign: "center", fontStyle: "bold" } },
        { content: 'Doanh thu', colSpan: 1, styles: { font: "custom", valign: "middle", halign: "center", fontStyle: "bold" } },
        { content: 'Số lượng', colSpan: 1, styles: { font: "custom", valign: "middle", halign: "center", fontStyle: "bold" } },
        { content: 'Doanh thu', colSpan: 1, styles: { font: "custom", valign: "middle", halign: "center", fontStyle: "bold" } },
    ]
]
const PRODUCE_PRODUCT_COLUMNS: any[] = [
    {
        dataIndex: "idView",
        key: "idView",
        width: "50px",
    },
    {
        dataIndex: "name",
        key: "name",
        width: "400px",
    },
    {
        dataIndex: "code",
        key: "code",
        width: "200px",
    },
    {
        dataIndex: "productTypeLabel",
        key: "productTypeLabel",
        width: "200px",
    },
    {
        dataIndex: "productCategory",
        key: "productCategory",
        width: "400px",
    },
    {
        dataIndex: "unit",
        key: "unit",
        width: "150px",
    },
    {
        dataIndex: "weight",
        key: "weight",
        width: "200px",
    },
    {
        key: "domestic",
        width: "",
        title: 'Doanh thu trong nước',
        dataIndex: '',
        children: [
            {
                dataIndex: 'domesticQuantity',
                key: 'domesticQuantity',
                width: "200px",
            },
            {
                dataIndex: 'domesticRevenue',
                key: 'domesticRevenue',
                width: "200px",
            },
        ]
    },
    {
        key: "export",
        width: "",
        title: 'Doanh thu xuất khẩu',
        dataIndex: '',
        children: [
            {
                dataIndex: 'exportQuantity',
                key: 'exportQuantity',
                width: "200px",
            },
            {
                dataIndex: 'exportRevenue',
                key: 'exportRevenue',
                width: "200px",
            },
        ]
    },
    {
        dataIndex: "totalRevenue",
        key: "totalRevenue",
        width: "200px",
    },
    {
        dataIndex: "note",
        key: "note",
        width: "200px",
    },
];
const TABLE_DATA = [
    {
        idView: 1,
        name: "Product A",
        code: "ABC123",
        productTypeLabel: "Type 1",
        productCategory: "Category A",
        unit: "kg",
        weight: 150,
        domesticQuantity: 100,
        domesticRevenue: 5000,
        exportQuantity: 50,
        exportRevenue: 2000,
        totalRevenue: 7000,
        note: "This is a note for Product A.",
        type: "product",
        children: [
            {
                idView: 1.1,
                name: "Child A",
                code: "ABC123",
                productTypeLabel: "Type 1",
                productCategory: "Category A",
                unit: "kg",
                weight: 150,
                domesticQuantity: 100,
                domesticRevenue: 5000,
                exportQuantity: 50,
                exportRevenue: 2000,
                totalRevenue: 7000,
                note: "This is a note for Product A.",
                type: "property",
            },
            {
                idView: 1.2,
                name: "Child B",
                code: "ABC123",
                productTypeLabel: "Type 1",
                productCategory: "Category A",
                unit: "kg",
                weight: 150,
                domesticQuantity: 100,
                domesticRevenue: 5000,
                exportQuantity: 50,
                exportRevenue: 2000,
                totalRevenue: 7000,
                note: "This is a note for Product A.",
                type: "property",
            },
        ]
    },
    {
        idView: 2,
        name: "Product B",
        code: "DEF456",
        productTypeLabel: "Type 2",
        productCategory: "Category B",
        unit: "pieces",
        weight: 80,
        domesticQuantity: 80,
        domesticRevenue: 4000,
        exportQuantity: 30,
        exportRevenue: 1500,
        totalRevenue: 5500,
        note: "This is a note for Product B.",
        type: "product"
    },
    {
        idView: 3,
        name: "Product C",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 4,
        name: "Product C",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 5,
        name: "Product C",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 6,
        name: "Product D",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 7,
        name: "Product C",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 8,
        name: "Product D",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 9,
        name: "Product C",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 10,
        name: "Product D",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 11,
        name: "Product C",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 12,
        name: "Product D",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 13,
        name: "Product C",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 14,
        name: "Product D",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 15,
        name: "Product C",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 16,
        name: "Product D",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 17,
        name: "Product C",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 18,
        name: "Product D",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 19,
        name: "Product C",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 20,
        name: "Product D",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    // Continue adding records as needed
    // ...
    {
        idView: 21,
        name: "Product J",
        code: "XYZ987",
        productTypeLabel: "Type 2",
        productCategory: "Category B",
        unit: "pieces",
        weight: 90,
        domesticQuantity: 60,
        domesticRevenue: 3000,
        exportQuantity: 40,
        exportRevenue: 1800,
        totalRevenue: 4800,
        note: "This is a note for Product J.",
        type: "product"
    },
    {
        idView: 19,
        name: "Product C",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 20,
        name: "Product D",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    // Continue adding records as needed
    // ...
    {
        idView: 21,
        name: "Product J",
        code: "XYZ987",
        productTypeLabel: "Type 2",
        productCategory: "Category B",
        unit: "pieces",
        weight: 90,
        domesticQuantity: 60,
        domesticRevenue: 3000,
        exportQuantity: 40,
        exportRevenue: 1800,
        totalRevenue: 4800,
        note: "This is a note for Product J.",
        type: "product"
    },
    {
        idView: 19,
        name: "Product C",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 20,
        name: "Product D",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    // Continue adding records as needed
    // ...
    {
        idView: 21,
        name: "Product J",
        code: "XYZ987",
        productTypeLabel: "Type 2",
        productCategory: "Category B",
        unit: "pieces",
        weight: 90,
        domesticQuantity: 60,
        domesticRevenue: 3000,
        exportQuantity: 40,
        exportRevenue: 1800,
        totalRevenue: 4800,
        note: "This is a note for Product J.",
        type: "product"
    },
    {
        idView: 19,
        name: "Product C",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 20,
        name: "Product D",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    // Continue adding records as needed
    // ...
    {
        idView: 21,
        name: "Product J",
        code: "XYZ987",
        productTypeLabel: "Type 2",
        productCategory: "Category B",
        unit: "pieces",
        weight: 90,
        domesticQuantity: 60,
        domesticRevenue: 3000,
        exportQuantity: 40,
        exportRevenue: 1800,
        totalRevenue: 4800,
        note: "This is a note for Product J.",
        type: "product"
    },
    {
        idView: 19,
        name: "Product C",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 20,
        name: "Product D",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    // Continue adding records as needed
    // ...
    {
        idView: 21,
        name: "Product J",
        code: "XYZ987",
        productTypeLabel: "Type 2",
        productCategory: "Category B",
        unit: "pieces",
        weight: 90,
        domesticQuantity: 60,
        domesticRevenue: 3000,
        exportQuantity: 40,
        exportRevenue: 1800,
        totalRevenue: 4800,
        note: "This is a note for Product J.",
        type: "product"
    },
    {
        idView: 19,
        name: "Product C",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 20,
        name: "Product D",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    // Continue adding records as needed
    // ...
    {
        idView: 21,
        name: "Product J",
        code: "XYZ987",
        productTypeLabel: "Type 2",
        productCategory: "Category B",
        unit: "pieces",
        weight: 90,
        domesticQuantity: 60,
        domesticRevenue: 3000,
        exportQuantity: 40,
        exportRevenue: 1800,
        totalRevenue: 4800,
        note: "This is a note for Product J.",
        type: "product"
    },
    {
        idView: 19,
        name: "Product C",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    {
        idView: 20,
        name: "Product D",
        code: "GHI789",
        productTypeLabel: "Type 1",
        productCategory: "Category C",
        unit: "liters",
        weight: 200,
        domesticQuantity: 120,
        domesticRevenue: 6000,
        exportQuantity: 70,
        exportRevenue: 3000,
        totalRevenue: 9000,
        note: "This is a note for Product C.",
        type: "product"
    },
    // Continue adding records as needed
    // ...
    {
        idView: 21,
        name: "Product J",
        code: "XYZ987",
        productTypeLabel: "Type 2",
        productCategory: "Category B",
        unit: "pieces",
        weight: 90,
        domesticQuantity: 60,
        domesticRevenue: 3000,
        exportQuantity: 40,
        exportRevenue: 1800,
        totalRevenue: 4800,
        note: "This is a note for Product J.",
        type: "product"
    },
];
const AutoTable = () => {
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

    function getDataIndexList(columns: any[], remainingIndexList: string[] = []) {
        const result: string[] = remainingIndexList
        for (let i = 0; i < columns.length; i++) {
            const currentCol = columns[i]
            if ("dataIndex" in currentCol &&
                currentCol["dataIndex"] !== undefined &&
                currentCol["dataIndex"].length !== 0) {
                result.push(currentCol["dataIndex"])
            } else {
                // has children
                const children = columns[i].children
                getDataIndexList(children, result)
            }
        }
        return result
    }

    function transformTableData(columns: any[], data: any[]) {
        const result: any[] = []
        const indexList = getDataIndexList(columns)

        for (let i = 0; i < data.length; i++) {
            const currentRow = data[i]
            const value: any[] = []
            for (let j = 0; j < indexList.length; j++) {
                const dataIndex = indexList[j]
                const item = {
                    content: currentRow[dataIndex],
                    styles: { font: "custom" }
                }
                value.push(item)
            }
            result.push(value)

            if ("children" in currentRow) {
                const children = currentRow["children"]
                for (let j = 0; j < children.length; j++) {
                    const childRow = children[j]
                    const value: any[] = []
                    for (let k = 0; k < indexList.length; k++) {
                        const dataIndex = indexList[k]
                        const item = {
                            content: childRow[dataIndex],
                            styles: { font: "custom" }
                        }
                        value.push(item)
                    }
                    result.push(value)
                }
            }
        }
        return result
    }

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
        doc.text('Chào bạn!', 10, 10);

        const pdfTableHeader = TABLE_HEADER
        const pdfTableData = transformTableData(PRODUCE_PRODUCT_COLUMNS, TABLE_DATA)

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
export default AutoTable