import { selector } from "recoil";
import { filterState } from "./filterAtom";
import { orderArrayState } from "./orderArrayAtom";
import { sortState } from "./sortAtom";
import { filteredOrder } from "./filteredOrder";

export const sortedOrder = selector({
    key: "sortedOrder",
    get: ({ get }) => {
        const sort = get(sortState)
        const filteredOrderArray = get(filteredOrder)

        if (sort.amount === "asc") {
            return [...filteredOrderArray].sort((a, b) => a.amount - b.amount)
        }
        if (sort.amount === "desc") {
            return [...filteredOrderArray].sort((a, b) => b.amount - a.amount)
        }
        return filteredOrderArray
    }
})
