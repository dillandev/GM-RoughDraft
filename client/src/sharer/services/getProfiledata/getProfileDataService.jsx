export const getSharerProfileData = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch( "/api/sharer/get-profile-data",
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch profile data");
  }

  return data;
};