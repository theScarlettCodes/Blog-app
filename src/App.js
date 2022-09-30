import { useContext } from "react";
import { MediumContext } from "./context/MediumContext";
import RouterIndex from "./utlils/RouterIndex";
import Loading from "./components/Loading";

function App() {
  const { loading } = useContext(MediumContext);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="App">
          <RouterIndex />
        </div>
      )}
    </>
  );
}

export default App;
