import BrakingNews from "@/components/shared/BrakingNews";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <BrakingNews></BrakingNews>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default MainLayout;
