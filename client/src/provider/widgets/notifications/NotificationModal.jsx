import { Modal, Box, Typography, List, ListItem, ListItemText, CircularProgress } from '@mui/material';
import { modalStyle, listItemStyle } from '../styles/notificationstyle.js';

const NotificationModal = ({ open, onClose, notifications, isLoading, error, onMarkRead }) => (
  <Modal open={open} onClose={onClose}>
    <Box sx={modalStyle}>
      <Typography variant="h6" mb={2}>Notifications</Typography>

      {isLoading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">Failed to load notifications.</Typography>
      ) : notifications.length === 0 ? (
        <Typography>No notifications</Typography>
      ) : (
        <List>
          {notifications.map((n) => (
            <ListItem
              key={n.id}
              button
              onClick={() => onMarkRead(n.id)}
              sx={listItemStyle(n.is_read)}
            >
              <ListItemText primary={n.type} secondary={n.message} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  </Modal>
);

export default NotificationModal;