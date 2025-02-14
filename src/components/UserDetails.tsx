import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";

const UserDetails = () => {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  if (!user) {
    return null;
  }

  const isDashboardPage = pathname === "/dashboard";

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <p>Email: {user.email}</p>
      <p>Id: {user.id}</p>

      {!isDashboardPage && (
        <button onClick={logout} style={{ marginTop: "10px" }}>
          Log Out
        </button>
      )}
    </div>
  );
};

export default UserDetails;
