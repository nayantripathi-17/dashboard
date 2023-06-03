import { atomFamily } from "recoil";
import { dataType } from "../types";

export const orderState = atomFamily<(dataType & { checked: boolean }), string>({
    key: "orderData",
    default: {
        id: "",
        logo: "",
        logoBg: "",
        brandName: "",
        status: "confirmed",
        item: "",
        amount: 0,
        price: 0,
        placedOn: new Date(Date.now()).toLocaleDateString("GB-en"),
        checked: false
    }
})