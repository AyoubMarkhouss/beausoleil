import Image from "next/image";
import React from "react";
import { LuMapPin } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";

const Places = () => {
  return (
    <div className="px-10 lg:px-20">
      <div className="flex flex-col gap-3">
        <h1 className="cabinet text-4xl text-bigtitle">
          Top travel packages this month
        </h1>
        <p className="text-xl">Explore most trending tour packages</p>
      </div>
      <div className="justify-center py-10">
        <div className="grid w-full md:grid-cols-2 lg:grid-cols-4">
          <div className="flex transform cursor-pointer flex-col justify-center gap-2 pb-10 transition-transform duration-500 ease-in-out hover:scale-105">
            <div className="w-full pb-2 lg:w-64">
              <Image
                className="h-64 w-full rounded-xl shadow-xl shadow-gray-300 lg:w-64"
                alt="zz"
                src="/Images/Banner.jpg"
                width={2000}
                height={2000}
              />
            </div>
            <h1 className="cabinet transform cursor-pointer text-xl transition-transform duration-500 ease-in-out hover:scale-105">
              Trip to Bangladesh
            </h1>
            <div className="flex items-center gap-x-2">
              <LuMapPin color="gray" />
              <p className="text-gray-600">Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center gap-x-2">
              <FaRegStar color="gray" />
              <p className="text-gray-600">4.9 (452 reviewers)</p>
            </div>
            <p className="cabinet text-xl">250$</p>
          </div>
          <div className="flex transform cursor-pointer flex-col justify-center gap-2 pb-10 transition-transform duration-500 ease-in-out hover:scale-105">
            <div className="w-full pb-2 lg:w-64">
              <Image
                className="h-64 w-full rounded-xl shadow-xl shadow-gray-300 lg:w-64"
                alt="zz"
                src="/Images/Banner.jpg"
                width={2000}
                height={2000}
              />
            </div>
            <h1 className="cabinet transform cursor-pointer text-xl transition-transform duration-500 ease-in-out hover:scale-105">
              Trip to Bangladesh
            </h1>
            <div className="flex items-center gap-x-2">
              <LuMapPin color="gray" />
              <p className="text-gray-600">Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center gap-x-2">
              <FaRegStar color="gray" />
              <p className="text-gray-600">4.9 (452 reviewers)</p>
            </div>
            <p className="cabinet text-xl">250$</p>
          </div>
          <div className="flex transform cursor-pointer flex-col justify-center gap-2 pb-10 transition-transform duration-500 ease-in-out hover:scale-105">
            <div className="w-full pb-2 lg:w-64">
              <Image
                className="h-64 w-full rounded-xl shadow-xl shadow-gray-300 lg:w-64"
                alt="zz"
                src="/Images/Banner.jpg"
                width={2000}
                height={2000}
              />
            </div>
            <h1 className="cabinet transform cursor-pointer text-xl transition-transform duration-500 ease-in-out hover:scale-105">
              Trip to Bangladesh
            </h1>
            <div className="flex items-center gap-x-2">
              <LuMapPin color="gray" />
              <p className="text-gray-600">Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center gap-x-2">
              <FaRegStar color="gray" />
              <p className="text-gray-600">4.9 (452 reviewers)</p>
            </div>
            <p className="cabinet text-xl">250$</p>
          </div>
          <div className="flex transform cursor-pointer flex-col justify-center gap-2 pb-10 transition-transform duration-500 ease-in-out hover:scale-105">
            <div className="w-full pb-2 lg:w-64">
              <Image
                className="h-64 w-full rounded-xl shadow-xl shadow-gray-300 lg:w-64"
                alt="zz"
                src="/Images/Banner.jpg"
                width={2000}
                height={2000}
              />
            </div>
            <h1 className="cabinet transform cursor-pointer text-xl transition-transform duration-500 ease-in-out hover:scale-105">
              Trip to Bangladesh
            </h1>
            <div className="flex items-center gap-x-2">
              <LuMapPin color="gray" />
              <p className="text-gray-600">Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center gap-x-2">
              <FaRegStar color="gray" />
              <p className="text-gray-600">4.9 (452 reviewers)</p>
            </div>
            <p className="cabinet text-xl">250$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;
