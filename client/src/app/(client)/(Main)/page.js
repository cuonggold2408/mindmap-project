import Image from "next/image";
import "../../assets/sass/home.scss";
import imageHome from "@/app/assets/image/so-do-tu-duy.webp";

export default function HomePage() {
  return (
    <main>
      <div className="container">
        <div className="header-home">
          <h1>Học tập hiệu quả với bản đồ tư duy</h1>
          <span className="border-2 bg-blue-600 text-white p-2 pr-5 pl-5 cursor-pointer mt-4 rounded-full text-xl">
            Sử dụng miễn phí
          </span>
        </div>
        <Image
          src={imageHome}
          width={672}
          height={352}
          className="m-auto"
          style={{ marginTop: "20px" }}
          alt="home"
        />
        <div className="flex mt-14 gap-11 justify-center p-6">
          <div className="text-center">
            <h3 className="font-medium mb-4 text-xl">DỄ SỬ DỤNG</h3>
            <p className="text-slate-600">
              FWR blocks bring in an air of fresh design with their creative
              <br />
              layouts and blocks, which are easily customizable
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-medium mb-4 text-xl border-t-indigo-600 ">
              KHÔNG GIỚI HẠN
            </h3>
            <p className="text-slate-600">
              FWR blocks are the cleanest pieces of HTML blocks, which
              <br />
              are built with utmost care to quality and usability.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-medium mb-4 text-xl">QUẢN LÝ VÀ CHIA SẺ</h3>
            <p className="text-slate-600">
              FWR blocks is a perfect tool for designers, developers and
              <br />
              agencies looking to create stunning websites in no time.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
