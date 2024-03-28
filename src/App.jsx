import ChartContainer from "./Components/ChartContainer";
import Header from "./Components/Header";

const App = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-Cream font-DMSans ">
      <h1 className="sr-only">Expenses Chart</h1>
      <section className="w-[21.25rem] text-MediumBrown md:w-[33.75rem] md:text-[1.125rem]">
        <Header />
        <ChartContainer />
      </section>
    </main>
  );
};

export default App;
