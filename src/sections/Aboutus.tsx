import React from "react";

export const Aboutus = () => {
  return (
    <div className="mx-auto px-5 pb-20 pt-10 sm:max-w-xl md:max-w-full md:px-24 lg:px-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center lg:max-w-lg">
          <div className="flex flex-col gap-3">
            <h2 className="cabinet text-4xl text-bigtitle sm:text-5xl">
              Beausoleil Your Travel Companion
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              At Beausoleil, we&apos;re dedicated to making your bus travel
              experience seamless and enjoyable. Our modern fleet and friendly
              team ensure comfort and safety on every journey. Whether
              you&apos;re commuting or exploring new destinations, we&apos;re
              here to connect you with your next adventure. Thank you for
              choosing Beausoleil as your travel partner!
            </p>
          </div>
        </div>
        <div className="-mx-4 flex items-center justify-center lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="mb-6 h-28 w-28 rounded object-cover shadow-lg sm:h-48 sm:w-48 xl:h-56 xl:w-56"
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <img
              className="h-20 w-20 rounded object-cover shadow-lg sm:h-32 sm:w-32 xl:h-40 xl:w-40"
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="h-40 w-40 rounded object-cover shadow-lg sm:h-64 sm:w-64 xl:h-80 xl:w-80"
              src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
