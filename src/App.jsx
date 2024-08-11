// Import npm packages
import { Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import GithubMenu from "./pages/apis/GithubMenu";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Import components
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="github" element={<GithubMenu />} />
        <Route path="/about" element={<About />} />
        {/* ERROR PAGES */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
