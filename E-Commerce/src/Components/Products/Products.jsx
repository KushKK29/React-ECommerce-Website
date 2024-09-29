import React from "react";
import Img1 from "../../assets/women.png";
import Img2 from "../../assets/women2.jpg";
import Img3 from "../../assets/women3.jpg";
import Img4 from "../../assets/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Goggles",
    rating: 4.0,
    color: "white",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Ethnic",
    rating: 4.7,
    color: "yellow",
    aosDelay: "300",
  },
  {
    id: 4,
    img: Img4,
    title: "Women Ethnic",
    rating: 5.0,
    color: "black",
    aosDelay: "400",
  },
  {
    id: 5,
    img: Img1,
    title: "Ethnic Tops",
    rating: 4.2,
    color: "white",
    aosDelay: "0",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center nb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Product
          </p>
          <h1 data-aos="fade-up" className="text-3x1 font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            neque placeat at.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {ProductData.map((data) => {
            return (
              <div
                data-aos="fade-up"
                data-aps-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt="Product Image"
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h1 className="font-semibold">{data.title}</h1>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
            View All Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
