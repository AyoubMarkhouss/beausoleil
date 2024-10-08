import React from "react";
import { ComboboxDemo1 } from "@/components/ui/combobox1";
import { ComboboxDemo2 } from "@/components/ui/combobox2";
import { Date } from "@/components/ui/date";
import { Button } from "@/components/ui/button";
import { IoPersonOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { Datereturn } from "@/components/ui/datereturn";

const Searchbarupdate = () => {
  return (
    
      <div className="px-5 md:px-10 lg:px-20 py-5 lg:py-0">
        <div className="grid grid-cols-2 shadow-xl lg:grid-cols-6 shadow-slate-800">
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
            <Date />
          </div>
          <div className="flex h-24 w-full items-center justify-center border-r bg-white">
            <Datereturn />
          </div>
          <div className="col-span-2 flex h-24 w-full items-center justify-evenly bg-white lg:col-span-1">
            <IoPersonOutline size={20} className="stroke-orangeboom" />

            <div className="flex items-center space-x-2">
              {/* <button
                className="hidden rounded-l bg-gray-300 px-4 py-2 font-bold text-bigtitle hover:bg-gray-400 md:flex"
                onClick={decrementPassengers}
              >
                -
              </button> */}
              <input
                type="number"
                className="w-20 border border-gray-300 py-2 text-center md:w-20"
                placeholder=""
                min="0"
                required
              />
              {/* <button
                className="hidden rounded-r bg-gray-300 px-4 py-2 font-bold text-bigtitle hover:bg-gray-400 md:flex"
                onClick={incrementPassengers}
              >
                +
              </button> */}
            </div>
          </div>

          <Button className="cabinet group col-span-2 flex h-24 w-full items-center justify-center rounded-r-lg bg-bigtitle text-lg text-white hover:bg-textblue lg:col-span-1">
            <FaSearch size={20} className="mr-5 group-hover:fill-orangeboom" />
            Update
          </Button>
        </div>
      </div>
   
  );
};

export default Searchbarupdate;
function useState(arg0: number): [any, any] {
  throw new Error("Function not implemented.");
}
