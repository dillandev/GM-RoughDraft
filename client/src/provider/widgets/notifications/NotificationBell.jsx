import { IconButton, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationBell = ({ unreadCount, onClick }) => (
  <IconButton color="inherit" onClick={onClick}>
    <Badge badgeContent={unreadCount} color="error">
      <NotificationsIcon />
    </Badge>
  </IconButton>
);

export default NotificationBell;