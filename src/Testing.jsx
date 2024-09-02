import React from "react";
import { Link } from "react-router-dom";

function Testing() {
  return (
    <>
      <div className="flex gap-[20px]">
        <h2 className="text-red-700 text-3xl">Testing.....!!!</h2>

        <Link
          className=" border-[2px] w-[100px] flex justify-center rounded-lg text-white text-center text-lg bg-green-300"
          to={"/"}
        >
          Home
        </Link>
      </div>
    </>
  );
}

export default Testing;
