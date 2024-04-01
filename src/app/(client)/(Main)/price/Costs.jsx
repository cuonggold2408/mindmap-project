import Image from "next/image";
import blueImage from "@/app/assets/image/blue.jpg";
import orangeImage from "@/app/assets/image/orange.jpg";
import greenImage from "@/app/assets/image/green.jpg";

export default function Costs() {
  return (
    <div style={{ maxWidth: "1200px", margin: "50px auto" }}>
      <div className="text-center">
        <h1 className="text-5xl font-semibold mb-6">
          <span className="text-blue-500">Flexible</span> Plans
        </h1>
        <p style={{ color: "#6b7280" }} className="text-xl">
          Choose a plan that works best for you and
          <br />
          your team.
        </p>
      </div>

      <div className="flex items-center justify-center mt-6">
        <div
          style={{ width: "320px", height: "max-content" }}
          className="shadow-lg p-6 rounded-l-3xl"
        >
          <div className="flex gap-4 mb-5">
            <Image
              width={80}
              height={80}
              className="rounded-3xl"
              src={greenImage}
              alt="green"
            />
            <div className="flex flex-col">
              <span className="text-2xl mb-2 font-semibold">Basic</span>
              <span>
                <span className="align-top text-xl ">$</span>
                <span className="text-3xl font-semibold ">10</span>{" "}
                <span className="text-lg">/ user</span>
              </span>
            </div>
          </div>
          <hr />
          <ul className="mt-5">
            <li className="flex text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                dataSlot="icon"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Get started with messaging
            </li>
            <li className="flex text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                dataSlot="icon"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Flexible team meetings
            </li>
            <li className="flex text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                dataSlot="icon"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              5 TB cloud storage
            </li>
          </ul>
          <button className=" text-xl text-white flex p-4 bg-blue-600 w-full mt-3 justify-center items-center rounded-md">
            Choose Plan{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              dataSlot="icon"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div
          style={{ width: "400px" }}
          className="shadow-lg bg-slate-900 text-white p-7 rounded-3xl"
        >
          <div className="flex gap-4 mb-5">
            <Image
              width={80}
              height={80}
              className="rounded-3xl"
              src={orangeImage}
              alt="orange"
            />
            <div className="flex flex-col">
              <span className="text-3xl mb-2 font-semibold">Startup</span>
              <span>
                <span className="align-top text-xl ">$</span>
                <span className="text-3xl font-semibold ">24</span>{" "}
                <span className="text-lg">/ user</span>
              </span>
            </div>
          </div>
          <hr />
          <ul className="mt-5 flex flex-col gap-5 ">
            <li className="flex text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                dataSlot="icon"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              All features in Basic
            </li>
            <li className="flex text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                dataSlot="icon"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Flexible call scheduling
            </li>
            <li className="flex text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                dataSlot="icon"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              15 TB cloud storage
            </li>
          </ul>
          <button className=" text-xl text-white flex p-4 bg-blue-600 w-full mt-6 justify-center items-center rounded-md">
            Choose Plan{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              dataSlot="icon"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div
          style={{ width: "320px", height: "max-content" }}
          className="shadow-lg p-6 rounded-r-3xl"
        >
          <div className="flex gap-4 mb-5">
            <Image
              width={80}
              height={80}
              className="rounded-3xl"
              src={greenImage}
              alt="green"
            />
            <div className="flex flex-col">
              <span className="text-2xl mb-2 font-semibold">Basic</span>
              <span>
                <span className="align-top text-xl ">$</span>
                <span className="text-3xl font-semibold ">10</span>{" "}
                <span className="text-lg">/ user</span>
              </span>
            </div>
          </div>
          <hr />
          <ul className="mt-5">
            <li className="flex text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                dataSlot="icon"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Get started with messaging
            </li>
            <li className="flex text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                dataSlot="icon"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Flexible team meetings
            </li>
            <li className="flex text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                dataSlot="icon"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              5 TB cloud storage
            </li>
          </ul>
          <button className=" text-xl text-white flex p-4 bg-blue-600 w-full mt-3 justify-center items-center rounded-md">
            Choose Plan{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              dataSlot="icon"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
