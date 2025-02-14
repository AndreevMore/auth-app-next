import { useAuth } from "@/context/AuthContext";
import styles from "./UserAuthStatus.module.css";

const UserAuthStatus = () => {
  const { user } = useAuth();

  return (
    <p className={user ? styles.approved : styles.warning}>
      {user ? "Authorized" : "Not authorized"}
    </p>
  );
};

export default UserAuthStatus;
