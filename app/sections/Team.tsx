"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { TypingText } from "../components/CustomTexts";

const Team: React.FC = () => {
  return (
    <section className={`${styles.paddings} text-white`} id="Team">
      <motion.div
        variants={staggerContainer( 0.2, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col mt-20`}
      >
        <TypingText title="| Nossa equipa" textStyles="text-center" />

        <div className="max-w-[1240px]  m-auto md:grid grid-cols-3 gap-8">
          <div className=" flex flex-col items-center justify-center col-span-2 font-pt mt-8">
            <div className=" text-2xl text-white ">
              Rita Silva
            </div>
            <div className="p-4 ">
            Rita tem um profundo apreço pelos nossos amigos de quatro patas, ela desempenha um papel essencial no nosso serviço de banho e tosa. Com anos de experiência e um toque mágico com os animais, Rita torna cada ida ao nosso estabelecimento uma experiência agradável e relaxante para os nossos clientes peludos. Ela é especialmente habilidosa em penteados caninos e garante que cada cachorro saia do nosso serviço com estilo e confiança. 
            </div>
          </div>
          <div className="md:h-full  px-20 md:p-10 m-auto bg-transparent flex justify-center items-center">
            <Image
              className="border-4 border-neutral-500 rounded-xl"
              src="https://plus.unsplash.com/premium_photo-1677165327781-1c0b7c458821?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNhdCUyMHZldHxlbnwwfHwwfHx8MA%3D%3D"
              width={400}
              height={200}
              alt=""
            />
          </div>
        </div>

        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="flex md:hidden flex-col items-center justify-center col-span-2 font-pt mt-8">
            <div className="pt-4  text-2xl text-white ">
             João Oliveira
            </div>
            <div className="p-4">
            João, o fundador do nosso negócio, é a raiz de toda a nossa paixão pelos cuidados caninos. A sua visão e amor inabalável pelos animais de estimação nos trouxeram até aqui. Desde o início, João estabeleceu um padrão excepcional de cuidado e carinho para todos os nossos amigos peludos. O seu compromisso em oferecer um ambiente seguro e acolhedor para os animais, bem como uma equipe qualificada, é o alicerce do nosso sucesso.
            </div>
          </div>
          <div className="md:h-full  px-20 md:p-10 m-auto bg-transparent flex justify-center items-center">
            <Image
              className="border-4 border-neutral-500 rounded-xl"
src="https://images.unsplash.com/photo-1644675272883-0c4d582528d8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZldGVyaW5hcmlhbnxlbnwwfHwwfHx8MA%3D%3D"              width={400}
              height={400}
              alt=""
            />
          </div>
          <div className="hidden md:flex flex-col items-center justify-center col-span-2 font-pt mt-4">
            <div className="pt-4  text-2xl text-white ">
             João Oliveira
            </div>
            <div className="p-4 ">
            João, o fundador do nosso negócio, é a raiz de toda a nossa paixão pelos cuidados caninos. A sua visão e amor inabalável pelos animais de estimação nos trouxeram até aqui. Desde o início, João estabeleceu um padrão excepcional de cuidado e carinho para todos os nossos amigos peludos. O seu compromisso em oferecer um ambiente seguro e acolhedor para os animais, bem como uma equipe qualificada, é o alicerce do nosso sucesso.
            </div>
          </div>
        </div>
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className=" flex flex-col items-center justify-center col-span-2 font-pt mt-8">
            <div className="pt-4 text-2xl text-white ">
              Maria Ferreira
            </div>
            <div className="p-4">
            Maria é uma funcionária dedicada em nosso serviço de banho e tosa para cães. Com um amor profundo por animais e anos de experiência, ela assegura que cada cachorro receba tratamento especial e carinho durante a sua visita. Maria é expert em estilização canina e está comprometida em manter os animais com aparência impecável e saudável.
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
