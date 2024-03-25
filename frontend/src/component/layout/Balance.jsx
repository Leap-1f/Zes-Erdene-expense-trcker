import Link from "next/link";
import { useEffect, useState } from "react";
import Balancesvg from "../../../public/Balancesvg";

export function Balance() {
  return (
    <div className="w-screen h-screen flex  bg-white justify-center">
      <div className=" flex-col flex items-center">
        <div className="flex justify-center  mt-10 w-[240px]"></div>
        <div className="flex flex-col mt-40  justify-center">
          <div className="flex justify-center">
            <Balancesvg/>
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
          How much cash do you have in your wallet?
        </div>
        <div>
          <button
            onClick={function JumpSignUp() {
              location.href = "/finish";
            }}
            className="btn btn-block rounded-3xl w-[384px] h-[48px] items-center text-white bg-blue-600 mt-10"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
