export const createAdService = async (adData) => {
  // Retrieve token from localStorage
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('No token found');
  }

  const response = await fetch('/api/sharer/create-ad', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Pass token to your verifyToken middleware
    },
    body: JSON.stringify(adData),
  });

  // Handle fetch-specific error parsing (since fetch doesn't throw on 4xx/5xx codes)
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || 'Failed to create ad');
  }

  return response.json();
};