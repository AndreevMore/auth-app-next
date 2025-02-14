import Requirements from "@/components/Requirements";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Main Page</h1>

        <Requirements />
      </main>
    </div>
  );
};

export default Home;
