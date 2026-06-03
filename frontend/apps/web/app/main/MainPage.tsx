"use client";
import MainLayout from "./MainLayout";
import Card from "@/components/Card";
import SetBudgetModal from "./modals/SetBudgetModal";
import AddEntryModal from "./modals/AddEntryModal";
import { useEffect, useState } from "react";
import { getUser, type User } from "./actions/user";
import {
  deleteTr,
  getExpMonth,
  getTotalExp,
  getUserExp,
  getUserTr,
  Transaction,
} from "./actions/transaction";
import { getBudget } from "./actions/budget";
import { Trash, Ellipsis, ArrowUpDown } from "lucide-react";
import UserProfile from "./modals/UserProfile";

export default function MainPage() {
  const [user, setUser] = useState<User | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [expenses, setExpenses] = useState<Record<string, number>>({});
  const [month, setMonth] = useState<number>(0);
  const [totalExp, setTotalExp] = useState<number>(0);
  const [budget, setBudget] = useState<{
    limit: { weekly: number; monthly: number };
    remaining: { weekly: number; monthly: number };
  } | null>(null);
  const [monthly, setMonthly] = useState(true);
  const [showDlt, setShowDlt] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userData, tr, exp, month, total, budget] = await Promise.all([
          getUser(),
          getUserTr(),
          getUserExp(),
          getExpMonth(),
          getTotalExp(),
          getBudget(),
        ]);

        const grouped: Record<string, number> = {};
        exp.forEach((e) => {
          grouped[e.category] = (grouped[e.category] ?? 0) + e.amount;
        });

        setUser(userData);
        setTransactions(tr);
        setExpenses(grouped);
        setMonth(month);
        setTotalExp(total);
        setBudget(budget);
      } catch (err) {
        console.error("Fetching failed", err);
      }
    };

    fetchData();
  }, []);

  const refreshData = async () => {
    try {
      const [userData, tr, exp, month, total, budget] = await Promise.all([
        getUser(),
        getUserTr(),
        getUserExp(),
        getExpMonth(),
        getTotalExp(),
        getBudget(),
      ]);

      const grouped: Record<string, number> = {};
      exp.forEach((e) => {
        grouped[e.category] = (grouped[e.category] ?? 0) + e.amount;
      });

      setUser(userData);
      setTransactions(tr);
      setExpenses(grouped);
      setMonth(month);
      setTotalExp(total);
      setBudget(budget);
    } catch (err) {
      console.error("Fetching failed", err);
    }
  };

  return (
    <MainLayout
      header={
        <>
          <div className="flex justify-between items-center">
            <div className="text-secondary text-header px-7">
              Hello, <span className="font-bold">{user?.name}!</span>
            </div>
            <UserProfile user={user} />
          </div>
          <div className="bg-linear-to-r from-primary to-background w-full py-3 px-7 my-3">
            <div className="grid grid-cols-2 items-center">
              <div className="block text-textWhite text-upsize leading-10">
                Your Balance{" "}
                <span className="block font-bold text-secondary text-title">
                  $ {user?.balance}
                </span>
              </div>
              <div className="grid grid-cols-[250px_1fr] items-start">
                <div className="flex flex-col text-textWhite text-normal">
                  <div className="flex items-center gap-3">
                    <ArrowUpDown
                      size={22}
                      onClick={() => setMonthly(!monthly)}
                      className="text-secondary hover:text-primary"
                    />
                    {monthly ? (
                      <p>Monthly Budget:</p>
                    ) : (
                      <p>Weekly Budget:</p>
                    )}{" "}
                  </div>
                  <div className="flex items-center gap-3">Remaining:</div>
                </div>
                <div className="flex flex-col text-secondary text-normal font-semibold">
                  <div className="gap-5 flex items-center">
                    $ {monthly ? budget?.limit.monthly : budget?.limit.weekly}{" "}
                    <SetBudgetModal onSuccess={refreshData} />
                  </div>
                  <div>
                    ${" "}
                    {monthly
                      ? budget?.remaining.monthly
                      : budget?.remaining.weekly}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
      side={
        <>
          <Card>
            <div className="text-textWhite text-normal font-semibold">
              <p>Your Spending</p>
            </div>
            <div className="mt-2 text-textWhite text-normal flex flex-col">
              <p>Spent This Month</p>
              <span className="text-secondary text-upsize font-bold">
                $ {month}
              </span>
              <hr className="text-secondary" />
              <p className="mt-2">Total Spent</p>
              <div className="font-bold leading-8">$ {totalExp}</div>
            </div>
          </Card>
          <Card>
            <div className="text-textWhite text-normal">
              <p className="font-semibold">Spending Breakdown</p>
              <div className="flex flex-col">
                {Object.entries(expenses).map(([category, total]) => (
                  <div
                    key={category}
                    className="flex items-center px-2 py-1 w-full rounded-2xl hover:bg-background"
                  >
                    <p className="shrink-0">
                      {category[0].toUpperCase() + category.slice(1)}
                    </p>
                    <div className="flex-1 border-b-2 border-dashed border-primary mx-2" />
                    <p className="shrink-0">$ {total}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </>
      }
      main={
        <div className="relative w-full h-full">
          <Card>
            <div className="text-textWhite text-normal">
              <div className="flex items-center gap-3">
                {transactions && transactions.length > 0 && (
                  <Ellipsis
                    size={24}
                    className={showDlt ? "text-error" : "hover:scale-105"}
                    onClick={() => setShowDlt(!showDlt)}
                  />
                )}
                <p className="font-semibold">Transactions</p>
              </div>
              <div className="flex flex-col">
                {transactions.map((tr) => (
                  <div key={tr.id} className="flex items-center gap-3">
                    {showDlt && (
                      <Trash
                        size={22}
                        className="text-error hover:text-error/35"
                        onClick={async () => {
                          await deleteTr(tr.id);
                          refreshData();
                        }}
                      />
                    )}
                    <div className="px-2 py-1 rounded-2xl w-full hover:bg-background flex justify-between text-upsize">
                      <p className="font-bold">
                        {tr.category[0].toUpperCase() + tr.category.slice(1)}
                      </p>
                      {tr.type === "expense" ? (
                        <p className="text-error font-semibold">
                          - $ {tr.amount}
                        </p>
                      ) : (
                        <p className="font-semibold">+ $ {tr.amount}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <div className="absolute bottom-3 right-4">
            <AddEntryModal onSuccess={refreshData} />
          </div>
        </div>
      }
    />
  );
}
