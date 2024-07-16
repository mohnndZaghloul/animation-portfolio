import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/templetes/Nav";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/:id" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
