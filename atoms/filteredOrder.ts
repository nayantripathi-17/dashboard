import { selector } from "recoil";
import { filterState } from "./filterAtom";
import { orderArrayState } from "./orderArrayAtom";

export const filteredOrder = selector({
    key: "filteredOrder",
    get: ({ get }) => {
        const filter = get(filterState)
        const orderArray = get(orderArrayState)

        if (filter === "confirmed") {
            return orderArray.filter((order) => order.status === "confirmed")
        }

        if (filter === "pending") {
            return orderArray.filter((order) => order.status === "pending")
        }

        if (filter === "refund") {
            return orderArray.filter((order) => order.status === "refund")
        }

        if (filter === "delivered") {
            return orderArray.filter((order) => order.status === "delivered")
        }

        return orderArray
    }
})