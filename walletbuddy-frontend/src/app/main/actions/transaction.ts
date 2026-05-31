import { User } from "./user";
export type TransactionType = "expense" | "income";

export type TrCategory =
  | "food"
  | "transport"
  | "shopping"
  | "utilities"
  | "work"
  | "health"
  | "allowance"
  | "salary"
  | "gift"
  | "refund"
  | "others";

export interface CreateTr {
  type: TransactionType;
  amount: number;
  category: TrCategory;
  note?: string;
}

export interface Transaction extends CreateTr {
  id: number;
  userId: number;
  createdAt: Date;
}

export async function addTr(tr: CreateTr): Promise<CreateTr> {
  const user = JSON.parse(localStorage.getItem("user") || "{}") as User;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transactions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: user.id, tr }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to create user.");
  }

  return res.json();
}

export async function getUserTr(): Promise<Transaction[]> {
  const user = JSON.parse(localStorage.getItem("user") || "{}") as User;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/transactions/${user.id}`,
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

export async function getUserExp(): Promise<Transaction[]> {
  const user = JSON.parse(localStorage.getItem("user") || "{}") as User;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/transactions/${user.id}/today-expenses`,
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
export async function getExpMonth(): Promise<number> {
  const user = JSON.parse(localStorage.getItem("user") || "{}") as User;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/transactions/${user.id}/month-expenses`,
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

export async function getTotalExp(): Promise<number> {
  const user = JSON.parse(localStorage.getItem("user") || "{}") as User;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/transactions/${user.id}/total-expenses`,
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

export async function deleteTr(id: number): Promise<Transaction> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/transactions/${id}`,
    {
      method: "DELETE",
    },
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to delete this transaction.");
  }

  return res.json();
}
