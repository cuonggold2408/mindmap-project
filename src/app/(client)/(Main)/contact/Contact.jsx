export default function Contact() {
  return (
    <div>
      <form
        action=""
        style={{ width: "506px" }}
        className="m-auto my-5 shadow-lg p-4 border-2 rounded-md"
      >
        <h1 className="text-center text-2xl text-blue-500 font-semibold ">
          Contact Us
        </h1>
        <div className="mb-4 mt-4 flex justify-between">
          <input
            className="border-2 border-zinc-400 p-2"
            type="text"
            placeholder="First Name"
            style={{ width: "45%" }}
          />
          <input
            className="border-2 border-zinc-400 p-2"
            type="text"
            placeholder="Last Name"
            style={{ width: "48%" }}
          />
        </div>
        <div className="mb-4">
          <input
            className="border-2 border-zinc-400 w-full p-2 "
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <input
            className="border-2 border-zinc-400 w-full p-2 "
            type="number"
            placeholder="Phone"
          />
        </div>
        <div>
          <textarea
            className="resize-none border-2 border-zinc-400  w-full pl-4 pt-4"
            cols="30"
            rows="10"
            placeholder="Write your message..."
          ></textarea>
        </div>
        <button className="w-full bg-violet-500 p-2 text-white text-lg rounded-sm ">
          Send Message
        </button>
      </form>
    </div>
  );
}
