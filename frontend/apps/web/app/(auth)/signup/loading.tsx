export default function Loading() {
  return (
    <div className="flex flex-col text-title w-lg">
      <div className="text-normal text-textWhite border border-primary bg-back1 rounded-2xl p-4 py-5">
        <div className="text-title text-secondary font-bold flex flex-col justify-center items-center leading-9">
          Sign Up{" "}
          <span className="block text-normal text-textWhite font-normal">
            Sign up to begin your budgeting journey!
          </span>
        </div>

        <div className="space-y-3">
          <label className="block space-y-1">
            <div className="h-4 w-10 bg-primary/30 rounded animate-pulse" />
            <div className="h-10 w-full bg-primary/20 rounded-lg animate-pulse" />
          </label>

          <label className="block space-y-1">
            <div className="h-4 w-10 bg-primary/30 rounded animate-pulse" />
            <div className="h-10 w-full bg-primary/20 rounded-lg animate-pulse" />
          </label>

          <label className="block space-y-1">
            <div className="h-4 w-16 bg-primary/30 rounded animate-pulse" />
            <div className="h-10 w-full bg-primary/20 rounded-lg animate-pulse" />
          </label>
          <label className="block space-y-1">
            <div className="h-4 w-16 bg-primary/30 rounded animate-pulse" />
            <div className="h-10 w-full bg-primary/20 rounded-lg animate-pulse" />
          </label>

          <div className="h-10 w-full bg-secondary/40 rounded-lg animate-pulse" />
        </div>

        <div className="h-10 w-full bg-back2 rounded-lg animate-pulse" />
      </div>
    </div>
  );
}
