import Image from "next/image";
import notFoundImage from "@/app/assets/image/404notfound.jpg";

export default function NotFound() {
  return (
    <Image src={notFoundImage} alt="404 not found" className="w-full h-full" />
  );
}
