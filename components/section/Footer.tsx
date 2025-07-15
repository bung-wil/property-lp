"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white border-t pt-10 pb-6 px-4 sm:px-6 md:px-12 lg:px-24 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Image
            src="/images/logo-lp.png"
            alt="Logo"
            width={150}
            height={50}
            className="mb-4"
          />
          <p className="text-sm text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-4 text-blue-600 text-xl">
            <i className="ri-facebook-fill hover:scale-110 transition" />
            <i className="ri-instagram-line hover:scale-110 transition" />
            <i className="ri-twitter-fill hover:scale-110 transition" />
            <i className="ri-linkedin-fill hover:scale-110 transition" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2">
          {/* Take a Tour */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-gray-800 mb-3">Take a tour</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-blue-600 transition">Features</li>
              <li className="hover:text-blue-600 transition">Partners</li>
              <li className="hover:text-blue-600 transition">Pricing</li>
              <li className="hover:text-blue-600 transition">Product</li>
              <li className="hover:text-blue-600 transition">Support</li>
            </ul>
          </motion.div>

          {/* Our Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-gray-800 mb-3">Our Company</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-blue-600 transition">About Us</li>
              <li className="hover:text-blue-600 transition">Agents</li>
              <li className="hover:text-blue-600 transition">Blog</li>
              <li className="hover:text-blue-600 transition">Media</li>
              <li className="hover:text-blue-600 transition">Contact Us</li>
            </ul>
          </motion.div>
        </div>

        {/* Subscribe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="font-semibold text-gray-800 mb-3">Subscribe</h4>
          <p className="text-sm text-gray-600 mb-4">
            Subscribe to get latest property, blog news from us
          </p>
          <div className="relative">
            <Input
              type="email"
              placeholder="Email Address"
              className="w-full pr-10"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800"
            >
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-10 text-center text-xs text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        &copy; 2025. All rights reserved.
        <br />
        Develop with ❤️ by Bung Wil Dev
      </motion.div>
    </motion.footer>
  );
}
