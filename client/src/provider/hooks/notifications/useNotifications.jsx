import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchNotifications, markNotificationRead } from '../../services/notifications/notificationServices.jsx';

export const useNotifications = () => {
  const queryClient = useQueryClient();

  const { data: notifications = [], isLoading, error } = useQuery({
    queryKey: ['provider', 'notifications'],
    queryFn: fetchNotifications,
  });

  const markReadMutation = useMutation({
    mutationFn: markNotificationRead,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['provider', 'notifications'] }),
  });

  const markAsRead = (id) => markReadMutation.mutate(id);

  const unreadCount = notifications.filter((n) => !n.is_read).length;

  return { notifications, isLoading, error, unreadCount, markAsRead };
};