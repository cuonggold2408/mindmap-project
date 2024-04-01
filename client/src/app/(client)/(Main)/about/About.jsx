import Image from "next/image";
import aboutImage from "@/app/assets/image/aboutus.png";
import AlexaImage from "@/app/assets/image/Alexa.png";
import OliviaImage from "@/app/assets/image/Olivia.png";
import LiamImage from "@/app/assets/image/Liam.png";
import ElijahImage from "@/app/assets/image/Elijah.png";

export default function About() {
  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto" }} className="pt-14">
      <div className="flex justify-center items-center">
        <div>
          <h3 className="text-4xl font-semibold mb-5 ">About Us</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <Image
          src={aboutImage}
          className="pl-16"
          width={817}
          height={462}
          alt="about us"
        />
      </div>
      <div className="flex justify-center items-center mt-20 mb-16">
        <div style={{ width: "650px" }}>
          <h3 className="text-4xl font-semibold mb-5 ">Our Story</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div
          style={{ width: "817px" }}
          className="flex justify-center pt-6 pr-3 pl-3 pb-4 ml-20 gap-6 shadow-xl rounded-lg"
        >
          <div>
            <Image
              className="cursor-pointer hover:-translate-y-1 transition-transform"
              src={AlexaImage}
              alt="alexa"
            />
            <p className="text-center mt-2 font-medium text-xl ">Alexa</p>
          </div>
          <div>
            <Image
              className="cursor-pointer hover:-translate-y-1 transition-transform"
              src={OliviaImage}
              alt="olivia"
            />
            <p className="text-center mt-2 font-medium text-xl ">Olivia</p>
          </div>
          <div>
            <Image
              className="cursor-pointer hover:-translate-y-1 transition-transform"
              src={LiamImage}
              alt="liam"
            />
            <p className="text-center mt-2 font-medium text-xl ">Liam</p>
          </div>
          <div>
            <Image
              className="cursor-pointer hover:-translate-y-1 transition-transform"
              src={ElijahImage}
              alt="elijah"
            />
            <p className="text-center mt-2 font-medium text-xl ">Elijah</p>
          </div>
        </div>
      </div>
    </div>
  );
}
