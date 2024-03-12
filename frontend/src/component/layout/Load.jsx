import Link from "next/link";
import { useEffect, useState } from "react";

export function Load() {
  return (
    <div className="w-screen h-screen flex bg-white justify-center">
      <div className="flex-col max-w-[172px] flex justify-center items-center">
        <div className="flex gap-5 justify-center items-center ">
          <img className="w-[44px] h-[44px]" src="./Vector.svg" alt="" />
          <img className="w-[90px] h-[31px]" src="./Geld.svg" alt="" />
        </div>

        <div className="flex flex-col justify-center mt-24">
          <div className="flex justify-center ">
            <span className="loading loading-spinner loading-lg bg-blue-600"></span>
          </div>
          <div className="flex justify-center font-semibold text-xl leading-6 mt-10">
            Түр хүлээнэ үү...
          </div>
        </div>
      </div>
    </div>
  );
}
