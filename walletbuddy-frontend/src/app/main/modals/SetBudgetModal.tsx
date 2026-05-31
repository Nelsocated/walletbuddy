"use client";
import { useState } from "react";
import { SquarePen, X } from "lucide-react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { setLimit } from "../actions/budget";

export default function SetBudgetModal({
  onSuccess,
}: {
  onSuccess: () => void;
}) {
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState<number>(0);
  const [period, setPeriod] = useState<"weekly" | "monthly">("weekly");
  const [error, setError] = useState("");

  async function setBudget(e: React.FormEvent) {
    e.preventDefault();

    if (!amount || !period) {
      setError("Please enter/select all fields.");
      return;
    } else if (isNaN(Number(amount)) || Number(amount) <= 0) {
      setError("Please insert a valid amount.");
      return;
    }

    setError("");
    try {
      await setLimit(amount, period);
      onSuccess();
      setShow(!show);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }
    }
  }
  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className="text-secondary hover:scale-105"
      >
        <SquarePen size={24} />
      </button>

      {show && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="border border-primary bg-background rounded-2xl w-xl p-3 flex flex-col">
            <div className="flex justify-between items-center text-secondary text-subtitle">
              <div className="font-normal">
                Set <span className="font-bold">Budget</span>
              </div>
              <button
                onClick={() => setShow(!show)}
                className="hover:scale-105"
              >
                <X size={24} />
              </button>
            </div>
            <div className="border border-primary bg-back1 rounded-2xl py-3 px-4 mt-2">
              <form
                onSubmit={setBudget}
                className="text-textWhite text-normal space-y-3"
              >
                <label className="block">
                  Amount
                  <Input
                    type="text"
                    inputMode="numeric"
                    value={String(amount)}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="text-secondary"
                  />
                </label>

                <label className="block">
                  Period
                  <div className="flex gap-3">
                    <Button
                      type="button"
                      onClick={() => setPeriod("weekly")}
                      className={`w-full hover:border-secondary hover:text-secondary`}
                      selected={period === "weekly"}
                    >
                      Weekly
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setPeriod("monthly")}
                      className={`w-full hover:border-secondary hover:text-secondary`}
                      selected={period === "monthly"}
                    >
                      Monthly
                    </Button>
                  </div>
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
