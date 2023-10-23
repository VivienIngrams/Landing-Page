"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { TypingText } from "../components/CustomTexts";

const Team: React.FC = () => {
  return (
    <section className={`${styles.paddings}`} id="services">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col mt-20`}
      >
        <TypingText title="| Nossa equipa" textStyles="text-center" />

        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className=" flex flex-col items-center justify-center col-span-2 font-pt">
            <div className="p-4 py-10 text-xl">
              Rita Bonita
            </div>
            <div className="p-4 py-10 text-neutral-600">
              Um empregado muito simpatico
            </div>
          </div>
          <div className="md:h-full  px-20 md:p-10 m-auto bg-transparent flex justify-center items-center">
            <Image
              className="border-4 border-neutral-500 rounded-xl"
              src="https://images.unsplash.com/photo-1588950538967-ca7f8599c669?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZldGVyaW5hcmlhbnxlbnwwfHwwfHx8MA%3D%3D"
              width={200}
              height={400}
              alt=""
            />
          </div>
        </div>
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="md:h-full  px-20 md:p-10 m-auto bg-transparent flex justify-center items-center">
            <Image
              className="border-4 border-neutral-500 rounded-xl"
              src="https://images.unsplash.com/photo-1588950538967-ca7f8599c669?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZldGVyaW5hcmlhbnxlbnwwfHwwfHx8MA%3D%3D"
              width={200}
              height={400}
              alt=""
            />
          </div>
          <div className=" flex flex-col items-center justify-center col-span-2 font-pt">
            <div className="p-4 py-10 text-xl">
              Rita Bonita
            </div>
            <div className="p-4 py-10 text-neutral-600">
              Um empregado muito simpatico
            </div>
          </div>
        </div>
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className=" flex flex-col items-center justify-center col-span-2 font-pt">
            <div className="p-4 py-10 text-xl">
              Rita Bonita
            </div>
            <div className="p-4 py-10 text-neutral-600">
              Um empregado muito simpatico
            </div>
          </div>
          <div className="md:h-full  px-20 md:p-10 m-auto bg-transparent flex justify-center items-center">
            <Image
              className="border-4 border-neutral-500 rounded-xl"
src="https://plus.unsplash.com/premium_photo-1663011161366-4b812777c636?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZldGVyaW5hcmlhbnxlbnwwfHwwfHx8MA%3D%3D"              width={400}
              height={400}
              alt=""
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
