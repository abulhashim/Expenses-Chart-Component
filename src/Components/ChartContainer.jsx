import BarChart from "./BarChart";

function ChartContainer() {
  return (
    <div className="mt-6 flex w-full flex-col gap-6 rounded-2xl bg-VeryPaleOrange p-6 md:px-8 md:pb-11 md:pt-8">
      <h3 className="text-3xl font-bold text-DarkBrown md:text-[2rem]">
        Spending - Last 7 days
      </h3>
      <BarChart />
      <hr className="border-[1.25px] border-Cream" />
      <div className="flex items-end justify-between">
        <h4>
          Total this month{" "}
          <span className="mt-2 block text-3xl font-bold text-DarkBrown md:text-5xl">
            $478.33
          </span>
        </h4>
        <p className="text-right">
          <span className="block font-bold text-DarkBrown">+2.4%</span>from last
          month
        </p>
      </div>
    </div>
  );
}
export default ChartContainer;
