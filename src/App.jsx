import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./page/Home";
import SeeMore from "./page/SeeMore";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/seemore" element={<SeeMore />} />
      </Route>
    </Routes>
  );
}

export default App;
