'use client'

import { motion, Variants } from 'framer-motion';
import { textContainer, textVariant2 } from '@/utils/motion';

interface TypingTextProps {
  title: string;
  textStyles: string;
}

export const TypingText: React.FC<TypingTextProps> = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer as Variants}
    className={`font-normal text-[20px] text-white my-10 uppercase ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2 as Variants} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);


