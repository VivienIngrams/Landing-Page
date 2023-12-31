"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import styles from "@/styles";
import { fadeIn, slideIn, staggerContainer, textVariant } from "@/utils/motion";
// import { HiArrowDown } from "react-icons/hi";

const Hero = () => (
  <section id="Home" className={`${styles.yPaddings} text-indigo-700`}>
    <motion.div
      variants={staggerContainer(0.2, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <a
        href="/#About"
        className="flex w-full justify-center items-center flex-col absolute z-10"
      >
        <motion.h1
          variants={textVariant(1.1)}
          className="font-normal lg:text-[100px] md:text-[70px] sm:text-[40px] text-[25px]  uppercase"
        >
          Banhos
        </motion.h1>
        <div className="flex  justify-center">
          <motion.h1
            variants={textVariant(1.2)}
            className="font-normal lg:text-[100px] md:text-[70px] sm:text-[40px] text-[25px] uppercase"
          >
            & Tosquias
          </motion.h1>
        </div>
      </a>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full max-h-350 overflow-hidden md:-mt-[20px] -mt-[12px]"
      >
        <Image
          src="https://images.unsplash.com/photo-1560743173-567a3b5658b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          width={1200}
          height={500}
          alt={"Dogs"}
          className="object-cover w-full"
        />
        <a href="#services">
          <div className=" flex justify-end  -mt-[50px] pr-[20px] relative z-10">
            <Image src="/Paw.png" alt="Paw" height={70} width={70} />
          </div>
        </a>
      </motion.div>
      {/* <motion.div
        variants={fadeIn("up", "tween", 0.8, 1)}
        className="w-[18px] h-[28px] object-contain my-[28px] z-30"
      >
        <HiArrowDown className="object-cover"/>
      </motion.div> */}
    </motion.div>
  </section>
);

export default Hero;
