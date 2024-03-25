import Link from "next/link";
import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

const dataBar = {
  labels: ["Jul", "Jul", "Jul", "Jul", "Jul", "Jul", "Jul"],
  datasets: [
    {
      data: [100, 100, 100, 100, 100, 100, 100],
      backgroundColor: [
        "rgb(132, 204, 22)",
        "rgb(132, 204, 22)",
        "rgb(132, 204, 22)",
        "rgb(132, 204, 22)",
        "rgb(132, 204, 22)",
      ],
      hoverOffset: 4,
      borderRadius: 50,
    },
    {
      data: [75, 75, 75, 75, 75, 75, 75],
      backgroundColor: [
        "rgb(249, 115, 22)",
        "rgb(249, 115, 22)",
        "rgb(249, 115, 22)",
        "rgb(249, 115, 22)",
        "rgb(249, 115, 22)",
      ],
      hoverOffset: 4,
      borderRadius: 50,
    },
  ],
};

const optionsBar = {
  plugins: {
    legend: {
      position: "right",
      display: false,
    },
  },
  elements: {
    bar: {
      borderRadius: 50,
      barSpacing: 10,
    },
    point: {
      borderRadius: 10,
    },

    categorySpacing: 0,
  },
};

const options = {
  plugins: {
    legend: {
      position: "right",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        padding: 10,
      },
    },
  },
};
export const data = {
  labels: ["Bills", "Food", "Shopping", "Insurance", "Clothing"],
  datasets: [
    {
      label: "# of Votes",
      data: [14, 16, 10, 13, 6, 9],

      backgroundColor: [
        "rgba(28, 100, 242, 1)",
        "rgba(216, 27, 96)",
        "rgba(253, 186, 140, 1)",
        "rgba(22, 189, 202, 1)",
        "rgba(242, 144, 28, 1)",
      ],
      borderColor: [
        "rgba(28, 100, 242, 1)",
        "rgba(216, 27, 96)",
        "rgba(253, 186, 140, 1)",
        "rgba(22, 189, 202, 1)",
        "rgba(242, 144, 28, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function Record() {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between mx-60 bg-white  h-[72px]">
        <div className="flex items-center gap-5  ">
          <img src="./Vector.svg" alt="" />
          <div className="font-semibold text-base">Dashboard</div>
          <div>Records</div>
        </div>
        <div className="flex items-center gap-5  ">
          <button className="btn w-[120px] h-[12px] rounded-full text-white bg-blue-600 flex items-center">
            + Record
          </button>
          <div>
            <img src="./Avatar.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="w-screen h-screen bg-slate-200">
        <div className="flex mx-60">
          <div className="w-[282px] bg-slate-50 flex flex-col mr-20 rounded-lg mt-8">
            <h3 className="ml-5 mt-5 font-semibold text-2xl">Records</h3>
            <div>
              <button onClick={function JumpSignUp() {
                  location.href = "/add_record";
                }} className="btn w-[250px] h-[32px] rounded-full text-white bg-blue-600 flex justify-center items-center mt-5 ml-4">
                + Add
              </button>
            </div>
            <div>
              <label className="input input-bordered flex items-center gap-2 w-[250px] h-[32px] ml-4 bg-slate-200 mt-5">
                <input type="text" className="grow" placeholder="Search" />
              </label>
            </div>
            <div className="flex-col flex mt-5">
              <div className="ml-5">
                <h3 className=" font-semibold text-base">Types</h3>
              </div>
              <div className="flex-col flex gap-[16px]">
                <div className="flex items-center gap-2 ml-8 ">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio w-[16px] h-[16px]"
                  />
                  All
                </div>
                <div className="flex items-center gap-2 ml-8 ">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio w-[16px] h-[16px]"
                  />
                  Income
                </div>
                <div className="flex items-center gap-2 ml-8 ">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio w-[16px] h-[16px]"
                  />
                  Expense
                </div>
              </div>
              <div className="flex-col mt-[24px] flex gap-[16px]">
                <div className="flex justify-between">
                  <h3 className="ml-5 font-semibold text-base">Category</h3>
                  <button className="mr-6">Clear</button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2 ml-8 items-center">
                    <img className="w-[20px] h-[20px]" src="./Eye.svg" alt="" />
                    <p>Food & Drinks</p>
                  </div>
                  <div>
                    <img src="./add.svg" alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 ml-8 items-center">
                    <img className="w-[20px] h-[20px]" src="./Eye.svg" alt="" />
                    <p>Shopping</p>
                  </div>
                  <div>
                    <img src="./add.svg" alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 ml-8 items-center">
                    <img className="w-[20px] h-[20px]" src="./Eye.svg" alt="" />
                    <p>Housing</p>
                  </div>
                  <div>
                    <img src="./add.svg" alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 ml-8 items-center">
                    <img className="w-[20px] h-[20px]" src="./Eye.svg" alt="" />
                    <p>Transportation</p>
                  </div>
                  <div>
                    <img src="./add.svg" alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 ml-8 items-center">
                    <img className="w-[20px] h-[20px]" src="./Eye.svg" alt="" />
                    <p>Vehicle</p>
                  </div>
                  <div>
                    <img src="./add.svg" alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 ml-8 items-center">
                    <img className="w-[20px] h-[20px]" src="./Eye.svg" alt="" />
                    <p>Life & Entertainment</p>
                  </div>
                  <div>
                    <img src="./add.svg" alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 ml-8 items-center">
                    <img className="w-[20px] h-[20px]" src="./Eye.svg" alt="" />
                    <p>Communication, PC</p>
                  </div>
                  <div>
                    <img src="./add.svg" alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 ml-8 items-center">
                    <img className="w-[20px] h-[20px]" src="./Eye.svg" alt="" />
                    <p>Financial expenses</p>
                  </div>
                  <div>
                    <img src="./add.svg" alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 ml-8 items-center">
                    <img className="w-[20px] h-[20px]" src="./Eye.svg" alt="" />
                    <p>Investments</p>
                  </div>
                  <div>
                    <img src="./add.svg" alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 ml-8 items-center">
                    <img className="w-[20px] h-[20px]" src="./Eye.svg" alt="" />
                    <p>Income</p>
                  </div>
                  <div>
                    <img src="./add.svg" alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 ml-8 items-center">
                    <img className="w-[20px] h-[20px]" src="./Eye.svg" alt="" />
                    <p>Others</p>
                  </div>
                  <div>
                    <img src="./add.svg" alt="" />
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <button>
                    <img
                      className="ml-8 items-center"
                      src="./Plus.svg"
                      alt=""
                    />
                  </button>
                  Add Category
                </div>
              </div>
              <div className="flex-col mt-[24px] flex gap-[16px]">
                <h3 className="ml-5 font-semibold text-base">Amount Range</h3>
                <div className="flex">
                  <div className="w-[114px] h-[48px] border-solid border-2 bg-slate-100 border-base-300 rounded-lg ml-5 pl-4 flex items-center">
                    0
                  </div>
                  <div className="w-[114px] h-[48px] border-solid border-2 bg-slate-100 border-base-300 rounded-lg ml-5 pl-4 flex items-center">
                    1000
                  </div>
                </div>
              </div>
              <div className="flex ml-5 w-[214px] mt-3">
                <img src="./white.svg" alt="" />
                <img src="./blue.svg" alt="" />
                <img src="./white.svg" alt="" />
              </div>
              <div className="flex justify-between mb-5">
                <p className="ml-5">0</p>
                <p className="mr-2">1000</p>
              </div>
            </div>
          </div>
          <div className="flex-col">
            <div className="flex justify-between gap-[1000px] mt-5 ">
              <div className=" h-[15px] flex  items-center gap-3 mt-5 ml-10">
                <button className="btn btn-square w-10 bg-slate-200 ">
                  <img className="w-5 h-5" src="./caret-left.svg" alt="" />
                </button>
                <p>Last 30 Days</p>
                <button className="btn btn-square w-10 bg-slate-200 ">
                  <img className="w-5 h-5" src="./caret-right.svg" alt="" />
                </button>
              </div>
              <div className="flex flex-col ">
                <div className="dropdown ml-30">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn m-1 flex h-[48px] w-[180px] "
                  >
                    Newest first
                    <div className="flex mr-[-33px]">
                      <img src="./drop.svg" alt="" />
                    </div>
                  </div>

                  <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 flex items-center ml-16">
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
            <div className="w-[1400px] h-[48px] rounded-lg bg-white flex justify-between items-center mt-1">
              <div className="flex  gap-5 ml-5">
                <input type="checkbox" defaultChecked className="checkbox" />
                Select all
              </div>
              <div className="mr-5">
                <p>-35,500₮</p>
              </div>
            </div>
            <div className="flex-col mt-3 flex gap-[12px]">
              <p className="font-semibold text-base">Today</p>
              <div className="w-[1400px] h-[64px] rounded-lg bg-white flex justify-between items-center mt-1">
                <div className="flex  gap-5 ml-5 items-center">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <div className="flex items-center">
                    <img
                      className="w-[40px] h-[40px]"
                      src="./Ellipse 124.svg"
                      alt=""
                    />

                    <div className="flex-col ml-5 flex items-center">
                      <h6>Lending & Renting</h6>
                      <p className="text-xs font-normal">14:00</p>
                    </div>
                  </div>
                </div>
                <div className="text-green-500 mr-5 flex items-center">
                  -1,000₮
                </div>
              </div>
              <div className="w-[1400px] h-[64px] rounded-lg bg-white flex justify-between items-center mt-1">
                <div className="flex  gap-5 ml-5 items-center">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <div className="flex items-center">
                    <img
                      className="w-[40px] h-[40px]"
                      src="./orange.svg"
                      alt=""
                    />

                    <div className="flex-col ml-5 flex items-center">
                      <h6>Lending & Renting</h6>
                      <p className="text-xs font-normal">14:00</p>
                    </div>
                  </div>
                </div>
                <div className="text-red-500 mr-5 flex items-center">
                  -1,000₮
                </div>
              </div>
              <div className="w-[1400px] h-[64px] rounded-lg bg-white flex justify-between items-center mt-1">
                <div className="flex  gap-5 ml-5 items-center">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <div className="flex items-center">
                    <img
                      className="w-[40px] h-[40px]"
                      src="./orange.svg"
                      alt=""
                    />

                    <div className="flex-col ml-5 flex items-center">
                      <h6>Lending & Renting</h6>
                      <p className="text-xs font-normal">14:00</p>
                    </div>
                  </div>
                </div>
                <div className="text-yellow-500 mr-5 flex items-center">
                  -1,000₮
                </div>
              </div>
              <div className="w-[1400px] h-[64px] rounded-lg bg-white flex justify-between items-center mt-1">
                <div className="flex  gap-5 ml-5 items-center">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <div className="flex items-center">
                    <img
                      className="w-[40px] h-[40px]"
                      src="./orange.svg"
                      alt=""
                    />

                    <div className="flex-col ml-5 flex items-center">
                      <h6>Lending & Renting</h6>
                      <p className="text-xs font-normal">14:00</p>
                    </div>
                  </div>
                </div>
                <div className="text-yellow-500 mr-5 flex items-center">
                  -1,000₮
                </div>
              </div>
              <div className="w-[1400px] h-[64px] rounded-lg bg-white flex justify-between items-center mt-1">
                <div className="flex  gap-5 ml-5 items-center">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <div className="flex items-center">
                    <img
                      className="w-[40px] h-[40px]"
                      src="./orange.svg"
                      alt=""
                    />

                    <div className="flex-col ml-5 flex items-center">
                      <h6>Lending & Renting</h6>
                      <p className="text-xs font-normal">14:00</p>
                    </div>
                  </div>
                </div>
                <div className="text-yellow-500 mr-5 flex items-center">
                  -1,000₮
                </div>
              </div>
            </div>
            <div className="flex-col mt-3 flex gap-[12px]">
              <p className="font-semibold text-base">Yesterday</p>
              <div className="w-[1400px] h-[64px] rounded-lg bg-white flex justify-between items-center mt-1">
                <div className="flex  gap-5 ml-5 items-center">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <div className="flex items-center">
                    <img
                      className="w-[40px] h-[40px]"
                      src="./orange.svg"
                      alt=""
                    />
                    

                    <div className="flex-col ml-5 flex items-center">
                      <h6>Lending & Renting</h6>
                      <p className="text-xs font-normal">14:00</p>
                    </div>
                  </div>
                </div>
                <div className="text-yellow-500 mr-5 flex items-center">
                  -1,000₮
                </div>
              </div>
              <div className="w-[1400px] h-[64px] rounded-lg bg-white flex justify-between items-center mt-1">
                <div className="flex  gap-5 ml-5 items-center">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <div className="flex items-center">
                    <img
                      className="w-[40px] h-[40px]"
                      src="./orange.svg"
                      alt=""
                    />

                    <div className="flex-col ml-5 flex items-center">
                      <h6>Lending & Renting</h6>
                      <p className="text-xs font-normal">14:00</p>
                    </div>
                  </div>
                </div>
                <div className="text-yellow-500 mr-5 flex items-center">
                  -1,000₮
                </div>
              </div>
              <div className="w-[1400px] h-[64px] rounded-lg bg-white flex justify-between items-center mt-1">
                <div className="flex  gap-5 ml-5 items-center">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <div className="flex items-center">
                    <img
                      className="w-[40px] h-[40px]"
                      src="./orange.svg"
                      alt=""
                    />

                    <div className="flex-col ml-5 flex items-center">
                      <h6>Lending & Renting</h6>
                      <p className="text-xs font-normal">14:00</p>
                    </div>
                  </div>
                </div>
                <div className="text-yellow-500 mr-5 flex items-center">
                  -1,000₮
                </div>
              </div>
              <div className="w-[1400px] h-[64px] rounded-lg bg-white flex justify-between items-center mt-1">
                <div className="flex  gap-5 ml-5 items-center">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <div className="flex items-center">
                    <img
                      className="w-[40px] h-[40px]"
                      src="./orange.svg"
                      alt=""
                    />

                    <div className="flex-col ml-5 flex items-center">
                      <h6>Lending & Renting</h6>
                      <p className="text-xs font-normal">14:00</p>
                    </div>
                  </div>
                </div>
                <div className="text-yellow-500 mr-5 flex items-center">
                  -1,000₮
                </div>
              </div>
              <div className="w-[1400px] h-[64px] rounded-lg bg-white flex justify-between items-center mt-1">
                <div className="flex  gap-5 ml-5 items-center">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <div className="flex items-center">
                    <img
                      className="w-[40px] h-[40px]"
                      src="./orange.svg"
                      alt=""
                    />

                    <div className="flex-col ml-5 flex items-center">
                      <h6>Lending & Renting</h6>
                      <p className="text-xs font-normal">14:00</p>
                    </div>
                  </div>
                </div>
                <div className="text-yellow-500 mr-5 flex items-center">
                  -1,000₮
                </div>
              </div>
              <div className="w-[1400px] h-[64px] rounded-lg bg-white flex justify-between items-center mt-1">
                <div className="flex  gap-5 ml-5 items-center">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <div className="flex items-center">
                    <img
                      className="w-[40px] h-[40px]"
                      src="./orange.svg"
                      alt=""
                    />

                    <div className="flex-col ml-5 flex items-center">
                      <h6>Lending & Renting</h6>
                      <p className="text-xs font-normal">14:00</p>
                    </div>
                  </div>
                </div>
                <div className="text-yellow-500 mr-5 flex items-center">
                  -1,000₮
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
