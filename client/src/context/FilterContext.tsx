import { createContext, useContext, useEffect, useReducer, type ReactNode } from "react";
import { useProductContext } from "./ProductContext";
import type { FilterProductContextType, sort, FilterEvent, Filters } from "../types";
import { initialFilteredState } from "../types";
import FilterReducer from "../reducer/FilterReducer";

const FilterContext = createContext<FilterProductContextType | undefined>(undefined);



export const FilterContextProvider = ({ children }: { children: ReactNode }) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(FilterReducer, initialFilteredState);

    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    }
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" })
    }
    const sorting = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue as sort })
    }

    const updateFilterValue = (event: FilterEvent) => {
        const target = event.currentTarget as HTMLInputElement | HTMLButtonElement | HTMLSelectElement
        const value = target.value;
        const name = target.name as keyof Filters;
        dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } })
    }

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products })
    }, [products])

    useEffect(() => {
        dispatch({ type: "SET_SORTED_PRODUCT" })
    }, [state.get_sort])

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCT" })
    }, [state.filters])


    const toClearFilters = () => {
        dispatch({ type: "CLEAR_PRODUCT" })
    }

    var minPrice = Number.POSITIVE_INFINITY;
    var maxPrice = Number.NEGATIVE_INFINITY;

    let price;

    for (let i = 0; i < products.length; i++) {
        price = products[i].price;
        if (price < minPrice) minPrice = price;
        if (price > maxPrice) maxPrice = price;
    }



    return <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, minPrice, maxPrice, toClearFilters }}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    const filterContext = useContext(FilterContext);
    if (filterContext === undefined) {
        throw new Error("useFilterContext must be used within a FilterContext");
    }
    return filterContext;
}