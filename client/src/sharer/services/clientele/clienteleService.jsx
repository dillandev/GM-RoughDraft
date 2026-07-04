export const fetchClientele = async () => {
  const token = localStorage.getItem('token');

  const response = await fetch('/api/sharer/clientele/clients', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch clientele');
  }

  return response.json();
};

export const updateBookingStatus = async ({ bookingId, action }) => {
  const token = localStorage.getItem('token');

  const response = await fetch(`/api/sharer/clientele/booking/${bookingId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ action })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to update booking status');
  }

  return response.json();
};