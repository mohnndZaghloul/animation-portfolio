import Shadow from "../ui/Shadow";
import IMG1 from "../../assets/heroIMG1.jpg";
import IMG2 from "../../assets/heroIMG2.jpg";
import VID1 from "../../assets/1.mov";
import { motion } from "framer-motion";

const FirstSection = () => {
  const TextVariants = {
    initial: {
      opacity: 0,
      y: 100,
      transition: {
        when: "afterChildren",
      },
    },
    animation: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.3,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <section className="container lg:min-h-max pt-20 lg:pt-0 flex flex-col lg:flex-row justify-center lg:items-center gap-y-10 relative lg:h-screen">
      <div className="font-bold w-full lg:w-[40%] -translate-y-8">
        <motion.h1
          initial="initial"
          whileInView="animation"
          variants={TextVariants}
          className="text-8xl tracking-wide">
          Nader <br /> Chekir
        </motion.h1>
        <motion.h2
          initial="initial"
          whileInView="animation"
          variants={TextVariants}
          className="capitalize tracking-wide pt-2 text-7xl bg-gradient-to-r from-primary to-50% to-Secondary bg-clip-text text-transparent">
          interior artist
        </motion.h2>
        <motion.p
          initial="initial"
          whileInView="animation"
          variants={TextVariants}
          className="text-grayText pt-1 font-light">
          "We are artists before an interior architects."
        </motion.p>
      </div>
      <div className="relative w-full lg:w-[60%] h-full z-50">
        <div className="w-full lg:w-[22rem] aspect-auto lg:absolute top-1/2 lg:-translate-y-3/4 left-1/3 lg:-translate-x-1/2 z-30">
          <div className="relative overflow-hidden">
            <img src={IMG2} className="p-1" alt="image1" />
            <motion.div
              initial={{ x: 0 }}
              whileInView={{ x: "-100%", transition: { duration: 1.5 } }}
              className="bg-black absolute left-0 top-0 w-full h-full"
            />
          </div>
        </div>
        <div className="w-full lg:w-[26rem] aspect-auto lg:absolute top-1/3 lg:-translate-y-1/4 right-0 z-20">
          <div className="relative overflow-hidden">
            <img src={IMG1} className="p-1" alt="image2" />
            <motion.div
              initial={{ x: 0 }}
              whileInView={{ x: "100%", transition: { duration: 1.5 } }}
              className="bg-black absolute left-0 top-0 w-full h-full"
            />
          </div>

          <div />
        </div>
        <div className="w-full lg:w-[30rem] aspect-auto lg:absolute top-3/4 lg:-translate-y-[45%] left-1/3 lg:-translate-x-[45%] z-10">
          <div className="relative overflow-hidden">
            <video autoPlay muted loop>
              <source src={VID1} type="video/mp4" />
              <source src={VID1} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
            <motion.div
              initial={{ x: 0 }}
              whileInView={{ x: "-100%", transition: { duration: 1.5 } }}
              className="bg-black absolute left-0 top-0 w-full h-full"
            />
          </div>
          <div />
        </div>
      </div>
      <Shadow positionY="-top-1/4" />
    </section>
  );
};

export default FirstSection;
