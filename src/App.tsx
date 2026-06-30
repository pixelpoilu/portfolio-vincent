import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudiesConcepts = lazy(() => import("./pages/CaseStudiesConcepts"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const CaseStudyEntry = lazy(() => import("./pages/CaseStudyEntry"));
const Contact = lazy(() => import("./pages/Contact"));
const FloatingPageActions = lazy(() => import("./components/FloatingPageActions"));

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
          <Route path="/etudes-de-cas-propositions" element={<CaseStudiesConcepts />} />
          <Route
            path="/dt"
            element={<Navigate to={dilitrustCaseStudyPath} replace />}
          />
          <Route path="/etudes-de-cas/:slug" element={<CaseStudyEntry />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Suspense fallback={null}>
        <FloatingPageActions />
      </Suspense>
    </>
  );
}

export default function App() {
  return <Layout />;
}
