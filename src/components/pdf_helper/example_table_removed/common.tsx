import { Table } from "antd";
import { ProductType } from "./form_id";

type EditableTableProps = Parameters<typeof Table>[0];

export type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

export const parseNumber = (value: number) => {
    if (Number.isInteger(value)) {
        return value;
    } else {
        return value.toFixed(2);
    }
};

export const toCurrency = (money: number, tipe: "VND") => {
    money = Math.ceil(money);
    switch (tipe) {
        case "VND":
            const config = { style: "currency", currency: "VND", maximumFractionDigits: 9 };
            const formated = new Intl.NumberFormat("vi-VN", config).format(money);
            const rs = formated.replaceAll(".", ",");
            return rs;
        default:
            return -1;
    }
};

export const isProduct = (productType: ProductType) => {
    if (!productType) return false
    if (productType !== ProductType.Undefined) return true
    return false
}

export interface IColumnTypes {
    title?: string
    dataIndex: string
    key: string
    width: string
    cellId?: number // according to column type keys
    children?: IColumnTypes[]
    cellType?: (value: any, row: any, index: any) => {}
}

function checkIfArray(value: any): value is IColumnTypes[] {
    return Array.isArray(value) && value.every(item => typeof item === 'object' && item !== null);
}

export const buildColumns = (colFields: any[], translateKey?: string) => {
    // const { t } = useTranslation('translation', { keyPrefix: translateKey })
    let cols: ColumnTypes[number][] = []
    if (checkIfArray(colFields)) {
        colFields.forEach((cf) => {
            let col: ColumnTypes[number] = {}
            if (!cf.children) {
                col = {
                    title: <>
                        {cf.dataIndex}
                    </>,
                    dataIndex: cf.dataIndex,
                    key: cf.key,
                    width: cf.width,
                    render: cf.cellType
                }
            }
            if (cf.children && cf.children.length > 0) {
                let cc: ColumnTypes[number][] = []
                cf.children.forEach((c) => {
                    let temp: ColumnTypes[number] = {
                        title: <>
                            {c.dataIndex}
                        </>,
                        dataIndex: c.dataIndex,
                        key: c.key,
                        width: c.width,
                        render: c.cellType
                    }
                    cc.push(temp)
                })

                col = {
                    title: cf.title,
                    dataIndex: '',
                    children: cc
                }
            }

            cols.push(col)
        })
    }
    return cols
}
