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
    <div>
      <Navigationbar />
      <div className="flex h-96 w-full items-center justify-center">
        <h1 className="cabinet text-center absolute text-4xl md:text-5xl lg:text-6xl text-white">
          Find cheap tickets for your next trip
        </h1>
        <Image
          alt="banner"
          src="/Images/Banner.jpg"
          height={2500}
          width={2500}
          className="h-full object-cover"
        />
      </div>
      <div className="-mt-20 md:-mt-20 lg:-mt-10 px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 shadow-xl">
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
            <IoPersonOutline size={20} color="gray" />

            <div className="flex items-center space-x-2">
              <button
                className="hidden md:flex rounded-l bg-gray-300 px-4 py-2 font-bold text-bigtitle hover:bg-gray-400"
                onClick={decrementPassengers}
              >
                -
              </button>
              <input
                type="number"
                className="w-20 md:w-20 border border-gray-300 py-2 text-center"
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                placeholder="Number of passengers"
                min="1"
              />
              <button
                className="hidden md:flex rounded-r bg-gray-300 px-4 py-2 font-bold text-bigtitle hover:bg-gray-400"
                onClick={incrementPassengers}
              >
                +
              </button>
            </div>
          </div>

          <Button className="cabinet col-span-2 lg:col-span-1 flex h-24 w-full items-center justify-center bg-bigtitle text-lg text-white hover:bg-textblue">
            <FaSearch size={20} className="mr-5" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
