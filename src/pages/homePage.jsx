import React from "react";
import NavigationSidebar from "../components/navigationSidebar";
import ProductDetails from "../components/productDetails";
import AddProductReview from "../components/addProductReview";
import { useSelector } from "react-redux";
import { page } from "../redux/productSlice";
import Header from "../components/haeder";

const HomePage = () => {
  const selectPage = useSelector(page);
  return (
    <>
      {" "}
      <Header />
      <div className="flex w-full justify-center ">
        <NavigationSidebar />
        {selectPage === "Dashboard" ? (
          <ProductDetails />
        ) : selectPage === "Addreview" ? (
          <AddProductReview />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default HomePage;
