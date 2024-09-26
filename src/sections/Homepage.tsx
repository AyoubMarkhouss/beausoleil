import React from "react";
import Navigationbar from "@/components/Navigationbar";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ComboboxDemo1 } from "@/components/ui/combobox1";
import { ComboboxDemo2 } from "@/components/ui/combobox2";
import { DatePickerDemo } from "@/components/ui/datepicker";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";


const Homepage = () => {
  const [passengers, setPassengers] = useState(1);

  const incrementPassengers = () => {
    setPassengers((prev) => prev + 1);
  };

  const decrementPassengers = () => {
    if (passengers > 1) {
      setPassengers((prev) => prev - 1);
    }
  };

  return (
    <div className="mb-20">
      <Navigationbar />
      <div className="flex h-96 w-full items-center justify-center">
        <h1 className="cabinet absolute text-center text-4xl text-white md:text-5xl lg:text-6xl">
          Find cheap tickets for your next trip
        </h1>
        <div className="-z-20 h-full object-cover relative">
          <Image
            alt="banner"
            src="/Images/Banner.jpg"
            height={2500}
            width={2500}
            className="h-full object-cover"
          />
          <div className="bg-black/20 w-screen top-0 left-0 absolute h-full"></div>
        </div>
      </div>
      <div className="-mt-20 px-5 md:-mt-20 md:px-10 lg:-mt-10 lg:px-20">
        <div className="grid grid-cols-2 shadow-xl lg:grid-cols-5">
          <div className="flex h-24 w-full items-center border-r bg-white">
            <ComboboxDemo1 />
          </div>
          {/* <div className="flex h-20 w-full items-center justify-center bg-white">
            <FaLongArrowAltRight color="gray" />
          </div> */}
          <div className="flex h-24 w-full items-center justify-center border-r bg-white">
            <ComboboxDemo2 />
          </div>
          <div className="flex h-24 w-full items-center justify-center border-r bg-white">
            <DatePickerDemo />
          </div>
          <div className="flex h-24 w-full items-center justify-evenly bg-white">
            <IoPersonOutline size={20} className="stroke-orangeboom" />

            <div className="flex items-center space-x-2">
              <button
                className="hidden rounded-l bg-gray-300 px-4 py-2 font-bold text-bigtitle hover:bg-gray-400 md:flex"
                onClick={decrementPassengers}
              >
                -
              </button>
              <input
                type="number"
                className="w-20 border border-gray-300 py-2 text-center md:w-20"
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                placeholder="Number of passengers"
                min="0"
                required
              />
              <button
                className="hidden rounded-r bg-gray-300 px-4 py-2 font-bold text-bigtitle hover:bg-gray-400 md:flex"
                onClick={incrementPassengers}
              >
                +
              </button>
            </div>
          </div>

          <Button className="cabinet group col-span-2 flex h-24 w-full items-center justify-center rounded-r-lg bg-bigtitle text-lg text-white hover:bg-textblue lg:col-span-1">
            <FaSearch size={20} className="mr-5 group-hover:fill-orangeboom" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
