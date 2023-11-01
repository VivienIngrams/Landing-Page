"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import {TypingText} from "../components/CustomTexts";


const About = () => (
  <section id='About' className={`${styles.paddings} relative z-10 md:m-40 m-2 font-normal md:text-[26px] sm:text-[20px] text-[18px] text-center text-white h-screen`}>
    <motion.div
      variants={staggerContainer(0.2, 0.2)}
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
        <span className="font-extrabold"> bem-vindo</span> à nossa
        loja de serviços de cuidados para cães e gatos no coração de Porto!
        Aqui, dedicamo-nos ao bem-estar e à beleza dos seus amigos de quatro
        patas. Oferecemos uma{" "}
        <span className="font-extrabold">
          gama completa de serviços de banho, tosa e tratamentos especiais
        </span>{" "}
        para garantir que o seu animal de estimação se sinta e pareça incrível. A nossa equipa de profissionais experientes e amantes de animais 
        <span className="font-extrabold"> cuidará do seu cão ou gato </span>{" "}
         com carinho e atenção personalizada. O seu animal
        merece o melhor, e é isso que lhe proporcionamos. Venha visitar-nos e
        deixe-nos mimar o seu companheiro peludo. Afinal, eles são mais do que
        animais de estimação, são parte da família!
      </motion.p>

      
    </motion.div>
  </section>
);

export default About;