import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { getDedicatedCaseStudyPathByProjectId } from "./config/dedicatedCaseStudies";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail";
import CaseStudyEntry from "./pages/CaseStudyEntry";
import CaseStudyPage from "./pages/CaseStudyPage";
import CaseExemple from "./pages/CaseStudyExemple";
import CaseStudyDocBiker from "./pages/CaseStudyDocBiker";
import Contact from "./pages/Contact";

const dilitrustCaseStudyPath =
  getDedicatedCaseStudyPathByProjectId(180) ?? "/etudes-de-cas";

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
        <Route
          path="/dt"
          element={<Navigate to={dilitrustCaseStudyPath} replace />}
        />
        <Route path="/doc" element={<CaseStudyDocBiker />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/etudes-de-cas/:slug" element={<CaseStudyEntry />} />
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
