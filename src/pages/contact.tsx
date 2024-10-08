import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Navigationbar from "@/components/Navigationbar";
import { Footer } from "@/components/Footer";
import { FaFacebookSquare, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

const Contact: React.FC = () => {
  // const form = useRef(null);
  // const sendmail = (e: any) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_xtumf3n",
  //       "template_371wdj8",
  //       form.current ?? "",
  //       "o5b6L4O0hbKhXDtfE",
  //     )

  //     .then(
  //       () => {
  //         toast.success("message envoyé!");
  //       },
  //       () => {
  //         toast.error("Quelque chose ne va pas :(");
  //       },
  //     );
  //   e.target.reset();
  // };
  return (
    <>
      <Navigationbar />
      <Head>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <title>Beausoleil - Contact</title>
        <meta property="og:image" content="" />
      </Head>
      <div
        className="contact relative mx-auto min-h-screen bg-textblue"
        id="contact"
      >
        <div className=" "></div>
        <div className="mx-auto px-2 sm:px-6 md:px-8 lg:px-20">
          <div className="lg:-mx-6 lg:flex">
            <div className="pt-20 lg:w-1/2">
              <h1 className="cabinet z-30 text-4xl text-white md:font-semibold lg:text-7xl">
                Contact us !
              </h1>
              <div className="">
                <span className="inline-block h-1 w-36 rounded-full bg-orangeboom md:w-52"></span>
                <span className="ml-1 inline-block h-1 w-14 rounded-full bg-orangeboom"></span>
                <span className="ml-1 inline-block h-1 w-5 rounded-full bg-orangeboom"></span>
              </div>
              <div className="flex items-center gap-x-2 pb-5 pt-5 text-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23057.89429170858!2d7.402000893561287!3d43.74717945254349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc2636800aa91%3A0xf0a2a597600742c6!2s06240%20Beausoleil%2C%20France!5e0!3m2!1sfr!2sma!4v1727975381372!5m2!1sfr!2sma"
                  width="600"
                  height="250"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="flex items-center gap-x-2 pb-5 text-white">
                <FaLocationDot size={20} className="fill-orangeboom" />
                <h2 className="text-lg">
                  25 Rue Nichakra Rahal, Casablanca 20250
                </h2>
              </div>
              <div className="flex items-center gap-x-2 pb-5 text-white">
                <FaPhoneAlt size={20} className="fill-orangeboom" />
                <h2 className="text-lg">05 22 22 22 22 </h2>
              </div>
              <div className="flex gap-x-2">
                <FaFacebookSquare
                  size={30}
                  className="cursor-pointer fill-white transition-transform duration-500 ease-in-out hover:scale-110 hover:fill-orangeboom"
                />
                <RiInstagramFill
                  size={30}
                  className="cursor-pointer fill-white transition-transform duration-500 ease-in-out hover:scale-110 hover:fill-orangeboom"
                />
                <FaLinkedin
                  size={30}
                  className="cursor-pointer fill-white transition-transform duration-500 ease-in-out hover:scale-110 hover:fill-orangeboom"
                />
              </div>
            </div>

            <div className="z-30 m-5 mt-32 lg:mx-6 lg:w-1/2">
              <div className="mx-auto w-full overflow-hidden rounded-3xl p-3 md:px-8 md:py-10 lg:max-w-xl">
                <div className="mt-3">
                  <form className="text-white" >
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="">
                        <label>Full name</label>
                        <input
                          className="focus:border-orangeboom mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-2 font-normal text-white outline-none transition-all placeholder:text-gray-500"
                          name="full_name"
                          id="full_name"
                          required
                        />
                      </div>

                      <div className="mb-6">
                        <label>Phone</label>
                        <input
                          className="focus:border-orangeboom mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-2 font-normal text-white outline-none transition-all placeholder:text-gray-500"
                          name="phone"
                          id="phone"
                          type="tel"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label>E-mail</label>
                      <input
                        className="focus:border-orangeboom mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-2 font-normal text-white outline-none transition-all placeholder:text-gray-500"
                        name="user_email"
                        id="email"
                        type="email"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label>Message</label>
                      <textarea
                        className="focus:border-orangeboom mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-2 font-normal text-white outline-none transition-all placeholder:text-gray-500"
                        id="message"
                        name="message"
                        rows={4}
                        required
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button
                        className="cabinet inline-flex h-14 w-full items-center justify-center rounded-md border border-transparent bg-orangeboom px-5 py-2.5 text-lg text-slate-50 transition-transform duration-500 ease-in-out hover:scale-105"
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          position="bottom-right"
          hideProgressBar={true}
          theme="light"
          autoClose={2000}
        />
      </div>
      <Footer />
    </>
  );
};
export default Contact;
