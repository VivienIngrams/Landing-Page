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
"https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRvZ3N8ZW58MHx8MHx8fDA%3D",    title: "Pedicure",
  },
  {
    id: "serviço-2",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1661951641996-3685492b78ed?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R29sZGVuJTIwcmV0cmlldmVyfGVufDB8MXwwfHx8MA%3D%3D",
    title: "Tosquias",
  },
  {
    id: "serviço-3",
    imgUrl:
"https://images.unsplash.com/photo-1625316708582-7c38734be31d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3N8ZW58MHx8MHx8fDA%3D",    title: "Banhos",
  },
  {
    id: "serviço-4",
    imgUrl:
      "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&w=500.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&w=500",
    title: "Brushing",
  },
  {
    id: "serviço-5",
    imgUrl: 
"https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNoYXRzfGVufDB8fDB8fHww",        title: "Para gatos",
  },
  
];

const Services: React.FC = () => {
  const [active, setActive] = useState("serviço-2");
  const [prices, setPrices] = useState(false); 

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

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[120vh] max-h-[180vh] md:min-h-[70vh]  gap-2">
          {services.map((world, index) => (
            <ServicesCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              prices={prices}
              handleClick={setActive}
              priceHandler={setPrices}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
