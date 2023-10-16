
'use client';

import { motion } from 'framer-motion';

import { navVariants } from '@/utils/motion';
import styles from '@/styles';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Navbar: React.FC  = () => {

  return (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        Tosquias e banhos
      </h2>
      <AiOutlineMenu size={25} color="#4b5563" />
      <AiOutlineClose size={25} color="#4b5563" />
    </div>
  </motion.nav>
)};

export default Navbar;