import { type product, type FilteredActionType, type FilterStateType, type sort, type FilterUpdate, initialFilteredState} from "../types";

const FilterReducer = (state: FilterStateType, action: FilteredActionType): FilterStateType => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCT":
            return { ...state, isFilterProductLoading: false, filteredProducts: action.payload ?? [], allProducts: action.payload ?? [] };

        case "SET_FILTER_LOADING":
            return { ...state, isFilterProductLoading: true };

        case "SET_FILTER_ERROR":
            return { ...state, isFilterProductError: true, isFilterProductLoading: false }


        case "SET_GRID_VIEW":
            return { ...state, grid_view: true, list_view: false }


        case "SET_LIST_VIEW":
            return { ...state, grid_view: false, list_view: true }

        case "GET_SORT_VALUE":
            console.log("from filterreducer: ", action.payload)
            return { ...state, get_sort: action?.payload as sort }

        case "SET_SORTED_PRODUCT":
            let newSortData;
            // let tempSortProduct:Array<product>  = [...action.payload!];

            let tempSortProduct = [...state.filteredProducts];
            const sortingProducts = (a: product, b: product) => {

                if (state.get_sort === "select") {
                    return 0
                }

                if (state.get_sort === "lowest") {
                    return a.price - b.price;
                }
                if (state.get_sort === "highest") {
                    return b.price - a.price;
                }
                if (state.get_sort === "a-z") {
                    return a.title.localeCompare(b.title);
                }
                if (state.get_sort === "z-a") {
                    return b.title.localeCompare(a.title);
                }
                return 0;
            }
            newSortData = tempSortProduct.sort(sortingProducts);
            return { ...state, filteredProducts: newSortData };

        case "UPDATE_FILTER_VALUE":
            let name = action.payload?.name as keyof FilterUpdate;
            let value = action.payload?.value.toUpperCase() as string;
            console.log(state.filters)
            return { ...state, filters: { ...state.filters, [name]: value } }

        case "FILTER_PRODUCT":
            let tempFilterProduct = [...state.allProducts];
            let { text, category, price } = state.filters;

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.title.toLowerCase().includes(text.toLowerCase()));
            }
            if (category && category.toLowerCase() !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.category.toLowerCase() === category?.toLowerCase());
            }

            if (price === 0) {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem
                );
            } else {
                if (!price) return { ...state, filteredProducts: state.allProducts };
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.price <= price
                );
            }

            return { ...state, filteredProducts: tempFilterProduct };

        case "CLEAR_PRODUCT":
            console.log("clear");
            return {
                ...state,
                filters: initialFilteredState.filters
            }
        default:
            return state;

    }
}

export default FilterReducer;