import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebook, FaLinkedinIn, FaLocationArrow } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="text-white bg-[#212529]">
      <div className="container">
        <div data-aos="zoom-in" className="grid mg:grid-cols-3 pb-4 pt-5">
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl font-bold sm:text-left text justify mb-3 flex items-center gap-1">
              <FiShoppingBag size="30" />
              Shop Me
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
              pariatur quaerat modi velit placeat odio quam earum, ex eaque
              molestiae doloribus autem perferendis illum at distinctio nihil
              deserunt rem sunt inventore cum!
            </p>
          </div>
          <div>
            <div className="py-8 px-4 -py-8">
              <h1 className="sm:text-3xl font-bold sm:text-left text justify -mb-3">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((data) => {
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    key={data.title}
                  ></li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex  gap-3">
          <a href="#"></a>
          <a href="#">
            <FaLinkedinIn className="text-3xl" />
          </a>
          <a href="#">
            <FaFacebook className="text-3xl" />
          </a>
          <a href="#">
            <FaLocationArrow className="text-3xl" />
          </a>
        </div>
        <div>
          <div className="px-4 mt-5">
            <div className="flex items-center gap-3">
              <FaMapLocationDot></FaMapLocationDot>
              <p>Indore, Madhya Pradesh</p>
            </div>
            <div className="flex items-center gap-3">
              <IoCall></IoCall>
              <p>+91 12345 98999</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
