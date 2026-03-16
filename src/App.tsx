/*


import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      import Footer from "./components/Footer";<Footer />
    </BrowserRouter>
  );
}

*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CaseStudies from "./pages/CaseStudies";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";

function Layout() {
return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/portfolio/:slug" element={<ProjectDetail />} />
        <Route path="/etudes-de-cas" element={<CaseStudies />} />
        <Route path="/etudes-de-cas/:slug" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}


