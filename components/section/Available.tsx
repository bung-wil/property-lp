"use client";
import Image from "next/image";
import { motion, Variants } from "motion/react";

// Types
interface Country {
  name: string;
  image: string;
}

const countries: Country[] = [
  { name: "AMERICA", image: "/images/available-1.png" },
  { name: "SPAIN", image: "/images/available-2.png" },
  { name: "LONDON", image: "/images/available-3.png" },
  { name: "FRANCE", image: "/images/available-4.png" },
];

const Available: React.FC = () => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
      },
    },
  };

  const cardHoverVariants: Variants = {
    rest: {
      scale: 1,
      rotateY: 0,
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 },
    },
  };

  const imageVariants: Variants = {
    rest: {
      scale: 1,
      filter: "brightness(1) contrast(1)",
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.1,
      filter: "brightness(1.1) contrast(1.1)",
      transition: { duration: 0.3 },
    },
  };

  const textVariants: Variants = {
    rest: {
      scale: 1,
      y: 0,
      color: "#000000",
      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.1,
      y: -5,
      color: "#ffffff",
      textShadow: "0 4px 8px rgba(0,0,0,0.6)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      className="my-22 px-4 md:px-16 bg-white text-center"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-2xl md:text-[38px] font-semibold text-gray-900 mb-10"
        variants={titleVariants}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
      >
        We are available in many <br className="" />
        well-known countries
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 lg:gap-6 justify-items-center lg:px-[40px]">
        {countries.map((country: Country, index: number) => (
          <motion.div
            key={index}
            className="rounded-[30px] overflow-hidden w-full md:h-[400px] lg:h-[500px] shadow-md relative cursor-pointer"
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            custom={index}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              variants={cardHoverVariants}
              className="w-full h-full relative"
            >
              <motion.div variants={imageVariants} className="w-full h-full">
                <Image
                  src={country.image}
                  alt={country.name}
                  width={278}
                  height={426}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              <motion.div
                className="absolute z-10 font-semibold text-center top-8 left-0 right-0 uppercase tracking-wide text-lg"
                variants={textVariants}
              >
                {country.name}
              </motion.div>

              {/* Overlay gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Available;
