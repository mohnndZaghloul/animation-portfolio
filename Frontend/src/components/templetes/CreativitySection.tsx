import { useRef } from "react";
import img1 from "../../assets/pic3 for page 7.jpg";
import img2 from "../../assets/pic4 for page 7.jpg";
import img3 from "../../assets/pic5 for page 7.jpg";
import img4 from "../../assets/pic6 for page 7.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const CreativitySection = () => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const firstImgY = useTransform(scrollYProgress, [0, 0.15], ["-70%", "0%"]);
  const firstImgScale = useTransform(scrollYProgress, [0, 0.15], [1.4, 1.1]);
  const firstImgOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  const secondImgY = useTransform(scrollYProgress, [0.2, 0.35], ["120%", "0%"]);
  const secondImgScale = useTransform(scrollYProgress, [0.2, 0.35], [1.4, 1.1]);
  const secondImgOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);

  const thirdImgY = useTransform(scrollYProgress, [0.4, 0.55], ["120%", "0%"]);
  const thirdImgScale = useTransform(scrollYProgress, [0.4, 0.55], [1.4, 1.1]);
  const thirdImgOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);

  const fourthImgY = useTransform(scrollYProgress, [0.6, 0.75], ["120%", "0%"]);
  const fourthImgScale = useTransform(scrollYProgress, [0.6, 0.75], [1.4, 1.1]);
  const fourthImgOpacity = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);

  return (
    <section ref={ref} className="container section_padding">
      <div className="h-[150vh] md:h-[1000vh] lg:py-40 xl:py-80">
        <div className="sticky mx-auto w-[77%] md:w-3/4 top-[40vh] md:top-[55vh] lg:top-[40vh] xl:top-[20vh]">
          <motion.div
            style={{
              y: firstImgY,
              scale: firstImgScale,
              opacity: firstImgOpacity,
            }}
            className="w-full z-0">
            <img src={img1} alt="creativity" />
          </motion.div>
          <motion.div
            style={{
              y: secondImgY,
              scale: secondImgScale,
              opacity: secondImgOpacity,
            }}
            className="absolute top-0 left-0 h-full w-full z-10">
            <img src={img2} alt="creativity" />
          </motion.div>
          <motion.div
            style={{
              y: thirdImgY,
              scale: thirdImgScale,
              opacity: thirdImgOpacity,
            }}
            className="absolute top-0 left-0 h-full w-full z-20">
            <img src={img3} alt="creativity" />
          </motion.div>
          <motion.div
            style={{
              y: fourthImgY,
              scale: fourthImgScale,
              opacity: fourthImgOpacity,
            }}
            className="absolute top-0 left-0 h-full w-full z-20">
            <img src={img4} alt="creativity" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CreativitySection;
