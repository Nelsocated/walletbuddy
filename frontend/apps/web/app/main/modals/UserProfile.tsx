"use client";
import Button from "@/components/Button";
import { User } from "lucide-react";
import { useState } from "react";

interface UserType {
  id: number;
  name: string;
  email: string;
  balance: number;
  createdAt: Date;
}

interface UserProps {
  user: UserType | null;
}
export default function UserProfile({ user }: UserProps) {
  const [show, setShow] = useState(false);

  return (
    <>
      <User
        size={25}
        className="h-15 bg-secondary rounded-full hover:scale-105"
        onClick={() => setShow(!show)}
      />

      {show && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="border border-primary bg-background rounded-2xl w-xl p-3 flex flex-col">
            <div className="border border-primary bg-back1 rounded-2xl py-3 px-4 text-textWhite text-normal">
              <div>
                Name:{" "}
                <span className="text-primary text-upsize font-semibold">
                  {user?.name || "Unknown User"}
                </span>
              </div>
              <div>
                Email:{" "}
                <span className="text-primary text-upsize font-semibold">
                  {user?.email || "No email."}
                </span>
              </div>
              <div>
                Balance:{" "}
                <span className="text-primary text-upsize font-semibold">
                  $ {user?.balance || 0}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Button>Log Out</Button>
                <Button onClick={() => setShow(!show)}>Close</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
