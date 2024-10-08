import React from "react";
import { Filters } from "./Filters";
import Ticket from "./Ticket";

const Ticketsfilters = () => {
  return (
    <div className="min-h-screen px-5 lg:px-20">
      <div className="grid min-h-screen w-full grid-cols-5">
        <div className="col-span-2 hidden min-h-screen w-full flex-col px-10 md:flex">
          <div className="flex flex-col items-center justify-between border-b pb-5 pt-10 lg:flex-row">
            <h1 className="cabinet text-xl">Results (7)</h1>
          </div>
          <Filters />
        </div>
        <div className="col-span-5 min-h-screen w-full md:col-span-3 md:px-10 pt-10">
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
        </div>
      </div>
    </div>
  );
};

export default Ticketsfilters;
