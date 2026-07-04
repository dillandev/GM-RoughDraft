export const getSharerPublicProfile = async (sharerId) => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `/api/provider/public-profile/${sharerId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch sharer profile");
  }

  return response.json();
};