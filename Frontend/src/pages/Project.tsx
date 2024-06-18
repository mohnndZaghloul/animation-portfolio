import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/baseURL";
import axios from "axios";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

type project_TP = {
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
};

const Project = () => {
  const [project, setProject] = useState<project_TP>();
  const { id } = useParams();

  const fetchProject = () => {
    axios.get(`${BASE_URL}/api/portfolio/${id}`).then((response): any => {
      setProject(response.data.data);
    });
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <main className="container pt-20">
      <h1 className="text-2xl text-center lg:text-5xl capitalize text-white py-8">
        {project?.title}
      </h1>
      <div className="grid grid-cols-1 gap-y-4 lg:gap-y-8 pb-10 lg:pb-20">
        {project?.images?.map((image) => (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 - 4 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            key={image.filename}
            className="w-full lg:px-20">
            {image?.mimetype.includes("video") ? (
              <video className="w-full h-full object-cover" autoPlay muted loop>
                <source
                  src={`${BASE_URL}/${image?.filename}`}
                  type="video/mp4"
                />
                <source
                  src={`${BASE_URL}/${image?.filename}`}
                  type="video/ogg"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                className="w-full"
                src={`${BASE_URL}/${image?.filename}`}
                alt={image?.filename}
              />
            )}
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Project;
