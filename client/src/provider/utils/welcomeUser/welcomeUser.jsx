import { Typography } from "@mui/material";
import { useQuery } from '@tanstack/react-query';

//
// SERVICE
//
const fetchUsername = async () => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('No token found');
  }

  const res = await fetch('/api/sharer/welcome_user', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch username');
  }

  const data = await res.json();

  return data.user.username;
};

//
// HOOK
//
const useUsername = () => {
  return useQuery({
    queryKey: ['provider','username'],
    queryFn: fetchUsername,
  });
};


//
// COMPONENT
//
const WelcomeUser = () => {
  const {
    data: username,
    error,
  } = useUsername();

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <Typography variant="h4">Hello {username}</Typography>
    </div>
  );
};

export default WelcomeUser;