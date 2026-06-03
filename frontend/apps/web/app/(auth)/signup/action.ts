interface Data {
  name: string;
  email: string;
  password: string;
}

export async function createUser(data: Data) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to create user.");
  }

  return res.json();
}
