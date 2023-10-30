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
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
    title: "Pedicure",
    prices: "Corte de unhas: 12€",
  },
  {
    id: "serviço-2",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1661951641996-3685492b78ed?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R29sZGVuJTIwcmV0cmlldmVyfGVufDB8MXwwfHx8MA%3D%3D",
    title: "Tosquias",
    prices:
      "   Pequeno: de 19,50 € a 25,00 €, Medio: de 25,00 € a 30,00 €, Grande: de 27,50 € a 35,00 €, Gigante: de 45,00 € a 55,00 €",
  },
  {
    id: "serviço-3",
    imgUrl:
      "https://images.unsplash.com/photo-1625316708582-7c38734be31d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
    title: "Banhos",
    prices:
      "Pequeno: de 12,5 € a 25,00 €, Medio: de 20,50 € a 35,00 €, Grande: de 35,00 € a 45,50 €, Gigante: de 45,50 € a 60,00 €",
  },
  {
    id: "serviço-4",
    imgUrl:
      "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&w=500.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&w=500",
    title: "Tratamentos",
    prices: "Limpeza dos ouvidos: 14,00€, Tosquia higienica: 16,00€, Brushing: de 12,50€ a 25,00€",
  },
  {
    id: "serviço-5",
    imgUrl:
      "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNoYXRzfGVufDB8fDB8fHww",
    title: "Para gatos",
    prices: " Banhos: de 19,5€ a 25,00€, Tosquias: de 25,00€ a 30,00€",
  },
];

const Services: React.FC = () => {
  const [active, setActive] = useState("serviço-3");
  const [showPrices, setShowPrices] = useState(false);

  return (
    <section className={`${styles.paddings}`} id="Services">
      <motion.div
        variants={staggerContainer(0.2, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Nossos serviços" textStyles="text-center" />

        <div className="mt-16 flex lg:flex-row flex-col min-h-[120vh] max-h-[160vh] md:min-h-[70vh] gap-2">
          {services.map((world, index) => (
            <ServicesCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              showPrices={showPrices}
              handleClick={setActive}
              priceHandler={setShowPrices}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
