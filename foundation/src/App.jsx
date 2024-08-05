import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Blog from "./components/Blog";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";

const App = () => {

  // const {fetchBlogPosts, page} = useContext(AppContext);


  return <div>
    <Header />
    <Blog />
    <Pagination />
  </div>;
};

export default App;
