import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./page/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
