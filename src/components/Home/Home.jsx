import React from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";

const Home = () => {
  const Navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      {Navigation.state === "loading" ? <p>Loading.....</p> : <Outlet></Outlet>}

      <Footer></Footer>
    </div>
  );
};

export default Home;
