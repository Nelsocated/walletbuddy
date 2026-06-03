export interface User {
  id: number;
  name: string;
  email: string;
  balance: number;
  createdAt: Date;
}

export async function getUser(): Promise<User | null> {
  const user = JSON.parse(localStorage.getItem("user") || "{}") as User;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${user.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to fetch user.");
  }

  return res.json();
}
