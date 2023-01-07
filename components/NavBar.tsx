import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();
  console.log(router);
  /*
    router 관련 객체
    */
  return (
    <nav>
      <Link
        style={{ color: router.pathname === "/" ? "red" : "blue" }}
        href="/">
        Home
      </Link>
      <Link
        style={{ color: router.pathname === "/about-us" ? "red" : "blue" }}
        href="/about-us">
        About
      </Link>
    </nav>
  );
}

export default NavBar;
