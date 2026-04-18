import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail";
import CaseStudyPage from "./pages/CaseStudyPage";
import CaseExemple from "./pages/CaseStudyExemple";
import CaseStudyDiliTrust from "./pages/CaseStudyDiliTrust";
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
        <Route path="/test" element={<CaseStudyPage />} />
        <Route path="/case" element={<CaseExemple />} />
        <Route path="/dt" element={<CaseStudyDiliTrust />} />
        <Route path="/a-propos" element={<About />} />
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

