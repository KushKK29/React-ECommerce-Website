import React from "react";
import Img1 from "../../assets/shirt.png";
import Img2 from "../../assets/shirt2.png";
import Img3 from "../../assets/shirt3.png";
import { FaStar } from "react-icons/fa6";

const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    rating: 5.0,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora, itaque minima fugit a adipisci impedit ratione, eaque eum odit cumque quaerat nisi?",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirts",
    rating: 4.0,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora, itaque minima fugit a adipisci impedit ratione, eaque eum odit cumque quaerat nisi?",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Shirt",
    rating: 4.1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora, itaque minima fugit a adipisci impedit ratione, eaque eum odit cumque quaerat nisi?",
  },
];

const TopProduct = ({ handelOrderPopup }) => {
  return (
    <div className="container">
      <div className="text-left mb-24">
        <p data-aos="fade-up" className="text-sm text-primary">
          Top Rated Products for you
        </p>
        <h1 data-aos="fade-up" className="text-3x1 font-bold">
          Best Products
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400 mb-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, maiores
          earum quisquam dolorem animi sunt ratione doloribus iste atque
          deleniti! Quae aspernatur quas quia?
        </p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {ProductData.map((data) => {
              return (
                <div
                  data-aos="zoom-in"
                  className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-slate-400 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
                >
                  <div className="h-[100px]">
                    <img
                      src={data.img}
                      alt=""
                      className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <FaStar className="text-yellow-500"></FaStar>
                      <FaStar className="text-yellow-500"></FaStar>
                      <FaStar className="text-yellow-500"></FaStar>
                      <FaStar className="text-yellow-500"></FaStar>
                      <FaStar className="text-yellow-500"></FaStar>
                    </div>
                    <h1 className="text-xl font-bold">{data.title}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                      {data.description}
                    </p>
                    <button
                      className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                      onClick={() => {
                        handelOrderPopup;
                      }}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
