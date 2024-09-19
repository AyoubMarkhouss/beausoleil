import React from "react";

export const Aboutus = () => {
  return (
    <div className="mx-auto px-6 py-16 md:px-24 lg:px-20 lg:py-10">
      <div className="mb-10 flex flex-col gap-3 md:mb-12">
        <h2 className="cabinet text-4xl text-bigtitle sm:text-5xl">
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
          <div className="border-orangeboom mb-4 border-b pb-4">
            <h6 className="cabinet mb-2 text-xl">
              Sit error voluptatem accusantium
            </h6>
            <p className="text-sm text-gray-900">
              Sportacus andrew weatherall goose Refined gentlemen super mario
              des lynam alpha trion zap rowsdower, omar sharif old.
            </p>
          </div>
          <div className="border-orangeboom mb-4 border-b pb-4">
            <h6 className="cabinet mb-2 text-xl">
              Cheese on toast airedale the big cheese
            </h6>
            <p className="text-sm text-gray-900">
              Chase ball of string eat plants, meow, and throw up because I ate
              plants going to catch the red dot today going to catch the red dot
              today. I could pee on this if I had the energy.
            </p>
          </div>
          <div className="border-orangeboom mb-4 border-b pb-4">
            <h6 className="cabinet mb-2 text-xl">
              A flower in my garden, a mystery
            </h6>
            <p className="text-sm text-gray-900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae doloremque laudantium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
