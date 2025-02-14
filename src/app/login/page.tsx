"use client";
import { useAuth } from "@/context/AuthContext";
import styles from "../page.module.css";
import UserDetails from "@/components/UserDetails";
import { FC } from "react";
import LoginForm from "@/components/LoginForm/LoginForm";

const LoginPage: FC = () => {
  const { user } = useAuth();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Login Page</h1>

        {user ? <UserDetails /> : <LoginForm />}
      </main>
    </div>
  );
};

export default LoginPage;
