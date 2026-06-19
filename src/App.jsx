import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shopping from "./pages/Shopping";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Shopping />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;