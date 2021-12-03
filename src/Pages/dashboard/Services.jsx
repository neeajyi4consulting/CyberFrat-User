import React from "react";

const Boxfooter = ({id, img, link, title}) => {
  return (
    <div key={id}>
      <div className="w-full h-auto">
      <div
              style={{
                backgroundImage: `url(${
                  img
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              className=" w-full h-40 rounded-lg"
            ></div>
        <div
          className="cursor-pointer text-gray-500 text-center text-xl my-1"
          onClick={() => window.open(link, "_blank")}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default Boxfooter;
