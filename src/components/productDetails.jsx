import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { PiProjectorScreenChart } from "react-icons/pi";
import { useSelector } from "react-redux";
import { products } from "../redux/productSlice";

const ProductDetails = () => {
  const allProducts = useSelector(products);
  const [page, setPage] = useState(0);
  return (
    <section className="md:w-[80vw] w-[95vw] flex items-center justify-center h-[90vh]">
      <div className="w-[90%] h-[90%] flex flex-col gap-y-5 items-center">
        <span className="font-semibold text-[1.6rem]">Product Details</span>
        <div className="w-full">
          <div class="relative  h-[60vh]  overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
              <thead class="text-xs  text-white uppercase bg-blue-600 dark:text-white">
                <tr>
                  <th scope="col" class="px-6 py-3 ">
                    <div className="flex gap-x-2 items-center justify-start">
                      <span>
                        <PiProjectorScreenChart size={20} />
                      </span>
                      <span> Product name</span>
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3 ">
                    <div className="flex gap-x-2 items-center justify-start">
                      <span>
                        <FiUser size={20} />
                      </span>
                      <span> Reviewer name</span>
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3 ">
                    <div className="flex gap-x-2 items-center justify-start">
                      <span>
                        <IoIosStarOutline size={20} />
                      </span>
                      <span> Ratings</span>
                    </div>
                  </th>
                  <th scope="col" class="px-6 py-3 ">
                    <div className="flex gap-x-2 items-center justify-start">
                      <span>
                        <MdOutlineDateRange size={20} />
                      </span>
                      <span> Date</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {allProducts
                  ?.slice(page, page + 10)
                  ?.map(
                    ({
                      name,
                      id,
                      reviewer_name,
                      review_rating,
                      date_of_submission,
                    }) => (
                      <tr key={id} class="bg-blue-500 border-b border-blue-400">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                        >
                          {name}
                        </th>
                        <td class="px-6 py-4">{reviewer_name}</td>
                        <td class="px-6 py-4">{review_rating}</td>
                        <td class="px-6 py-4">
                          {date_of_submission.split("T")[0]}
                        </td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
          <div className="w-full flex justify-center mt-8 items-center">
            <button
              disabled={page === 0 ? true : false}
              onClick={() => setPage(page - 10)}
              type="button"
              class={`text-white flex justify-center items-center gap-x-2 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${
                page === 0 && "opacity-50 cursor-not-allowed"
              }`}
            >
              <HiOutlineArrowNarrowLeft size={18} /> Prev
            </button>

            <button
              disabled={page + 10 >= allProducts?.length ? true : false}
              onClick={() => setPage(page + 10)}
              type="button"
              class={`text-white flex justify-center items-center gap-x-2 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${
                page + 10 >= allProducts?.length &&
                "opacity-50 cursor-not-allowed"
              }`}
            >
              Next <HiOutlineArrowNarrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
