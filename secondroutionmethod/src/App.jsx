import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <section>
      <nav>
        <Navbar />
      </nav>
      <article>
        <Outlet />
      </article>
    </section>
  );
};

export default App;
