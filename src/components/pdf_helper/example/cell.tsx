import { parseNumber, toCurrency, isProduct } from "./common"
import { IProduct } from "./product";

import { RenderedCell } from "rc-table/lib/interface"
import dayjs, { Dayjs } from 'dayjs';

export const EMPTY_CELL_CHAR = "-"

export const emptyCell = (value: any, row: any, index: any) => {
    return {
        children: value,
        props: {
            colSpan: 0,
        }
    }
}

export const normalCell = (value: any, row: any, index: any) => {
    let item = row as IProduct
    if (item.type == "product" || item.type == "property") {
        return {
            children: value,
            props: {
                colSpan: 1
            }
        }
    }

    return {
        children: value,
        props: {
            colSpan: 0,
        }
    }
}

export const dateCell = (value: any, row: any, index: any) => {
    let item = row as IProduct
    if (item.type == "product" || item.type == "property") {
        if (isProduct(item.productType)) {
            let result = ""
            if (dayjs.isDayjs(value)) {
                result = value.format('DD-MM-YYYY')
            }
            let date = dayjs(value)
            if (date.isValid()) result = date.format("DD-MM-YYYY")
            return {
                children: result,
                props: {
                    colSpan: 1
                }
            }
        }
    }
    return {
        children: value,
        props: {
            colSpan: 0,
        }
    }
}

export const numberCell = (value: any, row: any, index: any) => {
    let item = row as IProduct
    if (item.type == "product" || item.type == "property") {
        return {
            children: (value !== undefined && typeof (value) === "number") ? parseNumber(value) : '',
            props: {
                colSpan: 1,
                className: "vnp-text-right"
            }
        }
    }
    return {
        children: value,
        props: {
            colSpan: 0,
        }
    }
}

export const moneyCell = (value: any, row: any, index: any) => {
    let item = row as IProduct
    if (item.type == "product" || item.type == "property") {
        return {
            children: (value !== undefined && value != -1) ? toCurrency(value, "VND") : EMPTY_CELL_CHAR,
            props: {
                colSpan: 1,
                className: "vnp-text-right"
            }
        }
    }
    return {
        children: value,
        props: {
            colSpan: 0,
        }
    } as RenderedCell<{}>
}

export const amountCell = (value: any, row: any, index: any) => {
    let item = row as IProduct
    if (item.type == "product" || item.type == "property") {
        return {
            children: value,
            props: {
                colSpan: 1,
                className: "vnp-text-right"
            }
        }
    }
    return {
        children: value,
        props: {
            colSpan: 0,
        }
    } as RenderedCell<{}>
}

export const totalCell = (value: any, row: any, index: any) => {
    let item = row as IProduct
    if (item.type == "product" || item.type == "summary" || item.type == "property") {
        return {
            children: toCurrency(value, "VND"),
            props: {
                colSpan: 1,
                className: "vnp-text-right"
            }
        }
    }
    return {
        children: value,
        props: {
            colSpan: 0,
        }
    } as RenderedCell<{}>
}

export const nameCell = (value: any, row: any, index: any) => {
    let item = row as IProduct
    if (item.type == "category") {
        return {
            children: value,
            props: {
                colSpan: 15
            }
        }
    }
    if (item.type == "summary") {
        return {
            children: <div className="summary"> {value} </div>,
            props: {
                colSpan: 15
            }
        }
    }

    return {
        children: value,
        props: {
            colSpan: 1
        }
    } as RenderedCell<{}>
}

export const indexCell = (value: any, row: any, index: any) => {
    let item = row as IProduct
    if (item.type == "summary") {
        return {
            children: <div className="summary"> {value} </div>,
            props: {
                colSpan: 0,
            }
        }
    }
    return {
        children: value,
        props: {
            colSpan: 1
        }
    } as RenderedCell<{}>
}


export const packagingCell = (value: any, row: any, index: any) => {
    let item = row as IProduct
    if (item.type == "product" || item.type == "property") {
        return {
            // children: value == 0 ? "Bao bì trong" : "Bao bì ngoài",
            children: <>
                {!value && ""}
                {value === 0 && "Bao bì trực tiếp"}
                {value === 1 && "Bao bì ngoài"}
                {value === -1 && EMPTY_CELL_CHAR}
            </>,
            props: {
                colSpan: 1
            }
        }
    }
    return {
        children: value,
        props: {
            colSpan: 0,
        }
    }
}

export const productTypeCell = (value: any, row: any, index: any) => {
    let item = row as IProduct
    if (item.type == "product" || item.type == "property") {
        return {
            // children: value == 0 ? "Bao bì trong" : "Bao bì ngoài",
            children: <>
                {!value && ""}
                {value === 1 && "Bao bì"}
                {value === 2 && "Ắc quy và Pin"}
                {value === 3 && "Dầu nhớt"}
                {value === 4 && "Săm lốp"}
                {value === 5 && "Điện, điện tử"}
                {value === 6 && "Phương tiện giao thông"}
                {value === 7 && "Khác"}
                {value === 8 && "Bao bì thuốc bảo vệ thực vật"}
                {value === 9 && "Pin dùng một lần các loại"}
                {value === 10 && "Tã lót, bỉm, băng vệ sinh, khăn ướt dùng một lần"}
                {value === 11 && "Kẹo cao su"}
                {value === 12 && "Thuốc lá"}
                {value === 13 && "Sản phẩm có thành phần nhựa tổng hợp"}

                {value === -1 && EMPTY_CELL_CHAR}
            </>,
            props: {
                colSpan: 1
            }
        }
    }
    return {
        children: value,
        props: {
            colSpan: 0,
        }
    }
}

// type key 5
export const unsignedNumberCell = (value: any, row: any, index: any) => {
    let item = row as IProduct
    if (item.type == "product" || item.type == "property") {
        return {
            // children: value != -1 ? value : EMPTY_CELL_CHAR,
            children: (value !== undefined && typeof (value) === "number") ? parseNumber(value) : 0,
            props: {
                colSpan: 1,
                className: "vnp-text-right"
            }
        }
    }
    return {
        children: value,
        props: {
            colSpan: 0,
        }
    }
}
