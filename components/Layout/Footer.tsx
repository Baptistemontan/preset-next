import Link from "next/link";
import Style from "@styles/components/Layout/footer.module.scss";

export default function Footer() {
  return (
    <footer className={Style.footer}>
      <div className={Style.column}>
        <p>colonne 1</p>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
