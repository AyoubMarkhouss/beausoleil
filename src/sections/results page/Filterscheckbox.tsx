"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { WiSunrise } from "react-icons/wi";
import { MdSunny } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";
export function Filterscheckbox() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center space-x-3">
        <Checkbox id="terms" />
        <WiSunrise size={25} className="fill-yellow-400" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Early
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <Checkbox id="terms" />
        <MdSunny size={25} className="fill-orange-400" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Midday
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <Checkbox id="terms" />
        <BsStars size={25} className="fill-purple-950" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Nighttime
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <Checkbox id="terms" />
        <IoMoon size={25} className="fill-bigtitle" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Late
        </label>
      </div>
    </div>
  );
}
