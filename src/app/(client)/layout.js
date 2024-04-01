import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { getSession } from "@auth0/nextjs-auth0";
import { ToastContainer } from "react-toastify";

export default async function ClientLayout({ children }) {
  const session = await getSession();
  const user = session?.user || null;
  return (
    <div>
      <header>
        <Header user={user} />
      </header>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user: user });
        }
        return child;
      })}
      <footer>
        <Footer />
      </footer>
      <ToastContainer />
    </div>
  );
}
