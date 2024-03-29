import Inst from "../../assets/insta.png";
import LinkedIn from "../../assets/linkedin.png";
import Whatsapp from "../../assets/whatsapp.png";
import Mail from "../../assets/mail.png";
import Logo from "../../assets/bottomLogo.png";
import Shadow from "../ui/Shadow";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";

type contacts_TP = {
  instagram: string;
  linkedin: string;
  whatsapp: string;
  mail: string;
};

const ContactSection = () => {
  const [contacts, setContacts] = useState<contacts_TP>();

  useEffect(() => {
    axios.get("http://localhost:5050/api/contacts").then((response) => {
      setContacts(response.data.data);
    });
  }, []);

  return (
    <section id="contacts" className="container relative text-center !py-40">
      <div className="relative">
        <span className="capitalize font-bold tracking-wide text-5xl italic bg-gradient-to-r from-primary to-Secondary bg-clip-text text-transparent">
          contact me
        </span>
        <p className="text-grayText pt-2 max-w-[520px] mx-auto">
          For any questions or assistance , please contact me and i will get
          back to you as soon as possible
        </p>
        <motion.div
          initial={{ x: "-50%" }}
          whileInView={{
            x: "100%",
            transition: {
              duration: 2,
            },
          }}
          className="absolute top-0 left-1/2 w-[400px] h-full bg-black"
        />
      </div>
      <div className="flex justify-evenly items-center pt-10 z-50">
        <a target="_blank" href={contacts?.instagram}>
          <motion.img
            initial={{ opacity: 0.7 }}
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              opacity: 1,
              transition: { duration: 0.3 },
            }}
            animate={{
              y: [0, 2, 4, 2, 0, -2, -4, -2, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
              },
            }}
            className="w-20 h-20 md:w-32 md:h-32 cursor-pointer object-cover object-center"
            src={Inst}
            alt="Instagram"
          />
        </a>
        <a target="_blank" href={contacts?.linkedin}>
          <motion.img
            initial={{ opacity: 0.7 }}
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              opacity: 1,
              transition: { duration: 0.3 },
            }}
            animate={{
              y: [0, 2, 4, 2, 0, -2, -4, -2, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
              },
            }}
            className="w-20 h-20 md:w-32 md:h-32 cursor-pointer object-cover object-center"
            src={LinkedIn}
            alt="LinkedIn"
          />
        </a>
        <a target="_blank" href={`https://wa.me/${contacts?.whatsapp}`}>
          <motion.img
            initial={{ opacity: 0.7 }}
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              opacity: 1,
              transition: { duration: 0.3 },
            }}
            animate={{
              y: [0, 2, 4, 2, 0, -2, -4, -2, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
              },
            }}
            className="w-20 h-20 md:w-32 md:h-32 cursor-pointer object-cover object-center"
            src={Whatsapp}
            alt="Whatsapp"
          />
        </a>
        <a href={`mailto:${contacts?.mail}`}>
          <motion.img
            initial={{ opacity: 0.7 }}
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              opacity: 1,
              transition: { duration: 0.3 },
            }}
            animate={{
              y: [0, 2, 4, 2, 0, -2, -4, -2, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
              },
            }}
            className="w-20 h-20 md:w-32 md:h-32 cursor-pointer object-cover object-center"
            src={Mail}
            alt="Mail"
          />
        </a>
      </div>
      <img className="mx-auto pt-20 w-40" src={Logo} alt="Logo" />
      <Shadow isRed positionY="-bottom-1/3 translate-y-1/2" />
      <Shadow positionY="-bottom-1/3 translate-y-1/2" />
    </section>
  );
};

export default ContactSection;
