import { CircleTutorial } from "./components/CircleTutorial";
import { GitHubAPI } from "./components/GitHubAPI";
import { PieChart } from "./components/PieChart1";

export const App = () => {
  return (
    <main className="h-screen bg-slate-800 text-center">
      <div className="flex">
        <CircleTutorial />
        <PieChart />
      </div>
      <GitHubAPI />
    </main>
  );
};
