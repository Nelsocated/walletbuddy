import MainLayout from "./MainLayout";
import Card from "@/components/Card";

export default function Loading() {
  return (
    <MainLayout
      header={
        <>
          {/* Hello, name */}
          <div className="px-7">
            <div className="h-8 w-48 bg-primary/30 rounded-lg animate-pulse" />
          </div>
          {/* Balance bar */}
          <div className="bg-linear-to-r from-primary to-background w-full py-3 px-7 my-3">
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="flex flex-col gap-2">
                <div className="h-4 w-24 bg-primary/30 rounded animate-pulse" />
                <div className="h-8 w-32 bg-secondary/30 rounded animate-pulse" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-4 w-36 bg-primary/30 rounded animate-pulse" />
                <div className="h-4 w-28 bg-primary/20 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </>
      }
      side={
        <>
          <Card>
            <div className="flex flex-col gap-3">
              <div className="h-4 w-28 bg-primary/30 rounded animate-pulse" />
              <div className="h-4 w-36 bg-primary/20 rounded animate-pulse" />
              <div className="h-7 w-20 bg-secondary/30 rounded animate-pulse" />
              <hr className="border-primary/30" />
              <div className="h-4 w-24 bg-primary/20 rounded animate-pulse" />
              <div className="h-5 w-16 bg-primary/30 rounded animate-pulse" />
            </div>
          </Card>
          <Card>
            <div className="flex flex-col gap-3">
              <div className="h-4 w-36 bg-primary/30 rounded animate-pulse" />
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-2 px-2">
                  <div className="h-4 w-20 bg-primary/20 rounded animate-pulse shrink-0" />
                  <div className="flex-1 border-b-2 border-dashed border-primary/20" />
                  <div className="h-4 w-12 bg-primary/20 rounded animate-pulse shrink-0" />
                </div>
              ))}
            </div>
          </Card>
        </>
      }
      main={
        <Card>
          <div className="flex flex-col gap-3">
            <div className="h-4 w-28 bg-primary/30 rounded animate-pulse" />
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex justify-between px-2 py-1">
                <div className="h-5 w-24 bg-primary/20 rounded animate-pulse" />
                <div className="h-5 w-16 bg-primary/20 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </Card>
      }
    />
  );
}
