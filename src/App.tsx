import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const CaseStudyEntry = lazy(() => import("./pages/CaseStudyEntry"));
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const CaseStudyDocBiker = lazy(() => import("./pages/CaseStudyDocBiker"));
const Contact = lazy(() => import("./pages/Contact"));

const dilitrustCaseStudyPath = "/etudes-de-cas/refonte-du-site-web-dilitrust";

function Layout() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="site-page" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
          <Route path="/etudes-de-cas" element={<CaseStudies />} />
          <Route path="/test" element={<CaseStudyPage />} />
          <Route path="/port" element={<Portfolio />} />
          <Route
            path="/dt"
            element={<Navigate to={dilitrustCaseStudyPath} replace />}
          />
          <Route path="/doc" element={<CaseStudyDocBiker />} />
          <Route path="/etudes-de-cas/:slug" element={<CaseStudyEntry />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
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
