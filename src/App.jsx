import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./page/Home";
import SeeMore from "./page/SeeMore";
import Detail from "./page/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/seemore" element={<SeeMore />} />
        <Route path="/detail" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
