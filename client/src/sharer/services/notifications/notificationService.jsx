// services/notificationService.js

// Fetch all notifications for the current user
export const fetchNotifications = async () => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  if (!token) throw new Error('No token found');
  if (!user || !user.id) throw new Error('No user found');

  const res = await fetch('/api/sharer/notifications', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch notifications');
  }

  return res.json();
};

// Mark a notification as read
export const markNotificationRead = async (id) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  if (!token) throw new Error('No token found');
  if (!user || !user.id) throw new Error('No user found');

  const res = await fetch(`/api/sharer/notifications/${id}/read`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to mark notification as read');
  }

  return res.json();
};