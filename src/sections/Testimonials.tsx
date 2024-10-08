import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-textblue py-20 md:mt-20">
      <div className="mx-10 lg:mx-20">
        <div className="mb-10 flex flex-col gap-3 md:mb-12">
          <h2 className="cabinet text-4xl text-white sm:text-5xl">
            What Our Travelers Say
          </h2>
          <p className="max-w-2xl text-base text-gray-400 md:text-xl">
            See what our travelers have to say about their experiences. Their
            feedback drives us to keep delivering great service.
          </p>
        </div>
        <Slider {...settings}>
          <div className="px-5">
            <div className="flex max-w-sm flex-col rounded-2xl shadow-lg shadow-slate-700">
              <div className="h-60 rounded-t-xl bg-white px-4 sm:px-8">
                <p className="poppins text-md relative py-7 text-center italic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="h-8 w-8 text-orangeboom"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias
                  possimus facere.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 h-8 w-8 text-orangeboom"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-b-xl bg-orangeboom p-8">
                <Image
                  width={1000}
                  height={1000}
                  src="/Images/person2.jpeg"
                  alt=""
                  className="-mt-16 mb-2 h-16 w-16 rounded-full bg-gray-500 bg-cover bg-center"
                />
                <p className="cabinet text-xl text-white">Distinctio Animi</p>
                <p className="flex gap-x-1">
                  <FaStar size={20} color="gold" />
                  <FaStar size={20} color="gold" />
                  <FaStar size={20} color="gold" />
                  <FaStar size={20} color="gold" />
                  <FaStar size={20} color="gold" />
                </p>
              </div>
            </div>
          </div>
          <div className="px-5">
            <div className="flex max-w-sm flex-col rounded-2xl shadow-lg shadow-slate-700">
              <div className="h-60 rounded-t-xl bg-white px-4 sm:px-8">
                <p className="poppins text-md relative py-7 text-center italic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="h-8 w-8 text-orangeboom"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias
                  possimus facere.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 h-8 w-8 text-orangeboom"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-b-xl bg-orangeboom p-8">
                <Image
                  width={1000}
                  height={1000}
                  src="/Images/person2.jpeg"
                  alt=""
                  className="-mt-16 mb-2 h-16 w-16 rounded-full bg-gray-500 bg-cover bg-center"
                />
                <p className="cabinet text-xl text-white">Distinctio Animi</p>
                <p className="flex gap-x-1">
                  <FaStar size={20} color="gold" />
                  <FaStar size={20} color="gold" />
                  <FaStar size={20} color="gold" />
                  <FaStar size={20} color="gold" />
                  <FaStar size={20} color="gold" />
                </p>
              </div>
            </div>
          </div>
          <div className="px-5">
            <div className="flex max-w-sm flex-col rounded-2xl shadow-lg shadow-slate-700">
              <div className="h-60 rounded-t-xl bg-white px-4 sm:px-8">
                <p className="poppins text-md relative py-7 text-center italic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="h-8 w-8 text-orangeboom"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias
                  possimus facere.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 h-8 w-8 text-orangeboom"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-b-xl bg-orangeboom p-8">
                <Image
                  width={1000}
                  height={1000}
                  src="/Images/person2.jpeg"
                  alt=""
                  className="-mt-16 mb-2 h-16 w-16 rounded-full bg-gray-500 bg-cover bg-center"
                />
                <p className="cabinet text-xl text-white">Distinctio Animi</p>
                <p className="flex gap-x-1">
                  <FaStar size={20} color="gold" />
                  <FaStar size={20} color="gold" />
                  <FaStar size={20} color="gold" />
                  <FaStar size={20} color="gold" />
                  <FaStar size={20} color="gold" />
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
