import Link from "next/link";
import { useEffect, useState } from "react";
import Finishsvg from "../../../public/Finishsvg";
export function Finish() {
  return (
    <div className="w-screen h-screen flex  bg-white justify-center">
      <div className=" flex-col flex items-center">
        <div className="flex justify-center  mt-10 w-[240px]">
          <Finishsvg />
        </div>
        <div className="flex flex-col mt-40  justify-center">
          <div className="flex justify-center">
            <img src="./Check.svg" alt="" />
          </div>
          <div className="flex justify-center">
            <img src="./Good.svg" alt="" />
          </div>
          <div className="flex justify-center mt-10 w-[384px]">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-screen bg-slate-200 mt-5 "
            />
          </div>
        </div>
        <div className="flex justify-center  mt-5">
          Your very first account has been created. Now <br /> continue to
          dashboard and start tracking
        </div>
        <div>
          <button
            onClick={function JumpSignUp() {
              location.href = "/dashboard";
            }}
            className="btn btn-block rounded-3xl w-[384px] h-[48px] items-center text-white bg-blue-600 mt-10"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
