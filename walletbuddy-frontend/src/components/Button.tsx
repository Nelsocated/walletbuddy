interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  value?: string;
  className?: string;
  children?: React.ReactNode;
  selected?: boolean;
}

export default function Button({
  type = "button",
  onClick,
  value,
  className,
  children,
  selected,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      value={value}
      className={`transition-transform border bg-back2 rounded-2xl py-1 flex justify-center items-center text-normal 
        ${selected ? "border-secondary text-secondary pointer-events-none hover:scale-100" : "text-textWhite hover:scale-105"} 
        ${className}`}
    >
      {children}
    </button>
  );
}
