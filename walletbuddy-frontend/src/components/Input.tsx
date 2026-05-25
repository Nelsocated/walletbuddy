import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps {
  className?: string;
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
  required?: boolean;
  value?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onInvalid?: React.ReactEventHandler<HTMLInputElement>;
}

export default function Input({
  className,
  type = "text",
  placeholder,
  required,
  value,
  inputMode,
  onChange,
  onInvalid,
}: InputProps) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  const isNumber = inputMode === "numeric";

  return (
    <div className="flex items-center border focus-within:border-secondary rounded-2xl bg-back2 px-3 w-full">
      {isNumber && <span className="text-normal mr-2 text-secondary">₱</span>}
      <input
        className={`flex-1 bg-transparent text-normal py-1 outline-none ${className}`}
        type={isPassword ? (show ? "text" : "password") : type}
        value={value}
        placeholder={placeholder}
        required={required}
        inputMode={inputMode}
        onChange={onChange}
        onInvalid={onInvalid}
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="text-secondary hover:scale-105"
        >
          {show ? <EyeOff size={22} /> : <Eye size={22} />}
        </button>
      )}
    </div>
  );
}
