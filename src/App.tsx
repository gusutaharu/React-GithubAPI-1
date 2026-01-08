import { CircleTutorial } from "./components/CircleTutorial";
import { PieChart } from "./components/PieChart1";

export const App = () => {
  return (
    <main className="h-screen bg-slate-800 text-center">
      <CircleTutorial />
      <PieChart />
    </main>
  );
};
