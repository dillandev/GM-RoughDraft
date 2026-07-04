//service
export async function signupProviderRequest(payload) {
  const response = await fetch("/api/auth/signup/provider", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Provider signup failed.");
  }

  return data; // { user, token, message }
}