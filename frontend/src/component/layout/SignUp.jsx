import Link from "next/link";
import { useEffect, useState } from "react";

export function SignUp() {
  return (
    <div>
      <div className="w-screen h-screen flex">
        <div className="w-[50%] h-screen bg-white flex justify-center ">
          <div className="flex-col max-w-[384px] ">
            <div className="flex gap-5 justify-center items-center mt-[276px]">
              <img className="w-[24px] h-[24px]" src="./Vector.svg" alt="" />
              <img className="w-[48px] h-[16px]" src="./Geld.svg" alt="" />
            </div>
            <div className="flex justify-center font-semibold text-2xl leading-8 mt-5">
              Create Geld account
            </div>
            <div className="flex justify-center font-normal text-base leading-6 mt-4">
              Sign up below to create your Wallet account
            </div>
            <div className="flex gap-5 flex-col mt-10">
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-screen bg-slate-200"
                />
              </div>
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-screen bg-slate-200  "
                />
              </div>
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="Password"
                  className="input input-bordered w-screen bg-slate-200 "
                />
              </div>
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="Repassword"
                  className="input input-bordered w-screen bg-slate-200 "
                />
              </div>
              <button className="btn btn-block rounded-3xl h-[48px] items-center text-white bg-blue-600 mt-5">
                Sign up
              </button>
            </div>

            <div className="flex justify-evenly mt-12">
              <div>Already have account ?</div>
              <div>
                <button
                  onClick={function JumpSignUp() {
                    location.href = "/currency";
                  }}
                  className="text-blue-600"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-screen bg-blue-600"></div>
      </div>
    </div>
  );
}
