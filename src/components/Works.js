import React from "react";
import "../Works.css";
import projects from "./Project";

export default function Works() {
  return (
    <section id="works">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}