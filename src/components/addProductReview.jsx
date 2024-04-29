import React, { useState } from "react";

const AddProductReview = () => {
  const [productName, setProductName] = useState();
  const [productNameErr, setProductErr] = useState(false);
  const [yourName, setYourName] = useState();
  const [yourNameErr, setYourNameErr] = useState(false);
  const [email, setEmail] = useState();
  const [emailErr, setEmailErr] = useState(false);
  const [rating, setRating] = useState(1);
  const [ratingErr, setRatingErr] = useState(false);
  const [description, setDescription] = useState();
  const [descriptionErr, setDescriptionErr] = useState(false);

  const handleSubmit = () => {
    try {
      setProductErr(false);
      setYourNameErr(false);
      setEmailErr(false);
      setDescriptionErr(false);
      if (!productName && !yourName && !email && !description) {
        setProductErr(true);
        setYourNameErr(true);
        setEmailErr(true);
        setDescriptionErr(true);
      } else if (!productName && !yourName && !email) {
        setProductErr(true);
        setYourNameErr(true);
        setEmailErr(true);
      } else if (!productName && !yourName) {
        setProductErr(true);
        setYourNameErr(true);
      } else if (productName) {
        setYourNameErr(true);
      } else if (!email) {
        setEmailErr(true);
      } else if (!yourName) {
        setYourNameErr(true);
      } else if (!description) {
        setDescriptionErr(true);
      } else {
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  return (
    <section className="w-[80vw] flex justify-center">
      <div class="bg-white dark:bg-gray-90  w-max ">
        <div class="py-5 px-4 mx-auto max-w-2xl ">
          <h2 class="mb-4 text-2xl font-bold text-center text-gray-900 dark:text-white">
            Add Product Review
          </h2>
          <form className="bg-blue-500 w-[95vw] md:w-full py-2 px-5 rounded-md ">
            <div class="grid gap-2 sm:grid-cols-2 sm:gap-2">
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                />
                <span className="text  text-red-600 text-sm">
                  {productNameErr && "*Field required "}
                </span>
              </div>
              <div class="w-full">
                <label
                  for="brand"
                  class="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type your name"
                  required=""
                />
                <span className="text   text-red-600 text-sm">
                  {yourNameErr && "*Field required "}
                </span>
              </div>
              <div class="w-full">
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="price"
                  id="price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type your email"
                  required=""
                />
                <span className="text   text-red-600 text-sm">
                  {emailErr && "*Field required "}
                </span>
              </div>
              <div>
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Rating
                </label>
                <select
                  id="category"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected={1}>1</option>
                  <option selected={2}>2</option>
                  <option selected={3}>3</option>
                  <option selected={4}>4</option>
                  <option selected={5}>5</option>
                </select>
                <span className="text-red-600 text-sm"></span>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="3"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
                <span className="text   text-red-600 text-sm">
                  {descriptionErr && "*Field required "}
                </span>
              </div>
            </div>
            <div className="w-full flex mt-5 items-center justify-center">
              <button
                onClick={() => handleSubmit()}
                type="button"
                class=" w-40 flex justify-center items-center gap-x-2 bg-white text-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProductReview;
