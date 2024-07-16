import { useRef } from "react";
import SWImg from "../../assets/softwareIMG.png";
import { motion, useScroll, useTransform } from "framer-motion";

const SoftwareSection = () => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["50%", "0%"]);
  return (
    <section className="h-[50vh] md:h-[300vh] container" ref={ref}>
      <motion.img
        style={{ scale, borderRadius }}
        className="w-full sticky top-1/3 md:top-0 overflow-hidden"
        src={SWImg}
        alt="software image"
      />
    </section>
  );
};

export default SoftwareSection;
