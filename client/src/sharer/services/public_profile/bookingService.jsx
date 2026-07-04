export const bookSharerService = async (sharerId) => {
  const token = localStorage.getItem('token'); 

  const response = await fetch(`/api/provider/bookings/sharer/${sharerId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to book sharer');
  }

  return response.json();
};