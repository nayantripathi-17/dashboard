import { atom } from "recoil";

export const sortState = atom<{ amount: "asc" | "desc" | "" }>({
    key: "sortData",
    default: { amount: "" }
})



export const sortOptions = ["none", "asc", "desc"]
