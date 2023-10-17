"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import styles from "@/styles";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col absolute z-10">
        <motion.h1 variants={textVariant(1.1)} className="font-bold lg:text-[100px] md:text-[70px] sm:text-[40px] text-[30px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase">
          Banhos e
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className="font-bold lg:text-[100px] md:text-[70px] sm:text-[40px] text-[30px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase">
            Tosquias
          </h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full max-h-350 overflow-hidden md:-mt-[20px] -mt-[12px]"
      >
        {/* <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" /> */}

        <Image
          src='https://images.unsplash.com/photo-1560743173-567a3b5658b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
          width={1200}
          height={500}
          alt={"Dogs"}
          className="object-cover w-full"
        />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <Image 
            src='/Paw.png'
            alt='Paw'
            height={100}
            width={100}
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
