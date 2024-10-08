import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { TbBus } from "react-icons/tb";
import { MdLocalAirport } from "react-icons/md";
import { FaCarAlt, FaRoad } from "react-icons/fa";

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className="mx-auto px-6 py-16 md:px-24 lg:px-20 lg:py-0 lg:pb-10">
      <div className="mb-10 flex flex-col gap-3 md:mb-12">
        <h2 className="cabinet flex gap-2 text-4xl text-bigtitle sm:text-5xl">
          Your Journey, Our Priority
        </h2>
        <p className="max-w-2xl text-base text-gray-500 md:text-xl">
          We offer safe and reliable bus travel for every journey. Wherever
          you&apos;re headed, we&apos;re here to make the trip smooth and
          enjoyable.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-5">
          <img
            className="col-span-2 h-56 w-full rounded object-cover shadow-lg"
            src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="h-48 w-full rounded object-cover shadow-lg"
            src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="h-48 w-full rounded object-cover shadow-lg"
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center gap-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : ""}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="mb-4 border-b pb-4"
          >
            <motion.h6 className="cabinet mb-2 flex items-center gap-2 text-xl text-bigtitle">
              Airport Transfers
            </motion.h6>
            <motion.div className="grid grid-cols-3 text-sm text-gray-900">
              <p className="col-span-2">
                Enjoy comfortable transfers to and from the airport with
                Beausoleil. Our services include flexible options to meet your
                needs, with competitive rates to make your journey as pleasant
                as possible.
              </p>
              <div className="flex items-center justify-center">
                <MdLocalAirport size={70} className="fill-orangeboom" />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : ""}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="mb-4 border-b pb-4"
          >
            <motion.h6 className="cabinet mb-2 flex items-center gap-2 text-xl text-bigtitle">
              Excursions
            </motion.h6>
            <motion.div className="grid grid-cols-3 text-sm text-gray-900">
              <p className="col-span-2">
                Explore our popular excursions, featuring fascinating city tours
                and scenic hikes. Each excursion is thoughtfully planned with
                details on duration, pricing, and points of interest, ensuring
                you have an unforgettable experience.
              </p>
              <div className="flex items-center justify-center">
                <FaRoad size={70} className="fill-orangeboom" />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : ""}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="mb-4 border-b pb-4"
          >
            <motion.h6 className="cabinet mb-2 flex items-center gap-2 text-xl text-bigtitle">
              Vehicle Rentals
            </motion.h6>
            <motion.div className="grid grid-cols-3 text-sm text-gray-900">
              <p className="col-span-2">
                For more freedom, choose from our vehicle rental options,
                including cars and minibuses. Our transparent rates and flexible
                terms allow you to travel at your own pace and according to your
                needs.
              </p>
              <div className="flex items-center justify-center">
                <FaCarAlt size={70} className="fill-orangeboom" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
