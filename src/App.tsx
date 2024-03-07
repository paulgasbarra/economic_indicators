import Graph from "./components/Graph";
import { indicators } from "./utils/indicators";

function App() {
  return (
    <>
      {indicators.indicators.map((indicator) => (
        <Graph key={indicator.name} indicator={indicator} />
      ))}
    </>
  );
}

export default App;
