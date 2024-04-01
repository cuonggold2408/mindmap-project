export default function Features() {
  return (
    <div style={{ width: "1400px", margin: "50px auto" }}>
      <div
        className="flex flex-col justify-center items-center gap-5"
        style={{ maxWidth: "1000px", margin: "auto" }}
      >
        <h1 className="text-4xl font-medium">Features</h1>
        <p className="text-xl text-center">
          The main aim of creating FWR blocks is to help designers, developers
          and agencies create websites and web apps quickly and easily. Each and
          every block uses minimal custom styling and is based on the utility
          first Tailwind framework.
        </p>
        <button className=" text-xl cursor-pointer rounded-md border-2 border-blue-600 text-blue-600 px-14 py-3 hover:bg-blue-600 hover:text-white transition-colors">
          Learn More
        </button>
      </div>

      <div className="flex justify-around mt-10">
        <div
          style={{ maxWidth: "380px" }}
          className="p-6 border-2 text-center rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            dataSlot="icon"
            className="w-7 h-7 inline-block fill-blue-500 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
            />
          </svg>
          <h3 className="leading-10 text-xl font-semibold mb-3">
            Fresh Design
          </h3>
          <p>
            FWR blocks bring in an air of fresh design with their creative
            layouts and blocks, which are easily customizable.
          </p>
        </div>

        <div
          style={{ maxWidth: "380px" }}
          className="p-6 border-2 text-center rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            dataSlot="icon"
            className="w-7 h-7 inline-block  text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>

          <h3 className="leading-10 text-xl font-semibold mb-3">Clean Code</h3>
          <p>
            FWR blocks are the cleanest pieces of HTML blocks, which are built
            with utmost care to quality and usability.
          </p>
        </div>

        <div
          style={{ maxWidth: "380px" }}
          className="p-6 border-2 text-center rounded-md "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            dataSlot="icon"
            className="w-7 h-7 inline-block text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
            />
          </svg>

          <h3 className="leading-10 text-xl font-semibold mb-3">
            Perfect Tool
          </h3>
          <p>
            FWR blocks is a perfect tool for designers, developers and agencies
            looking to create stunning websites in no time.
          </p>
        </div>
      </div>
    </div>
  );
}
