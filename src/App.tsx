import { useSelector } from "react-redux";
import Home from "pages/Home";
import { RootState } from "store";
import Submited from "pages/Submited";
import ThemeProvider from "styles/ThemeProvider";

function App() {
  const { data } = useSelector((state: RootState) => state.userApplication);

  return (
    <ThemeProvider>
      {!Object.keys(data ?? {}).length ? <Home /> : <Submited />}
    </ThemeProvider>
  );
}

export default App;
