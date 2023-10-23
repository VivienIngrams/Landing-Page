"use client";

import React from "react";
import Maps from "../components/Maps";

import { motion } from "framer-motion";

import styles from "../../styles";
import { TypingText } from "../components/CustomTexts";
import { staggerContainer, fadeIn, slideIn } from "../../utils/motion";

const Contact: React.FC = () => {
  return (
    <section
      className={`${styles.paddings} mt-20 relative h-screen z-10 font-normal sm:text-[26px] text-[18px] text-center text-neutral-600`}
    >
      <motion.div
        variants={staggerContainer}
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
              Rua Imaginária 123
              <br />
              4000-001 Porto
              <br />
              +351 123 456 789
            </motion.p>
          </div>
          <div className="p-4 border-4 border-neutral-500 w-full h-full min-h-[300px] min-w-[300px] md:w-[50%] md:h-auto relative aspect-auto">
            <Maps />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Contact;
