import Link from "next/link";
import Style from "@styles/components/Layout/header.module.scss";

export default function Header() {
  return (
    <header className={Style.header}>
      <h1>Title</h1>
      <nav className={Style.nav}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
