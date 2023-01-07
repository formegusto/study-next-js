import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

function NavBar() {
  const router = useRouter();
  console.log(router);
  /*
    router 관련 객체
    */
  return (
    <nav>
      <Link
        className={`${styles.link} ${
          router.pathname === "/" ? styles.active : ""
        }`}
        href="/">
        Home
      </Link>
      <Link
        className={[
          styles.link,
          router.pathname === "/about-us" ? styles.active : "",
        ].join(" ")}
        href="/about-us">
        About
      </Link>
    </nav>
  );
}

export default NavBar;
