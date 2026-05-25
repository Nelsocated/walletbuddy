"use client";
import { useState } from "react";
import { Plus, X } from "lucide-react";
import Button from "../Button";
import Input from "../Input";

export default function AddEntryModal() {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  function addEntry(e: React.FormEvent) {
    e.preventDefault();

    if (!amount || !category) {
      setError("Please enter/select all field.");
      return;
    } else if (isNaN(Number(amount)) || Number(amount) <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    setError("");
    console.log({ type, amount, category, note });
    setAmount("");
    setCategory("");
    setType("expense");
    setNote("");
    setShow(!show);
  }

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className="rounded-full bg-secondary p-4 hover:scale-105 hover:brightness-90"
      >
        <Plus size={30} className="text-primary" />
      </button>

      {show && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="border border-primary bg-background rounded-2xl w-2xl p-3 flex flex-col">
            <div className="flex justify-between items-center text-secondary text-subtitle">
              <div className="font-normal">
                Set <span className="font-bold">Entry</span>
              </div>
              <button
                onClick={() => setShow(!show)}
                className="hover:scale-105"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex gap-3 w-full">
              <Button
                type="button"
                className={`w-full hover:border-secondary hover:text-secondary`}
                onClick={() => {
                  setType("expense");
                  setCategory("");
                }}
                selected={type === "expense"}
              >
                Expense
              </Button>
              <Button
                type="button"
                className={`w-full hover:border-secondary hover:text-secondary`}
                onClick={() => {
                  setType("income");
                  setCategory("");
                }}
                selected={type === "income"}
              >
                Income
              </Button>
            </div>

            <div className="border border-primary bg-back1 rounded-2xl py-3 px-4 mt-3">
              <form
                onSubmit={addEntry}
                className="text-textWhite text-normal space-y-3"
              >
                <label className="block">
                  Amount
                  <Input
                    type="text"
                    inputMode="numeric"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="text-secondary"
                  />
                </label>
                <label className="block">
                  Category
                  <div className="grid grid-cols-3 gap-3">
                    {type === "expense" && (
                      <>
                        <Button
                          type="button"
                          className={`w-full hover:border-secondary hover:text-secondary`}
                          onClick={() => setCategory("food")}
                          selected={category === "food"}
                        >
                          Food
                        </Button>
                        <Button
                          type="button"
                          className={`w-full hover:border-secondary hover:text-secondary`}
                          onClick={() => setCategory("transport")}
                          selected={category === "transport"}
                        >
                          Transport
                        </Button>
                        <Button
                          type="button"
                          className={`w-full hover:border-secondary hover:text-secondary`}
                          onClick={() => setCategory("shopping")}
                          selected={category === "shopping"}
                        >
                          Shopping
                        </Button>
                        <Button
                          type="button"
                          className={`w-full hover:border-secondary hover:text-secondary`}
                          onClick={() => setCategory("utilities")}
                          selected={category === "utilities"}
                        >
                          Utilities
                        </Button>
                        <Button
                          type="button"
                          className={`w-full hover:border-secondary hover:text-secondary`}
                          onClick={() => setCategory("work")}
                          selected={category === "work"}
                        >
                          Work
                        </Button>
                        <Button
                          type="button"
                          className={`w-full hover:border-secondary hover:text-secondary`}
                          onClick={() => setCategory("health")}
                          selected={category === "health"}
                        >
                          Health
                        </Button>
                        <Button
                          type="button"
                          className={`w-full hover:border-secondary hover:text-secondary`}
                          onClick={() => setCategory("others")}
                          selected={category === "others"}
                        >
                          Others
                        </Button>
                      </>
                    )}
                    {type === "income" && (
                      <>
                        <Button
                          type="button"
                          className={`w-full hover:border-secondary hover:text-secondary`}
                          onClick={() => setCategory("allowance")}
                          selected={category === "allowance"}
                        >
                          Allowance
                        </Button>
                        <Button
                          type="button"
                          className={`w-full hover:border-secondary hover:text-secondary`}
                          onClick={() => setCategory("salary")}
                          selected={category === "salary"}
                        >
                          Salary
                        </Button>
                        <Button
                          type="button"
                          className={`w-full hover:border-secondary hover:text-secondary`}
                          onClick={() => setCategory("gift")}
                          selected={category === "gift"}
                        >
                          Gift
                        </Button>
                        <Button
                          type="button"
                          className={`w-full hover:border-secondary hover:text-secondary`}
                          onClick={() => setCategory("refund")}
                          selected={category === "refund"}
                        >
                          Refund
                        </Button>
                        <Button
                          type="button"
                          className={`w-full hover:border-secondary hover:text-secondary`}
                          onClick={() => setCategory("others")}
                          selected={category === "others"}
                        >
                          Others
                        </Button>
                      </>
                    )}
                  </div>
                </label>
                <label className="block">
                  Note (Optional)
                  <Input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </label>
                <div className="flex flex-col">
                  {error && <p className="text-error text-normal">{error}</p>}
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      className="px-15 bg-secondary text-primary font-bold"
                    >
                      Save!
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
