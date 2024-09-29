import React from "react";
import Slider from "react-slick";

const TestomonialsData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vero perferendis beatae, similique tempora quaerat aliquid, nihil cupiditate placeat repudiandae est.",
    img: "https://picsum.photos/id/1005/400/300",
  },
  {
    id: 2,
    name: "Victoria",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vero perferendis beatae, similique tempora quaerat aliquid, nihil cupiditate placeat repudiandae est.",
    img: "https://picsum.photos/id/1005/400/300",
  },
  {
    id: 4,
    name: "Victorum",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vero perferendis beatae, similique tempora quaerat aliquid, nihil cupiditate placeat repudiandae est.",
    img: "https://picsum.photos/id/1005/400/300",
  },
  {
    id: 5,
    name: "Victorumia",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vero perferendis beatae, similique tempora quaerat aliquid, nihil cupiditate placeat repudiandae est.",
    img: "https://picsum.photos/id/1005/400/300",
  },
  {
    id: 6,
    name: "Victory Venkatesh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vero perferendis beatae, similique tempora quaerat aliquid, nihil cupiditate placeat repudiandae est.",
    img: "https://picsum.photos/id/1005/400/300",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    Infinite: true,
    speed: 500,
    slideToscroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slideToShow: 3,
          slideToscroll: 1,
          Infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slideToShow: 2,
          slideToscroll: 1,
          initialSlider: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slideToShow: 1,
          slideToscroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What out Customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testomonials
          </h1>
          <p className="text-xs text-gray-400">Lorem, ipsum.</p>
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {TestomonialsData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className="flex items-center flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative"
                    >
                      <div className="mb-4">
                        <img
                          src={data.img}
                          alt=""
                          className="rounded-full w-40 h-40"
                        />
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="space-y-3 ">
                          <p className="text-xs dark:text-slate-300 text-gray-500">
                            {data.text}
                          </p>
                          <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
                            {data.name}
                          </h1>
                        </div>
                      </div>
                      <p className="text-black/20 text-9xl absolute top-0 right-0"></p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
