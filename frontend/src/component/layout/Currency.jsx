import Link from "next/link";
import { useEffect, useState } from "react";

export function Currency() {
  return (
    <div className="w-screen h-screen flex  bg-white justify-center">
      <div className=" flex-col flex items-center">
        <div className="flex justify-center  mt-10 w-[240px]">
          <img src="./Frame 14.svg" alt="" />
        </div>
        <div className="flex flex-col mt-40  justify-center">
          <div className="flex justify-center">
            <img src="./Frame 9.svg" alt="" />
          </div>
          <div className="dropdown flex justify-center">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 flex w-[384px] mt-10"
            >
              MNT - Mongolian Tugrug
              <div>
                <img src="./drop.svg" alt="" />
              </div>
            </div>
            <div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>USA - USA DOLLAR</a>
                </li>
                <li>
                  <a>CNY - CHINESE YUAN</a>
                </li>
                <li>
                  <a>KRW - KOREA WON</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center  mt-5">
          Your base currency should be the one you use most often. All <br />
          transaction in other currencies will be calculated based on this one
        </div>
        <div>
          <button
            onClick={function JumpSignUp() {
              location.href = "http://localhost:3000/balance";
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
