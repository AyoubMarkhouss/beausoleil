import Link from "next/link";
import React from "react";
import { FaBus } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className=" mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
      <div className="row-gap-10 mb-8 grid gap-16 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <div className="flex items-center justify-center">
            <FaBus className="fill-bigtitle" size={25} />
            <h1 className="cabinet pl-1 pt-1 text-xl text-bigtitle">LOGO</h1>
          </div>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </div>
        <div className="row-gap-8 grid grid-cols-2 gap-5 md:grid-cols-4 lg:col-span-4">
          <div>
            <p className="cabinet text-xl font-semibold tracking-wide text-bigtitle">
              Category
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-gray-600 transition-colors duration-300"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-gray-600 transition-colors duration-300"
                >
                  World
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-gray-600 transition-colors duration-300"
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-gray-600 transition-colors duration-300"
                >
                  References
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="cabinet text-xl font-semibold tracking-wide text-bigtitle">
              Business
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-gray-600 transition-colors duration-300"
                >
                  Web
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-gray-600 transition-colors duration-300"
                >
                  eCommerce
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-gray-600 transition-colors duration-300"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-gray-600 transition-colors duration-300"
                >
                  Entertainment
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-gray-600 transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="cabinet text-xl font-semibold tracking-wide text-bigtitle">
              Apples
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-gray-600 transition-colors duration-300"
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-gray-600 transition-colors duration-300"
                >
                  Brochure
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-gray-600 transition-colors duration-300"
                >
                  Nonprofit
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-gray-600 transition-colors duration-300"
                >
                  Educational
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-gray-600 transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="cabinet text-xl font-semibold tracking-wide text-bigtitle">
              Cherry
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-gray-600 transition-colors duration-300"
                >
                  Infopreneur
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-gray-600 transition-colors duration-300"
                >
                  Personal
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-gray-600 transition-colors duration-300"
                >
                  Wiki
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-gray-600 transition-colors duration-300"
                >
                  Forum
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between border-t pb-10 pt-5 sm:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2024 Beausoleil. All rights reserved.
        </p>
        <div className="mt-4 flex items-center space-x-4 sm:mt-0">
          <Link
            href="/"
            className="hover:text-deep-purple-accent-400 text-gray-500 transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
            </svg>
          </Link>
          <Link
            href="/"
            className="hover:text-deep-purple-accent-400 text-gray-500 transition-colors duration-300"
          >
            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
              <circle cx="15" cy="15" r="4" />
              <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
            </svg>
          </Link>
          <Link
            href="/"
            className="hover:text-deep-purple-accent-400 text-gray-500 transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
