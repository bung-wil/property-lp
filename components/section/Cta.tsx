"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "motion/react";

const Cta = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="px-8 md:px-12 lg:px-16 my-12 rounded-4xl  md:h-[500px]"
    >
      <motion.div
        className="bg-cover bg-center h-full w-full rounded-4xl relative"
        style={{ backgroundImage: "url('/images/background-cta.png')" }}
        initial={{ scale: 0.98, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="md:flex py-[80px] md:py-0 items-center h-full px-[30px] lg:px-[80px]">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <motion.h3
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="font-semibold md:max-w-[390px] lg:max-w-[470px] text-[38px] md:text-[48px] lg:text-[56px]"
            >
              Find Your Best Real Estate
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[16px] md:text-[22px]  max-w-[470px] text-[#585981]"
            >
              We provide a complete service for the sale, purchase or rental of
              real estate.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button className="bg-[#1DAEFF] hover:bg-[#1DAEFF]/90 w-[200px]">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-0 right-10"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Image src="/images/cta.png" alt="cta" width={700} height={700} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Cta;
