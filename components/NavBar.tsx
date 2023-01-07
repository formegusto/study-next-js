import Link from "next/link";
import { useRouter } from "next/router";
import "next/head";
// import styles from "./NavBar.module.css";

function NavBar() {
  const router = useRouter();
  console.log(router);
  /*
    router 관련 객체
    */

  /**
   * CSS Module Example
   */
  //   return (
  //     <nav>
  //       <Link
  //         className={`${styles.link} ${
  //           router.pathname === "/" ? styles.active : ""
  //         }`}
  //         href="/">
  //         Home
  //       </Link>
  //       <Link
  //         className={[
  //           styles.link,
  //           router.pathname === "/about-us" ? styles.active : "",
  //         ].join(" ")}
  //         href="/about-us">
  //         About
  //       </Link>
  //     </nav>
  //   );

  /**
   * Styles JSX
   */

  return (
    <nav>
      <Link legacyBehavior href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link legacyBehavior href="/about-us">
        <a className={router.pathname === "/about-us" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        nav {
          background: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: white;
        }
      `}</style>
    </nav>
  );
}

export default NavBar;
