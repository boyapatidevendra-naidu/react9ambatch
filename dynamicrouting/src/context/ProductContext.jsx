import { useContext } from "react";
import { productContext, products } from "../utilities";

let ProductProvider = ({ children }) => {
  let productsData = products;
  return (
    <productContext.Provider value={productsData}>
      {children}
    </productContext.Provider>
  );
};
export default ProductProvider;
