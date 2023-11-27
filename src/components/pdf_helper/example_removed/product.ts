import dayjs from "dayjs";
import { Numbering, ProductType, DataType } from "./form_id";

export interface IProductView {
    dataType: DataType 

    key: string;
    idView: string;

    groupId: number;
    type: string;

    parentId: number; // parent groupId
    parentIDView: string;
    numbering: Numbering; // 1,2,3 | A,B,C | I,II,III
    viewWithGroupID: boolean;

    parentUuid: string; // parent groupId
    children: any[];
}


// Sản xuất - bao bì
export interface IProduct_Recycle_Produce_Packaging {
    id: number;
    uuid: string; 

    name: string;

    contributionId: string; 
    packaging: number; // 0 - bao bì trực tiếp, 1 - bao
    packingSpec: number; // Quy cách đóng gói, dùng cho bao bì (default = 1)
    weight: number;
    totalRevenue: number;
    note: string;

    //Form
    code: string;
    unit: string;

    domesticQuantity: number;
    domesticRevenue: number;

    exportQuantity: number;
    exportRevenue: number;
}

// Sản xuất - sản phẩm
export interface IProduct_Recycle_Produce_Product {
    id: number;
    uuid: string; 

    name: string;
    unit: string;
    code: string;

    productType: ProductType;
    productTypeLabel: string;
    contributionId: string; 

    weight: number;

    domesticQuantity: number;
    domesticRevenue: number;

    exportQuantity: number;
    exportRevenue: number;

    totalRevenue: number;

    note: string;
}

// Nhập khẩu - bao bì
export interface IProduct_Recycle_Import_Packaging {
    id: number;

    uuid: string; 
    name: string;
    unit: string;
    code: string;

    contributionId: string; 
    packaging: number; // 0 - bao bì trực tiếp, 1 - bao
    packingSpec: number; // Quy cách đóng gói, dùng cho bao bì (default = 1)

    weight: number;

    quantity: number;
    price: number;

    importValue: number;

    declarationNumber: string;
    declarationDate: dayjs.Dayjs | null;

    note: string;
}

// Nhập khẩu - sản phẩm
export interface IProduct_Recycle_Import_Product {
    id: number;

    uuid: string; 
    name: string;
    unit: string;
    code: string;

    productType: ProductType;
    productTypeLabel: string;
    contributionId: string; 

    weight: number;

    quantity: number;
    price: number;

    importValue: number;

    declarationNumber: string;
    declarationDate: dayjs.Dayjs | null;

    note: string;
}

//fields_J
export interface IProduct_Recycle_Result {
    id: number;
    uuid: string; 
    name: string;
    unit: string;
    code: string;

    recyclePlanPrevYear: string;
    CurYearWeight: number;
    CurYearRelatedWeight: number;

    ResultRecycled: string;
    recycleInputSupplier: string;
    attachDocument: string;
    recycleSolution: string;
    recycleSpecsRevokePercentage: number;
}

//form 7
export interface IProduct_Disposal_Domestic {
    id: number;
    uuid: string; 
    name: string;
    code: string;

    unit: string;

    productType: ProductType;
    productTypeLabel: string;
    contributionId: string; 
    productCategory: string;
    wasteSpecs: string;
    

    domesticQuantity: number;
    domesticRevenue: number;

    exportQuantity: number;
    exportRevenue: number;

    totalRevenue: number;

    plasticPercentage: number; 
    note: string;
}


//form 8
export interface IProduct_Disposal_Import {
    id: number;
    uuid: string; 

    name: string;
    code: string;

    unit: string;
    
    productType: ProductType;
    productTypeLabel: string;
    contributionId: string; 
    productCategory: string;
    wasteSpecs: string; //format
    

    quantity: number;
    price: number;

    importValue: number;

    declarationNumber: string;
    declarationDate: dayjs.Dayjs | null;

    plasticPercentage: number; 
    note: string;
}

export type IProduct = IProductView &
    IProduct_Recycle_Produce_Packaging &
    IProduct_Recycle_Produce_Product &
    IProduct_Recycle_Import_Packaging &
    IProduct_Recycle_Import_Product &
    IProduct_Recycle_Result &
    IProduct_Disposal_Domestic &
    IProduct_Disposal_Import 
    
export const initialProduct: IProduct = {
    id: 0,
    uuid: "",
    parentUuid: "",
    parentId: 0,
    groupId: 0,
    type: "",
    parentIDView: "",
    numbering: 1,
    key: "",
    idView: "",
    name: "",
    code: "",
    plasticPercentage:0,
    note: "",
    unit: "",
    productType: ProductType.Undefined, // 
    productTypeLabel: "",
    weight: 0,
    domesticQuantity: 0,
    domesticRevenue: 0,
    exportQuantity: 0,
    exportRevenue: 0,
    totalRevenue:0,
    quantity:0,
    price:0,
    importValue:0,
    packaging: -1, 
    packingSpec: 0, // Quy cách đóng gói, dùng cho bao bì (default = 1)
    recyclePlanPrevYear: "",
    CurYearWeight: 0,
    CurYearRelatedWeight: 0,
    ResultRecycled: "",
    recycleInputSupplier: "",
    attachDocument: "",
    recycleSolution: "",
    recycleSpecsRevokePercentage: 0,
    contributionId:"",
    productCategory: "",
    wasteSpecs: "",
    // totalCost: 0,
    declarationNumber: "",
    declarationDate: null,
    // importValue: 0,
    dataType: DataType.DisposalImport,
    // obligateRatio: 0,
    viewWithGroupID: false,
    // lastYearRealityWeight:0,
    // lastYearDeclaratedWeight:0,
    children:[],
};


