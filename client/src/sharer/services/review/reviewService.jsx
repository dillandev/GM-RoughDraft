export const fetchAcceptedBookings = async () => {
  const token = localStorage.getItem('token');

  const response = await fetch('/api/sharer/reviews/get-bookings', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to fetch bookings');
  }
  return response.json();
};

export const submitSharerReview = async (reviewData) => {
  const token = localStorage.getItem('token');

  const response = await fetch('/api/sharer/reviews/create-review', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(reviewData)
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to submit review');
  }
  return response.json();
};