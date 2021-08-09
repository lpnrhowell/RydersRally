import React from "react";
import Search from "./Search"
import "../styles/_home.scss";
import Header from "./Header";

function Home () {
  return(
    <div className="homePage">
      <Header/>
     <Search/> 
    </div>
  )
}
export default Home;