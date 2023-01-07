import React from "react";
import NavBar from "./NavBar";

function Layout({ children }: React.PropsWithChildren<any>) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <footer>&copy; forme next.js</footer>
    </>
  );
}

export default Layout;
