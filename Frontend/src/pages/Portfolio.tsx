import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";
import { BASE_URL } from "../constants/baseURL";

type projects_TP = {
  id: number;
  title: string;
  images: {
    fieldname: string;
    mimetype: string;
    originalname: string;
    filename: string;
    path: string;
    size: number;
  }[];
}[];

const Portfolio = () => {
  const [projects, setProjects] = useState<projects_TP>();
  const fetchPortfolio = () => {
    axios.get(`${BASE_URL}/api/portfolio`).then((response): any => {
      setProjects(response.data.data);
    });
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  return (
    <main className="text-white container grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-28">
      {projects ? (
        <>
          {projects?.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={`${project.title}`}
              images={project.images}
            />
          ))}
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center col-span-full my-20">
          <div className="w-20 animate-spin aspect-square border-4 border-opacity-70 border-primary border-b-transparent rounded-full flex justify-center items-center">
            <div className="w-16 aspect-square border-4 border-opacity-70 border-Secondary border-t-transparent rounded-full flex justify-center items-center">
              <div className="w-12 aspect-square border-4 border-opacity-70 border-primary border-r-transparent rounded-full flex justify-center items-center">
                <div className="w-8 aspect-square border-4 border-opacity-70 border-Secondary border-l-transparent rounded-full flex justify-center items-center"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Portfolio;
