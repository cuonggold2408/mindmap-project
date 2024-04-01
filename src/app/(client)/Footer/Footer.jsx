export default function Footer() {
  return (
    <div style={{ backgroundColor: "rgb(243 244 246)" }}>
      <div className="flex justify-around pb-10 pt-10">
        <div>
          <h4 className="font-semibold text-xl mb-3">Features</h4>
          <ul className="flex flex-col gap-1">
            <li className="hover:text-cyan-500 cursor-pointer">Cool stuff</li>
            <li className="hover:text-cyan-500 cursor-pointer">
              Random feature
            </li>
            <li className="hover:text-cyan-500 cursor-pointer">Team feature</li>
            <li className="hover:text-cyan-500 cursor-pointer">
              Stuff for developers
            </li>
            <li className="hover:text-cyan-500 cursor-pointer">Another one</li>
            <li className="hover:text-cyan-500 cursor-pointer">Last time</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-xl mb-3">Resources</h4>
          <ul className="flex flex-col gap-1">
            <li className="hover:text-cyan-500 cursor-pointer">Resource</li>
            <li className="hover:text-cyan-500 cursor-pointer">
              Resource name
            </li>
            <li className="hover:text-cyan-500 cursor-pointer">
              Another resource
            </li>
            <li className="hover:text-cyan-500 cursor-pointer">
              Final resource
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-xl mb-3">About</h4>
          <ul className="flex flex-col gap-1">
            <li className="hover:text-cyan-500 cursor-pointer">Team</li>
            <li className="hover:text-cyan-500 cursor-pointer">Location</li>
            <li className="hover:text-cyan-500 cursor-pointer">Privacy</li>
            <li className="hover:text-cyan-500 cursor-pointer">Terms</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-xl mb-3">Help</h4>
          <ul className="flex flex-col gap-1">
            <li className="hover:text-cyan-500 cursor-pointer">Support</li>
            <li className="hover:text-cyan-500 cursor-pointer">Help Center</li>
            <li className="hover:text-cyan-500 cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex justify-around pt-10 pb-10">
        <div>
          <h3 className="font-semibold text-xl mb-3">FWR</h3>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-3">Address</h3>
          <p>
            123 6th St.
            <br />
            Melbourne, FL 32904
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-3">Free Resources</h3>
          <p>
            Use our HTML blocks for <span className="font-semibold">FREE</span>.
            <br />
            All are MIT License
          </p>
        </div>
        <div>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-md text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
