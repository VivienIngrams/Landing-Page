"use client";

import React from "react";
// import Maps from "../components/Maps";

import { motion } from "framer-motion";

import styles from "../../styles";
import { TypingText } from "../components/CustomTexts";
import { staggerContainer, fadeIn } from "../../utils/motion";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => {
  return (
    <section id="Contact"
      className={`${styles.paddings} mt-20 relative h-full z-10 font-normal sm:text-[26px] text-[18px] text-center text-neutral-600`}
    >
      <motion.div
        variants={staggerContainer( 0.2, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col gap-8 justify-center items-center`}
      >
        <TypingText title="| Contacto" textStyles="text-center" />
        <div className="max-w-[1240px] mt-8 flex flex-col md:flex-row justify-center items-center w-full">
          <div className="p-4 md:w-[50%]">
            <motion.p
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="flex justify-center flex-col text-center"
            >
              <span className="font-bold text-white">Banhos e Tosquias</span>
              <br />
              Rua do Campo 13
              <br />
              4000-001 Porto
              <br />
             <span className="font-bold text-neutral-600">+351 123 001 789</span> 
            </motion.p>
            <motion.a  variants={fadeIn("up", "tween", 0.2, 1)}
                         href="mailto:somebody@gmail.com" className="mb-2 flex flex-col items-center underline space-x-2 sm:text-[20px] md:text-xl py-2">
                           banhosetosquias@gmail.com
                        </motion.a>
          </div>
          <div className=" rounded-xl w-full h-full min-h-[300px] min-w-[300px] md:w-[50%] md:h-auto relative aspect-auto">
            {/* <Maps /> */}
          </div>
        </div>
        <h1 className="text-white mt-6">Entre em contacto connosco...</h1>
      <ContactForm/>
      </motion.div>
    </section>
  );
};
export default Contact;
