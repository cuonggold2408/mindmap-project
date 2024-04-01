"use client";

import Link from "next/link";
import "./header.scss";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import showToast from "../helpers/Toastify";
import { Fragment, useEffect, useState } from "react";
// import { useUser } from "@auth0/nextjs-auth0/client";
// import { getSession } from "@auth0/nextjs-auth0";

export default function Header({ user }) {
  // console.log(user);
  const [showClientToast, setShowClientToast] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (user && showClientToast && pathname === "/") {
      showToast("success", `Xin chào ${user.name}`);
      setShowClientToast(false);
    } else if (!user && !showClientToast) {
      showToast("success", `Đăng xuất thành công`);
      setShowClientToast(true);
    }
  }, [user, showClientToast]);
  return (
    <div className="flex justify-between p-4">
      <Link href="/">
        <h1 className="text-2xl text-blue-600 font-semibold cursor-pointer">
          Mindmap Flow
        </h1>
      </Link>
      <nav>
        <ul className="flex gap-5" id="menu">
          <li>
            <Link className={clsx(pathname === "/" && "active")} href="/">
              Trang chủ
            </Link>
          </li>
          <li>
            <Link
              className={clsx(pathname === "/about" && "active")}
              href="/about"
            >
              Giới thiệu
            </Link>
          </li>
          <li>
            <Link
              className={clsx(pathname === "/features" && "active")}
              href="/features"
            >
              Tính năng
            </Link>
          </li>
          <li>
            <Link
              className={clsx(pathname === "/price" && "active")}
              href="/price"
            >
              Bảng giá
            </Link>
          </li>
          <li>
            <Link
              className={clsx(pathname === "/contact" && "active")}
              href="/contact"
            >
              Liên hệ
            </Link>
          </li>

          {user ? (
            <>
              <li>Hi, {user.name}</li>
              <li>
                <Link
                  className={clsx(pathname === "/mindmap" && "active")}
                  href="/mindmap"
                >
                  Mindmap
                </Link>
              </li>
              <li>
                <Link href="/api/auth/logout">Đăng xuất</Link>
              </li>
            </>
          ) : (
            <li>
              <Link href="/api/auth/login">Đăng nhập</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   return {
//     props: { user: session?.user || null },
//   };
// }
