import { Typography } from "@mui/material";
import { useQuery } from '@tanstack/react-query';
import styles from "../styles/getCredits.js";

const fetchCredits = async () => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  if (!token) {
    throw new Error('No token found');
  }

  if (!user || !user.id) {
    throw new Error('No user found');
  }

  const res = await fetch(`/api/sharer/get_credits/${user.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to get credits');
  }

  const data = await res.json();

  return data.credits;
};

const useCredits = () => {
  return useQuery({
    queryKey: ['sharer','credits'],
    queryFn: fetchCredits,
  });
};

const GetCredits = () => {
  const {
    data: credits,
    error,
  } = useCredits();

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <Typography variant="h4" sx={styles.credits}>Credits: {credits}</Typography>
    </div>
  );
};

export default GetCredits;