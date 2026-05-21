import MainLayout from "./MainLayout";
import Card from "@/components/Card";
import SetBudgetModal from "@/components/modals/SetBudgetModal";
import AddEntryModal from "@/components/modals/addEntryModal";

export default function MainPage() {
  return (
    <MainLayout
      header={
        <>
          <div className="text-secondary text-header px-7">
            Hello, <span className="font-bold">Unknown!</span>
          </div>
          <div className="bg-linear-to-r from-primary to-background w-full py-3 px-7 my-3">
            <div className="grid grid-cols-2 items-center">
              <div className="block text-textWhite text-upsize leading-10">
                Your Balance{" "}
                <span className="block font-bold text-secondary text-title">
                  $ 1234.00
                </span>
              </div>
              <div className="grid grid-cols-[200px_1fr] items-start">
                <div className="flex flex-col text-textWhite text-normal">
                  <div>Monthly Budget:</div>
                  <div>Remaining:</div>
                </div>
                <div className="flex flex-col text-secondary text-normal font-semibold">
                  <div className="gap-5 flex items-center">
                    $ 12,000.00 <SetBudgetModal />
                  </div>
                  <div>$ 12,000.00</div>
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
                $ 10,000.00
              </span>
              <hr className="text-secondary" />
              <p className="mt-2">Total Spent</p>
              <div className="font-bold leading-8">$ 10,000.00</div>
            </div>
          </Card>
          <Card>
            <div className="text-textWhite text-normal">
              <p className="font-semibold">Spending Breakdown</p>
            </div>
          </Card>
        </>
      }
      main={
        <div className="relative w-full h-full">
          <Card>
            <div className="text-textWhite text-normal">
              <p className="font-semibold">Transactions</p>
              <div className="flex flex-col"></div>
            </div>
          </Card>
          <div className="absolute bottom-3 right-4">
            <AddEntryModal />
          </div>
        </div>
      }
    />
  );
}
