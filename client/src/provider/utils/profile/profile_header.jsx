import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography'; 
import styles from '../styles/Profile_Headerstyle.js';

const UserInfo = () => {
  const [user, setUser] = useState({ role: '', username: '' });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser({ role: parsedUser.role, username: parsedUser.username });
      } catch (error) {
        console.error('Error parsing user info from localStorage', error);
      }
    }
  }, []);

  return (
    <div style={styles.container}>
      <Typography variant="h6" 
        component="div"
        sx={styles.role}>

        {user.role}

      </Typography>
      <Typography variant="body1" 
        component="div"
        sx={styles.username}>

        {user.username}

      </Typography>
    </div>
  );
};

export default UserInfo;