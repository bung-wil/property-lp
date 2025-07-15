"use client";
import Image from "next/image";
import { motion, Variants } from "motion/react";

// Types
interface Card {
  image: string;
}

const cards: Card[] = [
  { image: "/images/card-1.png" },
  { image: "/images/card-2.png" },
  { image: "/images/card-3.png" },
  { image: "/images/card-4.png" },
  { image: "/images/card-5.png" },
  { image: "/images/card-6.png" },
];

const Recently: React.FC = () => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const cardHoverVariants: Variants = {
    rest: {
      scale: 1,
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      borderColor: "rgba(229, 231, 235, 1)",
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
      borderColor: "rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  const imageVariants: Variants = {
    rest: {
      scale: 1,
      filter: "brightness(1)",
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.1,
      filter: "brightness(1.1)",
      transition: { duration: 0.3 },
    },
  };

  const contentVariants: Variants = {
    rest: {
      x: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      x: 8,
      transition: { duration: 0.3 },
    },
  };

  const priceVariants: Variants = {
    rest: {
      scale: 1,
      backgroundColor: "rgba(243, 244, 246, 1)",
      color: "rgba(31, 41, 55, 1)",
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(59, 130, 246, 1)",
      color: "rgba(255, 255, 255, 1)",
      transition: { duration: 0.3 },
    },
  };

  const seeAllVariants: Variants = {
    rest: {
      scale: 1,
      x: 0,
      transition: { duration: 0.2 },
    },
    hover: {
      scale: 1.05,
      x: 4,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.section
      className="py-12 px-4 md:px-16 lg:px-24 bg-white"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex items-center justify-between mb-6"
        variants={headerVariants}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-900"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          Recently Added
        </motion.h2>
        <motion.a
          href="#"
          className="text-sm text-blue-600 font-medium hover:underline"
          variants={seeAllVariants}
          initial="rest"
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
        >
          See all
        </motion.a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card: Card, index: number) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 border rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer"
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            custom={index}
          >
            <motion.div
              variants={cardHoverVariants}
              className=""
              style={{ zIndex: -1 }}
            />

            <motion.div
              className="w-24 h-24 relative rounded-lg overflow-hidden shrink-0"
              variants={imageVariants}
            >
              <Image
                src={card.image}
                alt={`Card ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div className="flex-1" variants={contentVariants}>
              <motion.h3
                className="font-semibold text-lg text-gray-800 mb-1"
                whileHover={{
                  color: "#3b82f6",
                  transition: { duration: 0.2 },
                }}
              >
                103/143 West Street, Crows Nest
              </motion.h3>

              <motion.div
                className="text-sm text-gray-500 mb-1 flex flex-wrap gap-x-3"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.span
                  whileHover={{ scale: 1.05, color: "#6b7280" }}
                  transition={{ duration: 0.2 }}
                >
                  10 Bedroom
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.05, color: "#6b7280" }}
                  transition={{ duration: 0.2 }}
                >
                  150 M
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.05, color: "#6b7280" }}
                  transition={{ duration: 0.2 }}
                >
                  2 Garage
                </motion.span>
              </motion.div>

              <motion.p
                className="text-xs text-gray-400 mb-2"
                whileHover={{
                  color: "#6b7280",
                  transition: { duration: 0.2 },
                }}
              >
                Posted by X Builder
              </motion.p>

              <motion.div
                className="text-sm bg-gray-100 px-3 py-1 inline-block rounded-md font-semibold text-gray-800"
                variants={priceVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                $45,545
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Recently;
