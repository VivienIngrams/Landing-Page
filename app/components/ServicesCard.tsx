"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import { fadeIn } from "../../utils/motion";
import Image from "next/image";

interface ServicesCardProps {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  prices: string;
  showPrices: boolean;
  handleClick: (id: string) => void;
  priceHandler: (prices: boolean) => void;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  id,
  imgUrl,
  title,
  index,
  active,
  prices,
  showPrices,
  handleClick,
  priceHandler,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[1.5] flex-[15]" : "lg:flex-[0.5] flex-[5]"
    } flex m-1 items-center justify-center  transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <div className="relative w-full h-full ">
      <Image
        src={imgUrl}
        alt=""
        height={400}
        width={170}
        className="absolute w-full h-full object-cover overflow-hidden rounded-[24px]"
      />{" "}
      <div className="absolute w-full h-full bg-neutral-500 opacity-30 rounded-[24px]"></div>
    </div>
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 pl-6 pb-2 flex justify-start w-full flex-col rounded-b-[24px]">
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
        {showPrices === true ? (
          <div className="flex flex-col max-w-[250px] gap-2 text-white text-lg m-2">
            <div>{prices}</div>
          </div>
        ) : (
          <button
            onClick={() => priceHandler(true)}
            className="font-bold text-left  uppercase   p-1 text-[16px] leading-[20.16px] text-white"
          >
            Ver preços
          </button>
        )}
      </div>
    )}
  </motion.div>
);

export default ServicesCard;
