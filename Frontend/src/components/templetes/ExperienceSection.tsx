import { useEffect, useRef, useState } from "react";
import profile from "../../assets/profile.png";
import Shadow from "../ui/Shadow";
import { motion, useScroll, useTransform } from "framer-motion";
import axios from "axios";
import { BASE_URL } from "../../constants/baseURL";

type education_TP = {
  id: number;
  period: string;
  description: string;
}[];

type experience_TP = {
  id: number;
  period: string;
  company: string;
  position: string;
  description: string;
}[];

const ExperienceSection = () => {
  const [education, setEducation] = useState<education_TP>();
  const [experience, setExperience] = useState<experience_TP>();

  useEffect(() => {
    axios.get(`${BASE_URL}/api/education`).then((response) => {
      setEducation(response.data.data);
    });
    axios.get(`${BASE_URL}/api/experience`).then((response) => {
      setExperience(response.data.data);
    });
  }, []);

  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const opacityImg = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  // const XImg = useTransform(scrollYProgress, [0.1, 0.4], [-90, 0]);
  const XImg = useTransform(scrollYProgress, [0.1, 0.25], ["-50%", "-10%"]);
  const yImg = useTransform(scrollYProgress, [0.1, 0.25], [-200, 0]);
  const spanWidth = useTransform(scrollYProgress, [0.1, 0.45], ["50%", "0%"]);
  const spanHeight = useTransform(scrollYProgress, [0.2, 0.8], ["5%", "80%"]);

  const spanBWidth = useTransform(scrollYProgress, [0.9, 1], ["5%", "70%"]);
  const spanBHeight = useTransform(scrollYProgress, [0.8, 1], ["30%", "5%"]);

  const headerXOne = useTransform(scrollYProgress, [0.1, 0.2], [100, 0]);
  const headerOpacityOne = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

  const ulXOne = useTransform(scrollYProgress, [0.2, 0.3], [100, 0]);
  const ulOpacityOne = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const ulOneSpanHeight = useTransform(
    scrollYProgress,
    [0.3, 0.4, 1],
    ["0%", "100%", "100%"]
  );
  const ul2SpanHeight = useTransform(
    scrollYProgress,
    [0.4, 0.9, 1],
    ["0%", "100%", "100%"]
  );

  const headerXTwo = useTransform(scrollYProgress, [0.4, 0.5], [100, 0]);
  const headerOpacityTwo = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

  return (
    <section id="about" ref={ref} className="relative">
      <div className="pt-32 flex flex-col md:flex-row justify-between lg:container">
        <motion.div
          style={{ opacity: opacityImg, x: XImg, y: yImg }}
          className="w-full z-50 sm:w-2/3 mx-auto ps-20 sm:ps-12 lg:ps-0 md:w-1/2 h-full xl:max-w-[35%] md:sticky top-[5vh]">
          <div className="relative">
            <img className="w-full h-full px-12" src={profile} alt="profile" />
            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black" />
          </div>
          <div className="text-center -translate-y-5">
            <h3 className="gradient_text text-2xl">
              from tunisia based in istanbul
            </h3>
            <p>
              I am committed to my passion in the design. Fully dedicating
              myself to each project and fulfilling the company's and client's
              needs. I actively pursue industry trends and techniques beneficial
              to our endeavors. Strive for optimal results at all time.
            </p>
          </div>
        </motion.div>
        <div className="w-full mb-20 md:w-[45%] p-8 relative 2xl:max-w-[50%] me-10 z-50">
          <motion.span
            style={{ width: spanWidth }}
            className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-white"></motion.span>
          <motion.span
            style={{ height: spanHeight }}
            className="absolute top-0 left-0 h-48 w-1 bg-gradient-to-b from-white max-h-full"></motion.span>
          <div className="capitalize overflow-hidden">
            <motion.h2
              style={{ x: headerXOne, opacity: headerOpacityOne }}
              className="text-3xl gradient_text !m-0">
              education
            </motion.h2>
            <motion.ul
              style={{ x: ulXOne, opacity: ulOpacityOne }}
              className="list-disc space-y-16 ps-8 relative">
              <motion.span
                style={{ height: ulOneSpanHeight }}
                className="absolute top-3 left-0 max-h-full h-full w-1 bg-gradient-to-b from-white"></motion.span>
              {education?.map((edu) => (
                <motion.li
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.4 },
                  }}
                  key={edu.id}
                  className="relative before:absolute before:-left-7 before:top-3 before:w-4 before:h-1 before:bg-gradient-to-l before:from-white first-of-type:before:bg-white font-bold text-lg !mt-4">
                  <span className="absolute -left-4 top-[10px] rounded-full w-2 h-2 bg-white"></span>{" "}
                  {edu.period}
                  <p className="font-light text-base">{edu.description} </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className="capitalize overflow-hidden pt-10">
            <motion.h2
              style={{ x: headerXTwo, opacity: headerOpacityTwo }}
              className="text-3xl gradient_text !m-0">
              experience
            </motion.h2>
            <ul className="list-disc space-y-16 ps-8 relative">
              <motion.span
                style={{ height: ul2SpanHeight }}
                className="absolute top-3 left-0 max-h-full h-full w-1 bg-gradient-to-b from-white"></motion.span>
              {experience?.map((exp) => (
                <motion.li
                  key={exp.id}
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.4, delay: 0.2 },
                  }}
                  className="relative before:absolute before:-left-7 before:top-3 before:w-4 before:h-1 before:bg-gradient-to-l before:from-white first-of-type:before:bg-white font-bold text-lg ">
                  <span className="absolute -left-4 top-[10px] rounded-full w-2 h-2 bg-white"></span>{" "}
                  {exp.period}
                  <p className="font-light text-base">
                    {exp.company}
                    <p className="font-bold text-lg">{exp.position}</p>-{" "}
                    {exp.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.span
            style={{ width: spanBWidth }}
            className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-white"></motion.span>
          <motion.span
            style={{ height: spanBHeight }}
            className="absolute bottom-0 right-0 h-48 w-1 bg-gradient-to-t from-white"></motion.span>
        </div>
      </div>
      <div className="overflow-hidden absolute bottom-0 right-0 w-full h-full">
        <Shadow positionY="bottom-1/4" />
      </div>
    </section>
  );
};

export default ExperienceSection;
