import { useScroll, useTransform } from "framer-motion";
import img1 from "../../assets/pic for page 7.jpg";
import img2 from "../../assets/heroIMG2.jpg";
import { useRef } from "react";
import { motion } from "framer-motion";

const SecondSection = () => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.2 1", "1 1"],
  });

  const translateX = useTransform(scrollYProgress, [0, 0.7], ["0%", "100%"]);
  const translateXRev = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["0%", "-100%"]
  );
  const transformY = useTransform(scrollYProgress, [0.5, 0.7], ["100%", "0%"]);
  const opacityY = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  return (
    <section ref={ref} className="container py-40">
      <div className="h-[100vh] lg:h-[250vh]">
        <div className="sticky top-[30vh] md:top-[15vh]">
          <div className="flex justify-between lg:px-4 relative">
            <div className="w-3/4 md:w-[40%] relative overflow-hidden -translate-y-20">
              <img className="w-full h-full" src={img2} alt="image 2" />
              <motion.div
                style={{ x: translateX }}
                className="absolute top-0 left-0 w-full h-full bg-black"
              />
            </div>
            <div className="w-3/4 md:w-1/3 relative overflow-hidden mt-auto translate-y-14">
              <img className="w-full h-full" src={img1} alt="image 2" />
              {/* <video className="w-full h-full" autoPlay muted loop>
                <source src={video} type="video/mp4" />
                <source src={video} type="video/ogg" />
                Your browser does not support the video tag.
              </video> */}
              <motion.div
                style={{ x: translateXRev }}
                className="absolute top-0 left-0 w-full h-full bg-black"
              />
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-[54%] -translate-y-[35%] text-xl md:text-3xl lg:text-[3.2rem] xl:text-6xl font-bold">
              <div className="relative space-y-4 sm:space-y-6 lg:space-y-8">
                <motion.span
                  style={{ opacity: scrollYProgress }}
                  className="text-3xl md:text-4xl lg:text-7xl xl:text-9xl absolute -left-1/4 -translate-x-full lg:-translate-y-4">
                  “
                </motion.span>
                <motion.p
                  style={{ opacity: scrollYProgress }}
                  className="-translate-x-1/4">
                  We will create
                </motion.p>
                <motion.p style={{ opacity: scrollYProgress }}>
                  all this together
                </motion.p>
                <motion.p
                  style={{ opacity: opacityY, y: transformY, x: "75%" }}
                  className="bg-gradient-to-r from-primary to-50% to-Secondary bg-clip-text text-transparent">
                  and more...
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
