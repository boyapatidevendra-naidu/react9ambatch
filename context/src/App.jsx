import { useContext, useState } from "react";
import Parent1 from "./components/parent1/Parent1";
import Parent2 from "./components/parent2/Parent2";
import Parent3 from "./components/parent3/Parent3";
import { themeContext } from "./context/ThemeContext";
import Product from "./components/products/Product";
import FilterRating from "./components/products/FilterRating";

const App = () => {
  let message = "Hello Good Morning Today We Are Discussing The Content";
  let [theme, setTheme] = useState(false);

  let { dark, light } = useContext(themeContext);
  console.log(dark);
  console.log(light);

  let applyTheme = () => {
    if (theme) {
      return dark;
    } else {
      return light;
    }
  };
  return (
    <div style={applyTheme()}>
      <button onClick={() => setTheme(!theme)}>
        {theme ? "Light" : "Dark"}
      </button>
      <Parent1 text={message} />
      <hr />
      <Parent2 text={message} />
      <hr />
      <Parent3 />
      <hr />
      <Product />
      <hr />
      <FilterRating />
    </div>
  );
};

export default App;
