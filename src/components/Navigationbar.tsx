import Link from "next/link";
import React, { useState } from "react";
import HamburgerIcon from "@/components/HamburgerIcon";
import { FaBus } from "react-icons/fa";

const Navigationbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  const toggleHamburger = (): void => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <div className="">
      <div className="flex justify-between px-10 py-4 text-white lg:px-20">
        <div className="flex items-center justify-center">
          <FaBus className="fill-bigtitle" size={25} />
          <h1 className="cabinet text-bigtitle pl-1 pt-1 text-xl">LOGO</h1>
        </div>
        <div className="hidden lg:flex">
          <ul className="text-bigtitle flex gap-x-10 text-xl">
            <li>
              <Link href="/" className="cabinet">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="cabinet">
                Travel
              </Link>
            </li>
            <li>
              <Link href="/" className="cabinet">
                Places
              </Link>
            </li>
          </ul>
        </div>
        <div className="container lg:hidden">
          <HamburgerIcon
            isOpen={hamburgerOpen}
            toggleHamburger={toggleHamburger}
          />

          <nav className={hamburgerOpen ? "showMenuNav" : "hideMenuNav"}>
            <ul>
              <li>
                <Link href="/" className="cabinet text-3xl">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="cabinet text-3xl">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="cabinet text-3xl">
                  Travel
                </Link>
              </li>
              <li>
                <Link href="/" className="cabinet text-3xl">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigationbar;
