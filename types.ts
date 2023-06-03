
export declare interface dataType {
    id: string,
    logo: string,
    logoBg?: string,
    brandName: string,
    status: "confirmed" | "pending" | "refund" | "delivered",
    item: string,
    amount: number,
    price: number,
    placedOn: string ,
}