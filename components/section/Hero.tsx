"use client";
import React, { useState } from "react";
import { motion, Variants } from "motion/react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";

// Types
type SelectType = "rent" | "buy" | "sell";

const Hero: React.FC = () => {
  const [select, setSelect] = useState<SelectType>("rent");

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  const descriptionVariants: Variants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        delay: 0.4,
      },
    },
  };

  const tabVariants: Variants = {
    inactive: {
      backgroundColor: "rgba(255, 255, 255, 0)",
      scale: 0.98,
      transition: { duration: 0.2 },
    },
    active: {
      backgroundColor: "rgba(255, 255, 255, 1)",
      scale: 1,
      transition: { duration: 0.2 },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  const searchFormVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        delay: 0.6,
      },
    },
  };

  const inputContainerVariants: Variants = {
    rest: {
      scale: 1,
      transition: { duration: 0.2 },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants: Variants = {
    rest: {
      scale: 1,
      boxShadow: "0 4px 12px rgba(29, 174, 255, 0.3)",
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 6px 20px rgba(29, 174, 255, 0.4)",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  const tabs: SelectType[] = ["rent", "buy", "sell"];

  return (
    <motion.div
      className="px-8 md:px-12 lg:px-16 rounded-4xl md:h-[700px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className="bg-cover bg-center h-full w-full rounded-4xl"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div className="md:flex py-[80px] md:py-0 items-center h-full px-[30px] lg:px-[80px]">
          <motion.div
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.h1
              className="font-semibold max-w-[470px] text-[38px] md:text-[48px] lg:text-[56px]"
              variants={titleVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              Easy Way to Find Property
            </motion.h1>

            <motion.p
              className="text-[16px] md:text-[22px] max-w-[470px] text-[#585981]"
              variants={descriptionVariants}
            >
              We provide a complete service for the sale, purchase or rental of
              real estate.
            </motion.p>

            <motion.div className="mt-[20px]" variants={searchFormVariants}>
              <div className="flex">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab}
                    className={`${
                      select === tab ? "bg-white" : "bg-none"
                    } px-4 md:px-8 font-medium py-4 rounded-t-2xl`}
                    variants={tabVariants}
                    initial="inactive"
                    animate={select === tab ? "active" : "inactive"}
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelect(tab)}
                  >
                    {tab.toUpperCase()}
                  </motion.button>
                ))}
              </div>

              <motion.div
                className="bg-white/90 w-full p-4 rounded-b-2xl rounded-r-2xl flex flex-col space-y-10 md:space-y-6 lg:space-y-0 lg:gap-1 lg:flex-row lg:items-center"
                whileHover={{
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="flex flex-col gap-1"
                  variants={inputContainerVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <Label className="text-[18px]">Location</Label>
                  <Input
                    placeholder="Select Your City"
                    className="text-[18px] border-none focus:border-none focus:ring-0 focus-visible:ring-0 shadow-none w-full lg:w-[220px]"
                  />
                </motion.div>

                <div className="hidden lg:block w-px bg-gray-300 mx-4"></div>

                <motion.div
                  className="flex flex-col gap-1"
                  variants={inputContainerVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <Label className="text-[18px]">Property Type</Label>
                  <Input
                    placeholder="Choose Property Type"
                    className="text-[18px] border-none focus:border-none focus:ring-0 focus-visible:ring-0 shadow-none w-full lg:w-[220px]"
                  />
                </motion.div>

                <div className="hidden lg:block w-px bg-gray-300 mx-4"></div>

                <motion.div
                  className="flex flex-col gap-1"
                  variants={inputContainerVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <Label className="text-[18px]">Price Range</Label>
                  <Input
                    placeholder="Choose Price Range"
                    className="text-[18px] border-none focus:border-none focus:ring-0 focus-visible:ring-0 shadow-none w-full lg:w-[220px]"
                  />
                </motion.div>

                <motion.div
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button className="flex w-full lg:w-[50px] lg:h-[50px] items-center justify-center bg-[#1DAEFF] hover:bg-[#1DAEFF]/90">
                    <motion.div
                      animate={{ rotate: [0, 5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Search className="" size={16} color="white" />
                    </motion.div>
                    <p className="text-white block lg:hidden">Search</p>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
