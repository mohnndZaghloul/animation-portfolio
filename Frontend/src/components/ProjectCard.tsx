import { motion } from "framer-motion";
import SwiperModal from "./SwiperModal";
import { useState } from "react";
import { BASE_URL } from "../constants/baseURL";
import { useNavigate } from "react-router-dom";

type image_TP = {
  fieldname: string;
  mimetype: string;
  originalname: string;
  filename: string;
  path: string;
  size: number;
};
const ProjectCard = ({
  id,
  title,
  images,
}: {
  id: number;
  title: string;
  images?: image_TP[];
}) => {
  const [modal, setModal] = useState(false);
  const modalToggler = () => {
    setModal((prev) => !prev);
  };

  const navigate = useNavigate();

  function handleClick() {
    navigate(`${id}`);
  }

  return (
    <>
      <motion.div
        onClick={handleClick}
        initial={{ scale: 0.9, opacity: 0 - 4 }}
        whileTap={{ scale: 0.95 }}
        whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
        className="cursor-pointer group rounded-lg overflow-hidden aspect-[4/3]">
        <div className="relative">
          <motion.div
            initial={{ x: 800, y: -600, rotate: "45deg" }}
            animate={{ x: -800, y: 600, rotate: "45deg" }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 bg-white blur-2xl w-[300%] h-2 -z-10"
          />
          {images?.[0].mimetype.includes("video") ? (
            <video
              className="w-full h-full aspect-[4/3] object-cover group-hover:scale-110 transition duration-300"
              autoPlay
              muted
              loop>
              <source
                src={`${BASE_URL}/${images?.[0].filename}`}
                type="video/mp4"
              />
              <source
                src={`${BASE_URL}/${images?.[0].filename}`}
                type="video/ogg"
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              className="w-full h-full aspect-[4/3] object-cover group-hover:scale-110 transition duration-300"
              src={`${BASE_URL}/${images?.[0].filename}`}
              alt="image"
            />
          )}
          <div className="absolute flex items-center px-4 transition duration-500 bottom-0 translate-y-full group-hover:translate-y-0 left-0 w-full h-1/4 bg-gradient-to-t from-black">
            <h3 className="capitalize text-xl">{title}</h3>
          </div>
        </div>
      </motion.div>
      <SwiperModal images={images!} modal={modal} modalToggler={modalToggler} />
    </>
  );
};

export default ProjectCard;
