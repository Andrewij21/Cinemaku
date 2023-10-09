import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-800 min-h-screen font-mukta px-12 py-4">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
