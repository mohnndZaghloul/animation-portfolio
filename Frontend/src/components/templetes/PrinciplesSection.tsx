import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const PrinciplesSection = () => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.25], [150, 0]);
  const pargraphY = useTransform(scrollYProgress, [0, 0.28], [150, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const li1X = useTransform(scrollYProgress, [0.28, 0.45], [-10, 50]);
  const li1Opacity = useTransform(scrollYProgress, [0.28, 0.45], [0, 1]);

  const li2X = useTransform(scrollYProgress, [0.46, 0.55], [10, -50]);
  const li2Opacity = useTransform(scrollYProgress, [0.46, 0.55], [0, 1]);

  const li3X = useTransform(scrollYProgress, [0.56, 0.65], [-10, 50]);
  const li3Opacity = useTransform(scrollYProgress, [0.56, 0.65], [0, 1]);

  const li4X = useTransform(scrollYProgress, [0.66, 0.75], [10, -50]);
  const li4Opacity = useTransform(scrollYProgress, [0.66, 0.75], [0, 1]);

  const li5X = useTransform(scrollYProgress, [0.76, 0.85], [-10, 50]);
  const li5Opacity = useTransform(scrollYProgress, [0.76, 0.85], [0, 1]);

  const li6X = useTransform(scrollYProgress, [0.86, 1], [10, -50]);
  const li6Opacity = useTransform(scrollYProgress, [0.86, 1], [0, 1]);

  return (
    <section
      ref={ref}
      className="container overflow-hidden text-center capitalize pt-20 md:py-40">
      <motion.h1
        style={{ y: headerY, opacity: headerOpacity }}
        className="text-xl lg:text-3xl font-semibold">
        my principles
      </motion.h1>
      <motion.p
        style={{ y: pargraphY, opacity: headerOpacity }}
        className="text-2xl lg:text-4xl text-grayText pt-4">
        saving so much more ...
      </motion.p>
      <ul className="space-y-10 md:space-y-24 lg:space-y-32 py-24">
        <motion.li
          style={{ x: li1X, opacity: li1Opacity }}
          className="moving_li">
          creativity
        </motion.li>
        <motion.li
          style={{ x: li2X, opacity: li2Opacity }}
          className="moving_li">
          precision
        </motion.li>
        <motion.li
          style={{ x: li3X, opacity: li3Opacity }}
          className="moving_li">
          details
        </motion.li>
        <motion.li
          style={{ x: li4X, opacity: li4Opacity }}
          className="moving_li">
          knowledge
        </motion.li>
        <motion.li
          style={{ x: li5X, opacity: li5Opacity }}
          className="moving_li">
          professional
        </motion.li>
        <motion.li
          style={{ x: li6X, opacity: li6Opacity }}
          className="moving_li">
          discipline
        </motion.li>
      </ul>
    </section>
  );
};

export default PrinciplesSection;
