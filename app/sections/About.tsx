"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import {TypingText} from "../components/CustomTexts";
import { HiArrowDown } from "react-icons/hi";

const About = () => (
  <section className={`${styles.paddings} relative z-10 font-normal sm:text-[32px] text-[20px] text-center text-neutral-600 text-secondary-white`}>
    <div className=" z-0" />
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
        para garantir que o seu animal de estimação se sinta e pareça incrível.
        A nossa equipa de profissionais experientes e amantes de animais cuidará
        do seu cão ou gato com carinho e atenção personalizada. O seu animal
        merece o melhor, e é isso que lhe proporcionamos. Venha visitar-nos e
        deixe-nos mimar o seu companheiro peludo. Afinal, eles são mais do que
        animais de estimação, são parte da família!
      </motion.p>

      <motion.div
        variants={fadeIn("up", "tween", 0.8, 1)}
        className="w-[18px] h-[28px] object-contain my-[28px]"
      >
        <HiArrowDown className="object-cover"/>
      </motion.div>
    </motion.div>
  </section>
);

export default About;
