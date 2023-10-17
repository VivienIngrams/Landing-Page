
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { navVariants } from '@/utils/motion';
import styles from '@/styles';
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from 'react-icons/hi';


const Navbar: React.FC  = () => {

  return (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} text-white py-3 first:relative`}
  >
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
       <Image 
            src='/Paw.png'
            alt='Paw'
            height={30}
            width={30}
            className='mb-4 mx-2'
            />
      <h2 className="font-bold text-[24px] leading-[30.24px]">
        Cuidando os seus cães e gatos
      </h2>
      <HiOutlineMenuAlt3 size={25}  />
      {/* <AiOutlineClose size={25} color="#4b5563" /> */}
    </div>
  </motion.nav>
)};

export default Navbar;