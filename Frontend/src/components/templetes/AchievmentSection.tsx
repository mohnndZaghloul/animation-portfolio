import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const AchievmentSection = () => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1 1"],
  });

  const text1Opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  const text2Opacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);

  const text3Opacity = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);

  const text4Opacity = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  return (
    <section ref={ref} className="bg-white text-black section_padding">
      <div className="h-[300vh]">
        <div className="sticky text-[5rem] h-screen leading-none sm:text-8xl md:text-9xl font-bold mx-auto ps-4 md:ps-10 2xl:ps-40 md:w-3/4 lg:w-1/2 top-0 flex flex-col justify-center">
          <motion.p style={{ opacity: text1Opacity, y: text1Opacity }}>
            let's
          </motion.p>
          <motion.p style={{ opacity: text2Opacity, y: text2Opacity }}>
            achieve
          </motion.p>
          <motion.p style={{ opacity: text3Opacity, y: text3Opacity }}>
            dreams
          </motion.p>
          <motion.p
            style={{ opacity: text4Opacity, y: text4Opacity }}
            className="text-[5.5rem] sm:text-9xl md:text-[9rem] gradient_text pb-10 !m-0 !normal-case">
            together
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AchievmentSection;
