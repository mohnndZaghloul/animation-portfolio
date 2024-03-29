import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";

type projects_TP = {
  id: number;
  title: string;
  images: {
    fieldname: string;
    originalname: string;
    filename: string;
    path: string;
    size: number;
  }[];
}[];

const Portfolio = () => {
  const [projects, setProjects] = useState<projects_TP>();
  const fetchPortfolio = () => {
    axios
      .get("https://animation-portfolio.onrender.com/api/portfolio")
      .then((response): any => {
        setProjects(response.data.data);
      });
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  return (
    <main className="text-white container grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-28">
      {projects?.map((project) => (
        <ProjectCard
          key={project.id}
          title={`${project.title}`}
          images={project.images}
        />
      ))}
    </main>
  );
};

export default Portfolio;
