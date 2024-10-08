import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { LuMapPin } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { CgArrowLongRightR } from "react-icons/cg";
import { MdAccessTime } from "react-icons/md";
import { TbBus } from "react-icons/tb";

const Places = () => {
  return (
    <div className="px-6 pt-5 lg:px-20">
      <div className="flex flex-col gap-3">
        <h1 className="cabinet flex gap-2 text-4xl text-bigtitle md:text-5xl">
          Top travel packages this month
        </h1>
        <p className="max-w-2xl text-gray-500 md:text-xl">
          Discover our best travel deals this month. Explore exciting
          destinations at unbeatable prices, perfect for your next adventure.
        </p>
      </div>
      <div className="justify-center pt-10">
        <div className="grid w-full gap-x-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex transform cursor-pointer flex-col justify-center gap-2 pb-10">
            <div className="z-40 w-full pb-2 lg:w-full">
              <Image
                className="h-64 w-full rounded-xl shadow-gray-300 lg:w-full"
                alt="zz"
                src="/Images/casablanca.jpg"
                width={2000}
                height={2000}
              />
            </div>
            <div className="z-0 -mt-10 rounded-2xl border p-3 pt-10 shadow-lg">
              <h1 className="cabinet flex transform cursor-pointer items-center gap-x-3 text-xl transition-transform duration-500 ease-in-out hover:scale-105">
                Taroudant
                <CgArrowLongRightR size={20} className="text-orangeboom" />
                Casablanca
              </h1>
              <div className="flex items-center gap-x-2">
                <LuMapPin color="gray" />
                <p className="text-gray-600">Casablanca</p>
              </div>
              <div className="flex items-center gap-x-2">
                <FaRegStar color="gray" />
                <p className="text-gray-600">4.9 (452 reviewers)</p>
              </div>

              <p className="flex items-center gap-x-2 text-gray-500">
                <MdAccessTime />6 hours
              </p>

              <p className="cabinet flex justify-end text-lg">320 Dhs</p>
            </div>
          </div>{" "}
          <div className="flex transform cursor-pointer flex-col justify-center gap-2 pb-10">
            <div className="z-40 w-full pb-2 lg:w-full">
              <Image
                className="h-64 w-full rounded-xl shadow-gray-300 lg:w-full"
                alt="zz"
                src="/Images/rabat.jpg"
                width={2000}
                height={2000}
              />
            </div>
            <div className="z-0 -mt-10 rounded-2xl border p-3 pt-10 shadow-lg">
              <h1 className="cabinet flex transform cursor-pointer items-center gap-x-3 text-xl transition-transform duration-500 ease-in-out hover:scale-105">
                Casablanca
                <CgArrowLongRightR size={20} className="text-orangeboom" />
                Rabat
              </h1>
              <div className="flex items-center gap-x-2">
                <LuMapPin color="gray" />
                <p className="text-gray-600">Rabat</p>
              </div>
              <div className="flex items-center gap-x-2">
                <FaRegStar color="gray" />
                <p className="text-gray-600">4.9 (452 reviewers)</p>
              </div>

              <p className="flex items-center gap-x-2 text-gray-500">
                <MdAccessTime />6 hours
              </p>

              <p className="cabinet flex justify-end text-lg">320 Dhs</p>
            </div>
          </div>{" "}
          <div className="flex transform cursor-pointer flex-col justify-center gap-2 pb-10">
            <div className="z-40 w-full pb-2 lg:w-full">
              <Image
                className="h-64 w-full rounded-xl shadow-gray-300 lg:w-full"
                alt="zz"
                src="/Images/marrakech.jpg"
                width={2000}
                height={2000}
              />
            </div>
            <div className="z-0 -mt-10 rounded-2xl border p-3 pt-10 shadow-lg">
              <h1 className="cabinet flex transform cursor-pointer items-center gap-x-3 text-xl transition-transform duration-500 ease-in-out hover:scale-105">
                Oujda
                <CgArrowLongRightR size={20} className="text-orangeboom" />
                Marrakech
              </h1>
              <div className="flex items-center gap-x-2">
                <LuMapPin color="gray" />
                <p className="text-gray-600"> Marrakech</p>
              </div>
              <div className="flex items-center gap-x-2">
                <FaRegStar color="gray" />
                <p className="text-gray-600">4.9 (452 reviewers)</p>
              </div>

              <p className="flex items-center gap-x-2 text-gray-500">
                <MdAccessTime />6 hours
              </p>

              <p className="cabinet flex justify-end text-lg">320 Dhs</p>
            </div>
          </div>{" "}
          <div className="flex transform cursor-pointer flex-col justify-center gap-2 pb-10">
            <div className="z-40 w-full pb-2 lg:w-full">
              <Image
                className="h-64 w-full rounded-xl shadow-gray-300 lg:w-full"
                alt="zz"
                src="/Images/tanger.jpg"
                width={2000}
                height={2000}
              />
            </div>
            <div className="z-0 -mt-10 rounded-2xl border p-3 pt-10 shadow-lg">
              <h1 className="cabinet flex transform cursor-pointer items-center gap-x-3 text-xl transition-transform duration-500 ease-in-out hover:scale-105">
                Marrakech
                <CgArrowLongRightR size={20} className="text-orangeboom" />
                Tanger
              </h1>
              <div className="flex items-center gap-x-2">
                <LuMapPin color="gray" />
                <p className="text-gray-600">Tanger</p>
              </div>
              <div className="flex items-center gap-x-2">
                <FaRegStar color="gray" />
                <p className="text-gray-600">4.9 (452 reviewers)</p>
              </div>

              <p className="flex items-center gap-x-2 text-gray-500">
                <MdAccessTime />6 hours
              </p>

              <p className="cabinet flex justify-end text-lg">320 Dhs</p>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Places;
