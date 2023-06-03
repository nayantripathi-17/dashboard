import { atom } from "recoil";
import { dataType } from "../types";

export const orderArrayState = atom<dataType[]>({
    key: "orderArrayData",
    default: []
})