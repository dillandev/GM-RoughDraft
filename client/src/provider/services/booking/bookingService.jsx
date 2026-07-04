export const fetchProviderBookings = async () => {
  const token = localStorage.getItem('token'); 

  const response = await fetch(`/api/provider/get-booking-data`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};