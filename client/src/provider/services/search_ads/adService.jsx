// adService.js

export const searchAds = async (queryTerm) => {
  if (!queryTerm) return [];

  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  if (!token) throw new Error('No token found');
  if (!user || !user.id) throw new Error('No user found');

  const res = await fetch(`/api/provider/ads/search?query=${encodeURIComponent(queryTerm)}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch ads');
  }

  // Expecting { success: true, data: [...] } from the backend; 
  // Our hook/component extracts '.data' cleanly.
  const result = await res.json();
  return result.data;
};