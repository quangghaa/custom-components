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

function getMaxDepth(columns: any[]): number {
    let maxDepth = 1; // Initialize with the minimum depth, which is 1 for the root columns.
    for (const column of columns) {
        if (column.children) {
            const childDepth = 1 + getMaxDepth(column.children);
            if (childDepth > maxDepth) {
                maxDepth = childDepth;
            }
        }
    }

    return maxDepth;
}

function getChildrenLevel(level: number, col: any): any[] {
    if (level === 0) {
        return [col];
    }

    if (col.children) {
        return col.children.flatMap((child: any) => getChildrenLevel(level - 1, child));
    }

    return [];
}

function getColAndRowSpan(col: any, level: number = 0, maxDepth: number = 1): { colSpan: number; rowSpan: number } {
    let colSpan = 1;
    let rowSpan = 1;
    if (col.children) {
        colSpan = col.children!.reduce((sum: any, child: any) => sum + getColAndRowSpan(child, level + 1, maxDepth).colSpan, 0);
    } else {
        rowSpan = maxDepth - level
    }
    return { colSpan, rowSpan };
}

export function renderHeaderView(columns: any[]) {
    const maxDepth = getMaxDepth(columns)
    const headerRows = []
    for (let i = 0; i < maxDepth; i++) {
        let rows = []
        for (let j = 0; j < columns.length; j++) {
            const col = columns[j]
            const children = getChildrenLevel(i, col)
            rows.push(...children)
        }
        headerRows.push(rows)
    }
    const result = headerRows.map((row: any, level: number) => {
        const newRow = row.map((col: any, index: number) => {
            const { colSpan, rowSpan } = getColAndRowSpan(col, level, maxDepth)
            let temp = {
                content: col.title,
                rowSpan: rowSpan,
                colSpan: colSpan,
                styles: { font: "custom", valign: "middle", halign: "center", fontStyle: "bold" }
            }
            return temp
        })
        return newRow
    })
    return result
}

export function transformTableData(columns: any[], data: any[]) {
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
