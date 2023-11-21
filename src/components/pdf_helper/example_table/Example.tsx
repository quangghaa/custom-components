import { Button, Table } from "antd"
import { useRef, useState } from "react";
import { moneyCell, normalCell, unsignedNumberCell } from "./cell";
import { buildColumns } from "./common";
import html2canvas from "html2canvas";
import { Document, Page, View, Image, pdf } from '@react-pdf/renderer';

const fakeData = [
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
];

const Example = () => {
    const PRODUCE_PRODUCT_COLUMNS: any[] = [
        {
            dataIndex: "idView",
            key: "idView",
            width: "50px",
            cellType: normalCell,
        },
        {
            dataIndex: "name",
            key: "name",
            width: "400px",
            cellType: normalCell,
        },
        {
            dataIndex: "code",
            key: "code",
            width: "200px",
            cellType: normalCell,
        },
        {
            dataIndex: "productTypeLabel",
            key: "productTypeLabel",
            width: "200px",
            cellType: normalCell,
        },
        {
            dataIndex: "productCategory",
            key: "productCategory",
            width: "400px",
            cellType: normalCell,
        },
        {
            dataIndex: "unit",
            key: "unit",
            width: "150px",
            cellType: normalCell,
        },
        {
            dataIndex: "weight",
            key: "weight",
            width: "200px",
            cellType: unsignedNumberCell,
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
                    cellType: unsignedNumberCell,
                },
                {
                    dataIndex: 'domesticRevenue',
                    key: 'domesticRevenue',
                    width: "200px",
                    cellType: moneyCell,
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
                    cellType: unsignedNumberCell,
                },
                {
                    dataIndex: 'exportRevenue',
                    key: 'exportRevenue',
                    width: "200px",
                    cellType: moneyCell,
                },
            ]
        },
        {
            dataIndex: "totalRevenue",
            key: "totalRevenue",
            width: "200px",
            cellType: moneyCell,
        },
        {
            dataIndex: "note",
            key: "note",
            width: "200px",
            cellType: normalCell,
        },
    ];
    const columns = buildColumns(PRODUCE_PRODUCT_COLUMNS)
    const rowSelection = {
    }

    return (
        <>
            <h1>Demo table</h1>
            <div style={{ height: "300px" }}>
                OTHER SECTION
            </div>
            <div>
                <Table
                    // pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['20', '50', '100'] }}
                    pagination={false}
                    className='custom-table'
                    rowSelection={rowSelection}
                    bordered
                    dataSource={fakeData}
                    columns={columns}
                    size="small"
                    tableLayout="auto"
                    rowKey="uuid"
                    expandable={{ defaultExpandAllRows: true }}
                />
            </div>
        </>
    )
}
export default Example