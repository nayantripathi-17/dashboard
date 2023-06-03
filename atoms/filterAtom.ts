import { atom } from "recoil";

export const filterState = atom<"all" | "confirmed" | "pending" | "refund" | "delivered">({
    key: "orderData",
    default: "all"
})



export const filters = ["all", "confirmed", "pending", "refund", "delivered"]
