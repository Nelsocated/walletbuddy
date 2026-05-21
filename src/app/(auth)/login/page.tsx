"use client";
import { useState } from "react";
import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Pages() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !pass) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    console.log({ email, pass });
  }

  return (
    <div className="flex flex-col text-title w-lg">
      <div className="text-normal text-textWhite border border-primary bg-back1 rounded-2xl p-4 py-5">
        <div className="text-title text-secondary font-bold flex flex-col justify-center items-center leading-9">
          Log In{" "}
          <span className="block text-normal text-textWhite font-normal">
            Let&apos;s get your finance in track!
          </span>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
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
              type={"password"}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </label>

          <div className="flex flex-col">
            {error && <p className="text-error text-normal">{error}</p>}
            <div className="flex items-center justify-center">
              <Button
                type="submit"
                className="bg-secondary text-primary w-full"
              >
                Log In
              </Button>
            </div>
          </div>
        </form>
        <div className="mt-3">
          Don&apos;t have an account yet?{" "}
          <Link className="hover:underline text-secondary" href={"/signup"}>
            Sign Up!
          </Link>
        </div>
      </div>
    </div>
  );
}
