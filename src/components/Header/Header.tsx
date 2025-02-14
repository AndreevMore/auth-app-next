"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";
import UserAuthStatus from "../UserAuthStatus/UserAuthStatus";
import { useAuth } from "@/context/AuthContext";

type NavButton = {
  label: string;
  href: string;
};

const navButtons: NavButton[] = [
  { label: "Main", href: "/" },
  { label: "Dasboard", href: "/dashboard" },
  { label: "Log In", href: "/login" },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navButtons.map((button, index) => (
            <li key={index} className={styles.navItem}>
              <Link
                href={button.href}
                className={`${styles.navLink} ${
                  pathname === button.href ? styles.active : ""
                }`}
              >
                {button.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.actions}>
        <UserAuthStatus />
        {user ? (
          <button onClick={logout}>Log Out</button>
        ) : (
          <button>
            <Link href={"/login"}>Log In</Link>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
