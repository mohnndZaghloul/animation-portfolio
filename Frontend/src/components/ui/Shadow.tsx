import { motion } from "framer-motion";

const Shadow = ({
  positionY = "top-0",
  isRed = false,
}: {
  positionY?: string;
  isRed?: boolean;
}) => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0, zIndex: 50 }}
      whileInView={{
        x: "50%",
        opacity: 1,
        zIndex: 40,
        transition: { duration: 1, delay: 1 },
      }}
      className={`absolute ${positionY} right-0 ${
        isRed
          ? "blur-[25rem]  w-[58rem] h-[30rem] bg-primary"
          : "blur-[14rem]  w-[26rem] h-[26rem] bg-Secondary"
      } rounded-full z-40`}
    />
  );
};

export default Shadow;
