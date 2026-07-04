export const fetchSharerFeedback = async () => {
  const token = localStorage.getItem('token');

  const response = await fetch('/api/sharer/feedback', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch feedback');
  }

  return response.json();
};