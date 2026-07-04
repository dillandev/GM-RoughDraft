import { useState } from 'react';
import NotificationBell from './NotificationBell.jsx';
import NotificationModal from './NotificationModal.jsx';
import { useNotifications } from '../../hooks/notifications/useNotifications.jsx';

const NotificationWidget = () => {
  const [open, setOpen] = useState(false);
  const { notifications, isLoading, error, unreadCount, markAsRead } = useNotifications();

  return (
    <>
      <NotificationBell unreadCount={unreadCount} onClick={() => setOpen(true)} />

      <NotificationModal
        open={open}
        onClose={() => setOpen(false)}
        notifications={notifications}
        isLoading={isLoading}
        error={error}
        onMarkRead={markAsRead}
      />
    </>
  );
};

export default NotificationWidget;