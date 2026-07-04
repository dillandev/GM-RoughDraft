//service
export async function signupSharerRequest(payload) {
  const response = await fetch("/api/auth/signup/sharer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Sharer signup failed.");
  }

  return data; // { user, token, message }
}