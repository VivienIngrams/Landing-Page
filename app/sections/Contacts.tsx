'use client'

import React from 'react'

import { motion } from "framer-motion";

import styles from "../../styles";
import { TypingText } from "../components/CustomTexts";
import { staggerContainer, fadeIn } from "../../utils/motion";
// import ContactForm from "../components/ContactForm";

const Contacts = () => {
  return (
        <section id="Contact"
          className={`${styles.paddings} mt-20 relative h-full z-10 font-normal sm:text-[26px] text-[18px] text-center text-neutral-600`}
        >
            Contacts</section>
  )
}

export default Contacts