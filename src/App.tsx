import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./components/routes/routes";

function App() {
  return (
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  );
}

export default App;
