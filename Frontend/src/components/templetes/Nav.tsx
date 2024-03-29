// @ts-nocheck
import { useScroll, motion } from "framer-motion";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };

  return (
    <header className="fixed overflow-hidden w-full top-0 left-0 z-40 text-white">
      <motion.nav
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        className="flex items-center gap-4 lg:gap-8 py-2 bg-black px-4 lg:px-20">
        <Link to="">
          <img className="w-12 lg:w-16 p-2" src={Logo} alt="logo" />
        </Link>
        <ul className="capitalize text-sm lg:text-lg flex items-center space-x-8">
          <li className="bg-gradient-to-r from-primary to-Secondary bg-clip-text hover:text-transparent transition">
            <HashLink to="/#about">about me</HashLink>
          </li>
          <li className="bg-gradient-to-r from-primary to-Secondary bg-clip-text hover:text-transparent transition">
            <Link to="/portfolio">portfolio</Link>
          </li>
          <li className="bg-gradient-to-r from-primary to-Secondary bg-clip-text hover:text-transparent transition">
            <HashLink to="/#contacts">contact</HashLink>
          </li>
        </ul>
      </motion.nav>
    </header>
  );
};

export default Nav;
