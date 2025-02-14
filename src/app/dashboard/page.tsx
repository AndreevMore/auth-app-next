"use client";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";
import UserDetails from "@/components/UserDetails";

const Dashboard = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  if (!user) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Dashboard</h1>
        <UserDetails />
      </main>
    </div>
  );
};

export default Dashboard;