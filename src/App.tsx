import { useSelector } from "react-redux";
import type { RootState } from "./store/store";

function App() {
  // Just confirming the store is accessible — will be replaced once we add an API slice
  const storeState = useSelector((state: RootState) => state);
  console.log("Store is live:", storeState);

  return <h1>RTK Query Playground 🚀</h1>;
}

export default App;
