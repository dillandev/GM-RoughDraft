export const getProviderPublicProfile = async (providerId) => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `/api/provider/provider-profile/${providerId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch provider profile");
  }

  return response.json();
};