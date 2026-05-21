"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Pages() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [reenter, setReenter] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !name || !pass || !reenter) {
      setError("Please fill in all fields.");
      return;
    } else if (reenter !== pass) {
      setError("Password does not match!");
      return;
    }

    setError("");
    console.log({ email, name, pass });
  }

  return (
    <div className="flex flex-col text-title w-lg">
      <div className="text-normal text-textWhite border border-primary bg-back1 rounded-2xl p-4 py-5">
        <div className="text-title text-secondary font-bold flex flex-col justify-center items-center leading-9">
          Sign Up{" "}
          <span className="block text-normal text-textWhite font-normal">
            Sign up to begin your budgeting journey!
          </span>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <label className="block">
            Name
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="block">
            Email
            <Input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              onInvalid={(e) => {
                e.preventDefault();
                setError("Invalid email!");
              }}
            />
          </label>
          <label className="block">
            Password
            <Input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </label>
          <label className="block">
            Re-Enter Password
            <Input
              type="password"
              value={reenter}
              onChange={(e) => setReenter(e.target.value)}
            />
          </label>

          <div className="flex flex-col">
            {error && <p className="text-error text-normal">{error}</p>}
            <div className="flex items-center justify-center">
              <Button
                type="submit"
                className="bg-secondary text-primary w-full"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </form>
        <div className="flex items-center gap-3">
          <hr className="flex-1 border-primary" />
          <span className="text-primary -translate-y-1">or</span>
          <hr className="flex-1 border-primary" />
        </div>
        <div className="flex items-center justify-center">
          <Button className=" w-full" onClick={() => router.push("/login")}>
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}
