

// export const FORM_ID_LIST = ["I", "J", "K", "L"];

export enum Flow {
    RECYCLE_PLAN = "recycle_plan",
    RECYCLE_REPORT = "recycle_report",
    RECYCLE_PAYMENT = "recycle_payment",
    DISPOSAL_CONTRIBUTE = "disposal_contribute"
}


export enum FormType {
    Form1 = "1",
    Form1B1 = "1B1",
    Form2 = "2",
    Form2B1 = "2B1",
    Form2B2 = "2B2",
    Form2B3 = "2B3",
    Form3 = "3",
    Form41 = "4.1",
    Form42 = "4.2",
    Form43 = "4.3",
    Form44 = "4.4",
    Form7 = "7",
    Form8 = "8",
    Form9 = "9",
    Form10 = "10"
}
export enum DataType {
    PlanProducePackaging = "1.1.1",
    PlanProduceProduct =  "1.1.2",
    PlanImportPackaging ="1.2.1",
    PlanImportProduct  ="1.2.2",

    ReportProduce ="2.1.0",
    ReportImport ="2.2.0",

    PaymentProducePackaging= "3.1.1",
    PaymentProduceProduct ="3.1.2",
    PaymentImportPackaging ="3.2.1",
    PaymentImportProduct ="3.2.2",

    DisposalProduce="4.1.0",
    DisposalImport="4.2.0"
}

export enum OriginTabKey {
    Produce = '1',
    Import = '2'
}

export enum TypeTabKey {
    Packaging = '1',
    Product = '2'
}

export enum Numbering {
    /** 1, 2, 3 */
    "int" = 1,
    /** A, B, C */
    "ABC",
    /** I, II, III */
    "III",
}
export enum ProductType {
    Undefined = -1,
    Packaging = 1,
    Battery = 2,
    EngineOil = 3,
    TirePatch = 4,
    ElectricalSystem = 5,
    Transportation = 6,

    Other = 7,

    PlanProtectionPackaging = 8,
    DisposableBatteries = 9,
    DisposableHygieneProducts = 10,
    ChewingGum = 11,
    Cigarettes = 12,
    SyntheticPlasticProducts = 13
}


export const getFormList = (flow : Flow) => {
    switch(flow){
        case Flow.RECYCLE_PLAN:
            return [
                FormType.Form1B1, // UNCOMMENT ME
                FormType.Form7, // UNCOMMENT ME
                FormType.Form8, // UNCOMMENT ME
                FormType.Form9, // UNCOMMENT ME
                FormType.Form10 // UNCOMMENT ME
            ] as string[]
        case Flow.RECYCLE_REPORT:
            return [
                    FormType.Form2,
                ] as string[]
        case Flow.RECYCLE_PAYMENT:
            return [
                FormType.Form3,
                FormType.Form7,
                FormType.Form8,
                FormType.Form9,
                FormType.Form10,
            ] as string[]
        case Flow.DISPOSAL_CONTRIBUTE:
            return [
                FormType.Form41,
                FormType.Form42,
                FormType.Form43,
                FormType.Form44,
                FormType.Form7,
                FormType.Form8,
            ] as string[]
    }
    return []
}