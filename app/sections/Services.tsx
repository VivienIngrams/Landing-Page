"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { TypingText } from "../components/CustomTexts";
import ServicesCard from "../components/ServicesCard";

export const services = [
  {
    id: "serviço-1",
    imgUrl:
      "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1888",
    title: "Pedicure",
  },
  {
    id: "serviço-2",
    imgUrl:
      "https://images.unsplash.com/photo-1529472119196-cb724127a98e?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1944",
    title: "Tosquias",
  },
  {
    id: "serviço-3",
    imgUrl:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&w=500",
    title: "Banhos",
  },
  {
    id: "serviço-4",
    imgUrl:
      "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&w=500.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&w=500",
    title: "Brushing",
  },
  {
    id: "serviço-5",
    imgUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2043",
        title: "Para gatos",
  },
  
];

const Services: React.FC = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className={`${styles.paddings}`} id="services">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Nossos serviços" textStyles="text-center" />

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {services.map((world, index) => (
            <ServicesCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
