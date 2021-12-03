import React from "react";

const Services = ({id, img, link, title, about}) => {
  return (
    <>
      <div className="grid lg:grid-cols-4 sm:grid-cols-4 sm:gap-4 my-2">
        <div
              style={{
                backgroundImage: `url(${
                  img
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              className="lg:ml-2 sm:w-full w-64 md:h-32 sm:h-40 h-64 rounded-lg shadow-lg col-span-4 sm:col-span-1 mx-auto"
            ></div>
        <div className="col-span-3">
          <div className="text-gray-500 my-2 font-bold">
            <div
              className="cursor-pointer"
              onClick={() => window.open(link, "_blank")}
            >
              {title}
            </div>
          </div>
          <div className="text-gray-500">{about}</div>
        </div>
      </div>
    </>
  );
};

export default Services;
