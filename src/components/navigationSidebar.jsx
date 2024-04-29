import React, { useState } from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoMdAnalytics } from "react-icons/io";
import { MdOutlineRateReview, MdOutlineSpaceDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { page, setPage } from "../redux/productSlice";

const NavigationSidebar = () => {
  const dispatch = useDispatch();
  const userPage = useSelector(page);

  const handleClick = (value) => {
    dispatch(setPage({ page: value }));
    setClick(value);
  };

  return (
    <section className="w-[20vw] hidden bg-blue-500  h-[90vh] text-white  md:flex justify-center items-center">
      <div className="w-[95%] h-[95%] justify-start flex flex-col gap-y-[5rem] items-center">
        <div className="text-[1.3rem] border-b-2 border-white font-semibold flex items-center gap-x-1">
          <HiOutlineDesktopComputer /> ProDview
        </div>

        <div className="flex font-semibold w-full text-[1.2rem] gap-y-2 flex-col">
          <span
            onClick={() => handleClick("Dashboard")}
            className={`w-full cursor-pointer  h-[3rem] flex justify-center items-center ${
              userPage === "Dashboard" && "bg-blue-600"
            } `}
          >
            <span className="flex  w-[9rem] justify-start   items-center gap-x-2">
              <MdOutlineSpaceDashboard />
              Dashboard
            </span>
          </span>
          <span
            onClick={() => handleClick("Addreview")}
            className={`w-full cursor-pointer  h-[3rem] flex justify-center items-center ${
              userPage === "Addreview" && "bg-blue-600"
            } `}
          >
            <span className="flex w-[9rem] justify-start items-center gap-x-2">
              <MdOutlineRateReview /> Add Review
            </span>
          </span>

          <span
            onClick={() => handleClick("Analytic")}
            className={`w-full cursor-pointer  h-[3rem] flex justify-center items-center ${
              userPage === "Analytic" && "bg-blue-600"
            } `}
          >
            <span className="flex items-center w-[9rem] justify-start gap-x-2">
              <IoMdAnalytics /> Analytic
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default NavigationSidebar;
