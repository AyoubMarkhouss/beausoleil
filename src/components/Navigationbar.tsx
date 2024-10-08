import Link from "next/link";
import React, { useState } from "react";
import HamburgerIcon from "@/components/HamburgerIcon";
import { FaBus } from "react-icons/fa";
import { Languages } from "./ui/languages";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Navigationbar = ({ className }: { className?: string }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  const toggleHamburger = (): void => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <>
      <div>
        <div className="flex justify-between px-10 py-4 text-white lg:px-20">
          <div className="flex items-center justify-center">
            <FaBus className="fill-bigtitle" size={25} />
            <h1 className="cabinet pl-1 pt-1 text-xl text-bigtitle">LOGO</h1>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex gap-x-10 text-xl text-bigtitle">
              <li>
                <Link
                  href="/"
                  className="cabinet flex transform cursor-pointer items-center gap-x-3 text-lg transition-transform duration-500 ease-in-out hover:scale-125 hover:text-orangeboom"
                >
                  Home
                </Link>
              </li>{" "}
              <li>
                <Link
                  href="/"
                  className="cabinet flex transform cursor-pointer items-center gap-x-3 text-lg transition-transform duration-500 ease-in-out hover:scale-125 hover:text-orangeboom"
                >
                  Book
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="cabinet flex transform cursor-pointer items-center gap-x-3 text-lg transition-transform duration-500 ease-in-out hover:scale-125 hover:text-orangeboom"
                >
                  Tariffs
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/"
                  className="cabinet flex transform cursor-pointer items-center gap-x-3 text-lg transition-transform duration-500 ease-in-out hover:scale-125 hover:text-orangeboom"
                >
                  Blog
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact"
                  className="cabinet flex transform cursor-pointer items-center gap-x-3 text-lg transition-transform duration-500 ease-in-out hover:scale-125 hover:text-orangeboom"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex gap-x-6 text-xl text-bigtitle">
              <li>
                <Link
                  href="/"
                  className="cabinet flex transform cursor-pointer items-center gap-x-3 text-lg transition-transform duration-500 ease-in-out hover:scale-125 hover:text-orangeboom"
                >
                  Language
                </Link>
              </li>
              <li>
                <SignedOut>
                  <SignInButton >
                    <a className="cabinet flex transform cursor-pointer items-center gap-x-3 text-lg transition-transform duration-500 ease-in-out hover:scale-125 text-white bg-orangeboom px-5 rounded-full">
                      Sign in
                    </a>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
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
                  <SignedOut>
                    <SignInButton>
                      <a className="cabinet flex transform cursor-pointer items-center gap-x-3 text-3xl transition-transform duration-500 ease-in-out hover:scale-125 hover:text-orangeboom">
                        Sign in
                      </a>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </li>
                <li>
                  <Link href="/" className="cabinet text-3xl">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/" className="cabinet text-3xl">
                    Book
                  </Link>
                </li>
                <li>
                  <Link href="/" className="cabinet text-3xl">
                    Tariffs
                  </Link>
                </li>
                <li>
                  <Link href="/" className="cabinet text-3xl">
                    Blog
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
    </>
  );
};

export default Navigationbar;
