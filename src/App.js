import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Enlist from "./pages/enlist";
import Home from "./pages/home";
import Result from "./pages/result";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="result" element={<Result />}></Route>
        <Route path="enlist" element={<Enlist />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
