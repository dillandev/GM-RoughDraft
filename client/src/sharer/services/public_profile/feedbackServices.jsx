export const fetchPublicSharerFeedback = async (sharerId) => {
  const token = localStorage.getItem('token');

  const response = await fetch(`/api/public/sharer/${sharerId}/feedback`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch public feedback');
  }

  return response.json();
};