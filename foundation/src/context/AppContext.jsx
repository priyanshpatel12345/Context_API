import {  createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  // data filling pending

  
  useEffect(() => {
    fetchBlogPosts(page);
  },[]);

  async function fetchBlogPosts(page = 1) {
    const url = `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`;
    
    setLoading(true);

    try {
      const res = await fetch(url); 
      console.log(res);
      const data = await res.json();
      console.log(data);

      setPage(data.page);
      setTotalPage(data.totalPages);
      setPosts(data.posts);
    } catch (error) {
      setPage(1);
      setPosts([]);
      setTotalPage(null);
      console.log(error);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPage,
    setTotalPage,
    fetchBlogPosts,
    handlePageChange
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
