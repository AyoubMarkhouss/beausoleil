import React from "react";
import { IoTicketOutline } from "react-icons/io5";

const CTABookticket = () => {
  return (
    <section className="my-14 bg-textblue py-6">
      <div className="mx-10 flex flex-col items-center justify-center space-y-8 p-4  md:p-10 lg:flex-row lg:justify-between lg:space-y-0">
        <div className="flex flex-col gap-3">
          <h1 className="cabinet flex gap-2 text-center text-5xl text-white lg:text-left">
            Travel in Comfort
          </h1>
          <p className="text-xl text-gray-400">
            Enjoy a smooth and scenic ride to your destination. Book your ticket
            and travel in style!
          </p>
        </div>

        <button className="cabinet flex h-20 cursor-pointer items-center gap-2 bg-orangeboom px-8 py-3 text-lg text-white transition-transform duration-500 ease-in-out hover:scale-125">
          Book Your Ticket
          <IoTicketOutline />
        </button>
      </div>
    </section>
  );
};

export default CTABookticket;
