"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import { fadeIn } from "../../utils/motion";
import Image from "next/image";

interface ExploreCardProps {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
}

const ExploreCard: React.FC<ExploreCardProps> = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[1.5] flex-[15]" : "lg:flex-[0.5] flex-[4]"
    } flex m-1 items-center justify-center  transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt=""
      height={500}
      width={170}
      className="absolute w-full h-full object-cover overflow-hidden rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 pl-6 pb-2 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism `}
        >
          <Image
            src="/Paw.png"
            alt="headset"
            height={60}
            width={60}
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <h2 className=" font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
        <p className="font-normal text-[16px] leading-[20.16px] text-white">
          Ver preços
        </p>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
