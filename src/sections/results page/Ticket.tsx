import React from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowForward } from "react-icons/io";
import { WiTime4 } from "react-icons/wi";

const Ticket = () => {
  return (
    <div className="mb-5 grid h-56 md:h-44  w-full transform grid-cols-4 rounded-3xl border border-gray-300 bg-white px-5 shadow-lg transition-transform duration-500 ease-in-out hover:scale-105">
      <div className="col-span-1 flex flex-col items-center justify-center">
        <h1>Départ</h1>
        <h1 className="text-2xl font-semibold text-bigtitle">10:30</h1>
        <p>Casablanca</p>
      </div>

      <div className="col-span-2 flex flex-col items-center justify-center space-x-2 md:col-span-1">
        <h1 className="flex items-center gap-x-2">
          <WiTime4 size={20} className="fill-bigtitle" />
          07h51min
        </h1>
        <div className="flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-orangeboom"></div>

          <div className="h-0.5 w-20 xl:w-32 bg-purple-200"></div>

          <div className="h-3 w-3 rounded-full bg-orangeboom"></div>
        </div>
      </div>

      <div className="col-span-1 flex flex-col items-center justify-center">
        <h1>Arrivé</h1>
        <h1 className="text-2xl font-semibold text-bigtitle">12:45</h1>
        <p>Marrakech</p>
      </div>
      <div className="col-span-4 flex flex-col items-center justify-center border-l border-dotted pl-5 md:col-span-1">
        <h1>1 Passager</h1>
        <h1>à partir de</h1>
        <Button className="group md:w-20 lg:w-full rounded-full bg-bigtitle text-sm lg:text-xl text-white hover:bg-textblue">
          250 Dhs
          <IoIosArrowForward className="group-hover:fill-orangeboom" />
        </Button>
      </div>
    </div>
  );
};

export default Ticket;
