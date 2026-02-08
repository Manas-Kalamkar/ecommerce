export type product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}


export interface StateType {
    isLoading: boolean,
    products: Array<product>,
    featureProducts: Array<product>,
    isError: boolean,
    isSingleLoading: boolean,
    singleProduct: product,
    isSingleError: boolean,
}
export type ActionType =
    | { type: "SET_LOADING" }
    | { type: "SET_PRODUCTS"; payload?: Array<product>, }
    | { type: "SET_ERROR" }
    | { type: "SET_SINGLE_LOADING" }
    | { type: "SET_SINGLE_PRODUCT", payload?: product }
    | { type: "SET_SINGLE_ERROR" }
    | { type: "SET_FILTER_PRODUCT", payload?: Array<product> }

export interface ProductContextType extends StateType {
    getSingleProduct: (url: string) => Promise<void>;
}


export const initialProduct: product = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
        rate: 0,
        count: 0
    }
}


export const initialState: StateType = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: initialProduct,
    isSingleError: false,
}


//filter section types
export type sort = "select" | "lowest" | "highest" | "a-z" | "z-a"


export type FilterStateType = {
    isFilterProductLoading: boolean,
    isFilterProductError: boolean,
    filteredProducts: Array<product>,
    allProducts: Array<product>,
    grid_view: boolean,
    list_view: boolean,
    get_sort: sort,
    filters: FilterUpdate
}


export type FilteredActionType =
    | { type: "SET_FILTER_LOADING" }
    | { type: "LOAD_FILTER_PRODUCT", payload?: Array<product> }
    | { type: "SET_FILTER_ERROR" }
    | { type: "SET_GRID_VIEW" }
    | { type: "SET_LIST_VIEW" }
    | { type: "GET_SORT_VALUE", payload?: sort }
    | { type: "SET_SORTED_PRODUCT" }
    | { type: "UPDATE_FILTER_VALUE", payload?: { name: keyof Filters, value: string } }
    | { type: "FILTER_PRODUCT", payload?: Array<product> }
    | { type: "CLEAR_PRODUCT", payload?: Array<product> }


export interface FilterProductContextType extends FilterStateType {
    setGridView: () => void;
    setListView: () => void;
    sorting: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    updateFilterValue: (event: FilterEvent) => void;
    minPrice: number
    maxPrice: number
    toClearFilters: () => void;
}

export type Filters = {
    text: string,
    category: string
    price: number
}

export type FilterUpdate = Partial<Filters>

export const initialFilteredState: FilterStateType = {
    isFilterProductLoading: false,
    isFilterProductError: false,
    filteredProducts: [initialProduct],
    allProducts: [initialProduct],
    grid_view: true,
    list_view: false,
    get_sort: "select",
    filters: {
        text: "",
        category: "all",
        price: 0
    }
}


export type FilterEvent =
    | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    | React.MouseEvent<HTMLButtonElement>;

//cart section types


export type CartStateType = {
    cart: Array<cartEntry>,
    total_item: number,
    total_amount: number,
    shipping_fee: number,
}

const getLocalCartData = ():cartEntry[] => {
    let localCartData: string | null = localStorage.getItem("items");
    if (!localCartData) {
        return [];
    } 
    try {
        return JSON.parse(localCartData as string)
    }catch(error){
        console.error(error);
        return[];
    }
}

export const initialCartState = {
    cart: getLocalCartData(),
    total_item: 0,
    total_amount: 0,
    shipping_fee: 50000,
}

export type CartActionType =
    | { type: "ADD-TO-CART", payload?: cartEntry }
    | { type: "DELETE-FROM-CART", payload?: number }
    | { type: "CLEAR-CART" }
    | { type: "SET-INCREMENT" ,payload?: {id:number,amount:number} }
    | { type: "SET-DECREMENT" ,payload?: {id:number,amount:number} }
    | { type: "CART-ITEM-PRICE-TOTAL" }

export interface CartContextType extends CartStateType {
    addToCart: ({ id, name, image, amount, price }: cartEntry) => void
    removeItem: (idToDelete: number) => void
    clearCart:()=>void
    incrementProduct:({id,amount}:{id:number,amount:number})=>void
    decrementProduct:({id,amount}:{id:number,amount:number})=>void
}

export type cartEntry = { id: number, name: string, image: string, amount: number, price: number }