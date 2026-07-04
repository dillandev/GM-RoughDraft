export const fetchPublicProviderFeedback = async (providerId) => {
  const token = localStorage.getItem('token');

  const response = await fetch(`/api/public/provider/${providerId}/feedback`, {
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