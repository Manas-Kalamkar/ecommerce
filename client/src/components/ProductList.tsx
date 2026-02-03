import { useFilterContext } from "../context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filteredProducts, grid_view, list_view } = useFilterContext();
  if (grid_view === true) {
    return <GridView products={filteredProducts} />;
  }

  if (list_view === true) {
    return <ListView products={filteredProducts} />;
  }
};

export default ProductList;