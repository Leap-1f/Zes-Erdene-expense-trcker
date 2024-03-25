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
      data: [14, 8, 10, 13, 6, 9],

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

export function Dashboard() {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between mx-60 bg-white  h-[72px]">
        <div className="flex items-center gap-5  ">
          <img src="./Vector.svg" alt="" />
          <div className="font-semibold text-base">Dashboard</div>
          <div>Records</div>
        </div>
        <div className="flex items-center gap-5  ">
          <button
            onClick={function JumpSignUp() {
              location.href = "/record";
            }}
            className="btn w-[120px] h-[12px] rounded-full text-white bg-blue-600 flex items-center"
          >
            + Record
          </button>
          <div>
            <img src="./Avatar.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="w-screen h-screen bg-slate-200">
        <div className=" flex-col flex mx-60 mt-10">
          <div className="flex justify-between">
            <div>
              <img className="h-[244px] w-[564px]" src="./Noise.svg" alt="" />
            </div>
            <div className="flex-col ">
              <div className="flex w-[564px] h-[56px] bg-white rounded-t-lg gap-3 items-center">
                <div className=" pl-5 flex items-center">
                  <img src="./Green .svg" alt="" />
                </div>
                <div className="font-semibold text-base ">Your Income</div>
              </div>
              <div className="flex w-[564px] h-[182px] bg-white rounded-b-lg mt-1">
                <div className="flex-col flex gap-3 mt-5 pl-5 items-center h-[152px]">
                  <div className="font-semibold text-4xl  mt-[-10px]">
                    1,200,000₮
                  </div>
                  <div>Your Income Amount</div>
                  <div className="flex gap-2">
                    <div>
                      <img src="./Icon.svg" alt="" />
                    </div>
                    32% from last month
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col">
              <div className="flex w-[564px] h-[56px] bg-white rounded-t-lg gap-3 items-center">
                <div className=" pl-5 flex items-center">
                  <img src="./Ellipse 124.svg" alt="" />
                </div>
                <div className="font-semibold text-base ">Total Expenses</div>
              </div>
              <div className="flex w-[564px] h-[182px] bg-white rounded-b-lg mt-1">
                <div className="flex-col flex gap-3 mt-8  pl-5 items-center h-[152px]">
                  <div className="font-semibold text-4xl ">-1,200,000₮</div>
                  <div>Your Income Amount</div>
                  <div className="flex gap-2">
                    <div>
                      <img src="./Icon.svg" alt="" />
                    </div>
                    32% from last month
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <div className="flex-col">
              <div className="flex w-[790px] h-[56px] bg-white rounded-t-lg gap-3 items-center">
                <div className="font-semibold text-base pl-5 flex items-center">
                  Income - Expense
                </div>
              </div>
              <div className="flex w-[790px]  h-[226px] bg-white rounded-b-lg mt-1 gap-10 items-center">
                <div className="flex w-[760px] h-[162px] justify-center p-[32px, 24px] ">
                  <Bar data={dataBar} options={optionsBar} />
                </div>
              </div>
            </div>
            <div className="flex-col">
              <div className="flex  h-[56px] bg-white rounded-t-lg gap-3 items-center">
                <div className="flex justify-between gap-80">
                  <div className="font-semibold text-base pl-5 flex items-center">
                    Income - Expense
                  </div>
                  <div className="mr-[-20]">Jun 1 - Nov 30</div>
                </div>
              </div>
              <div className="flex w-[790px] h-[226px] bg-white rounded-b-lg mt-1 gap-10 ">
                <div className="w-[156px] h-[156px] flex ml-10 mt-7 ">
                  <Doughnut data={data} options={options} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col mt-5">
            <div className=" h-[56px] bg-white font-semibold text-base flex items-center rounded-t-lg pl-5 ">
              Last Records
            </div>
            <div className="flex  h-[80px] bg-white  mt-1 gap-10 justify-between">
              <div className="flex items-center">
                <div className="flex ml-5  items-center">
                  <img
                    className="w-[40px] h-[40px]"
                    src="./Ellipse 124.svg"
                    alt=""
                  />
                </div>
                <div className="flex-col ml-5 flex items-center">
                  <h6>Lending & Renting</h6>
                  <p className="text-xs font-normal">3 hours ago</p>
                </div>
              </div>
              <div className="text-green-500 mr-5 flex items-center">
                1,000₮
              </div>
            </div>
            <div className="flex  h-[80px] bg-white  mt-1 gap-10 justify-between">
              <div className="flex items-center">
                <div className="flex ml-5 items-center">
                  <img
                    className="w-[40px] h-[40px]"
                    src="./Ellipse 124.svg"
                    alt=""
                  />
                </div>
                <div className="flex-col ml-5 flex items-center">
                  <h6>Lending & Renting</h6>
                  <p className="text-xs font-normal">3 hours ago</p>
                </div>
              </div>
              <div className="text-green-500 mr-5 flex items-center">
                1,000₮
              </div>
            </div>
            <div className="flex  h-[80px] bg-white  mt-1 gap-10 justify-between">
              <div className="flex items-center">
                <div className="flex ml-5 items-center">
                  <img
                    className="w-[40px] h-[40px]"
                    src="./Ellipse 124.svg"
                    alt=""
                  />
                </div>
                <div className="flex-col ml-5 flex items-center">
                  <h6>Lending & Renting</h6>
                  <p className="text-xs font-normal">3 hours ago</p>
                </div>
              </div>
              <div className="text-green-500 mr-5 flex items-center">
                1,000₮
              </div>
            </div>
            <div className="flex  h-[80px] bg-white  mt-1 gap-10 justify-between">
              <div className="flex items-center">
                <div className="flex ml-5 items-center">
                  <img
                    className="w-[40px] h-[40px]"
                    src="./Ellipse 124.svg"
                    alt=""
                  />
                </div>
                <div className="flex-col ml-5 flex items-center">
                  <h6>Lending & Renting</h6>
                  <p className="text-xs font-normal">3 hours ago</p>
                </div>
              </div>
              <div className="text-green-500 mr-5 flex items-center">
                1,000₮
              </div>
            </div>
            <div className="flex  h-[80px] bg-white  mt-1 gap-10 justify-between">
              <div className="flex items-center">
                <div className="flex ml-5 items-center">
                  <img
                    className="w-[40px] h-[40px]"
                    src="./Ellipse 124.svg"
                    alt=""
                  />
                </div>
                <div className="flex-col ml-5 flex items-center">
                  <h6>Lending & Renting</h6>
                  <p className="text-xs font-normal">3 hours ago</p>
                </div>
              </div>
              <div className="text-green-500 mr-5 flex items-center">
                1,000₮
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
