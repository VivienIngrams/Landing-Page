"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import {TypingText} from "../components/CustomTexts";


const About = () => (
  <section className={`${styles.paddings} relative z-10 md:m-20 m-4 font-normal sm:text-[26px] text-[18px] text-center text-neutral-600 text-secondary-white`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Sobre Nós" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] "
      >
        Seja
        <span className="font-extrabold text-white"> bem-vindo</span> à nossa
        loja de serviços de cuidados para cães e gatos no coração de Porto!
        Aqui, dedicamo-nos ao bem-estar e à beleza dos seus amigos de quatro
        patas. Oferecemos uma{" "}
        <span className="font-extrabold text-white">
          gama completa de serviços de banho, tosa e tratamentos especiais
        </span>{" "}
        para garantir que o seu animal de estimação se sinta e pareça incrível. A nossa equipa de profissionais experientes e amantes de animais 
        <span className="font-extrabold text-white"> cuidará do seu cão ou gato </span>{" "}
         com carinho e atenção personalizada. O seu animal
        merece o melhor, e é isso que lhe proporcionamos. Venha visitar-nos e
        deixe-nos mimar o seu companheiro peludo. Afinal, eles são mais do que
        animais de estimação, são parte da família!
      </motion.p>

      
    </motion.div>
  </section>
);

export default About;