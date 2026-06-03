import type { User } from "./user";
export type Period = "weekly" | "monthly";

export interface createBudget {
  userId: number;
  limit: number;
  period: Period;
}
export interface Budget extends createBudget {
  id: number;
  createdAt: Date;
}

export async function getBudget(): Promise<{
  limit: { weekly: number; monthly: number };
  remaining: { weekly: number; monthly: number };
}> {
  const user = JSON.parse(localStorage.getItem("user") || "{}") as User;
  if (!user) {
    console.log("No user");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/budgets/${user.id}`,
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

export async function setLimit(
  limit: number,
  period: Period,
): Promise<createBudget> {
  const user = JSON.parse(localStorage.getItem("user") || "{}") as User;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/budgets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: user.id, limit, period }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to create user.");
  }

  return res.json();
}
