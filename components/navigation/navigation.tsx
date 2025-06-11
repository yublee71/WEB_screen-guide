"use client";
import styles from "./navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About us</Link>
          {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
