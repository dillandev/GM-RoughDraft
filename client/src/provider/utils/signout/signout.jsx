import { Button } from "@mui/material";
import styles from "../styles/SignoutButtonStyles.js"

import { useQueryClient } from "@tanstack/react-query";

export default function LogoutButton() {
  const queryClient = useQueryClient();

  const handleLogout = () => {
    // remove auth data
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // clear all react query cache
    queryClient.clear();

    // redirect to login page
    window.location.href = "/signin";
  };

  return (
    <Button
      variant="contained"
      onClick={handleLogout}
      sx={styles.signOutButton}
    >
      Sign Out
    </Button>
  );
}