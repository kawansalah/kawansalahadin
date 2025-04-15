"use client";

import { Box, Code, Palette, Search } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import PropTypes from 'prop-types';
import { motion } from "framer-motion";

export function ServicesSection() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-[rgba(20,20,20,0.5)] p-8 md:p-12"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10 md:mb-12 text-center"
            >
              Our Services
            </motion.h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <GridItem
                area=""
                icon={<Palette className="h-6 w-6 text-white" />}
                title="Graphic Design"
                description="Creating visually stunning designs that capture your brand's essence and communicate your message effectively."
                index={0}
              />
              <GridItem
                area=""
                icon={<Box className="h-6 w-6 text-white" />}
                title="UI/UX Design"
                description="Designing intuitive and engaging user interfaces that provide seamless experiences across all devices."
                index={1}
              />
              <GridItem
                area=""
                icon={<Code className="h-6 w-6 text-white" />}
                title="Web Development"
                description="Building responsive, fast, and secure websites using modern technologies and best practices."
                index={2}
              />
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const GridItem = ({ area, icon, title, description, index }) => {
  return (
    <motion.li 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
      className={cn("min-h-[14rem] list-none", area)}
    >
      <motion.div 
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="relative h-full rounded-xl border-[0.75px] border-white/10 p-4"
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-lg border-[0.75px] border-white/10 bg-white/5 p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="w-fit rounded-lg border-[0.75px] border-white/10 bg-white/5 p-3"
            >
              {icon}
            </motion.div>
            <div className="space-y-2 sm:space-y-3">
              <h3 className="pt-0.5 text-lg sm:text-xl md:text-2xl leading-tight font-semibold font-sans tracking-[-0.04em] text-balance text-white">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.li>
  );
};

GridItem.propTypes = {
  area: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
}; 