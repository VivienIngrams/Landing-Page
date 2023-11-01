'use client'

import React from "react";

import { motion } from "framer-motion";
import { TypingText } from "../components/CustomTexts";
import { staggerContainer, fadeIn, slideIn } from "../../utils/motion";
import styles from "../../styles";


const OpeningTimes: React.FC = () => {
  return (
    <motion.div id='OpeningTimes'
      variants={staggerContainer(0.2, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto h-screen flex flex-col h-full mt-20 gap-8 justify-center items-center`}
    >
      <TypingText title="| Horários" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="text-center tracking-wide text-neutral-400 text-xl leading-loose my-20 md:my-4"
      >
        <span className="font-semibold text-white">Segunda-feira  </span> 09:00 - 20:00
        <br />
        <span className="font-semibold text-white">Terça-feira  </span> 09:00 - 20:00
        <br />
        <span className="font-semibold text-white">Quarta-feira  </span> 09:00 - 20:00
        <br />
        <span className="font-semibold text-white">Quinta-feira  </span> 09:00 - 20:00
        <br />
        <span className="font-semibold text-white">Sexta-feira  </span> 09:00 - 20:00
        <br />
        <span className="font-semibold text-white">Sábado  </span>
        09:00 - 13:00
        <br />
       <span className="font-semibold text-white"> Domingo </span> Fechado
      </motion.p>
    </motion.div>
  );
};

export default OpeningTimes;
