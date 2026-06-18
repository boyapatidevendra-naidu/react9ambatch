import { createContext } from "react";

export let productContext = createContext();

let ProductProvider = ({ children }) => {
  let womenProducts = [
    {
      id: 1,
      title: "Womens Shirt",
      price: 1000,
    },
    {
      id: 2,
      title: "Kurthi",
      price: 1000,
    },
    {
      id: 3,
      title: "Jeans",
      price: 1000,
    },
    {
      id: 4,
      title: "Lehengas",
      price: 1000,
    },
  ];
  return (
    <productContext.Provider value={womenProducts}>
      {children}
    </productContext.Provider>
  );
};
export default ProductProvider;
