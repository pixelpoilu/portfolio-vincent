
import { useState } from "react";
// import { Link } from "react-router-dom";
import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import FilterBar from "../components/FilterBar";
//import { getAllProjects } from "../services/projectService";

function Projects() {
  const [selectedType, setSelectedType] = useState("all");

  const filteredProjects =
    selectedType === "all"
      ? projects
      : projects.filter(
          (project) => project.type === selectedType
        );
/*
  const allprojects = getAllProjects();
      {allprojects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      */
  return (
    <section>
      <h1>Projets</h1>

      <FilterBar
        selectedType={selectedType}
        onSelectType={setSelectedType}
      />



      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>

    
  );
}
export default Projects;

