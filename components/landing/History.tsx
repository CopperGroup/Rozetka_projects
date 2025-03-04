"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Store } from "@/constants/store"

const milestones = [
  { year: 2015, event: `${Store.name} Founded` },
  { year: 2017, event: "Launched Online Store" },
  { year: 2019, event: "First Physical Store Opening" },
  { year: 2021, event: "Smart Home Innovation Center" },
  { year: 2023, event: "International Market Expansion" },
]

export default function History() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={sectionRef}
      className="w-full py-24 bg-zinc-900 text-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-heading1-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our Journey
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-sky-500 to-sky-600 text-white flex items-center justify-center shadow-lg">
                  <span className="text-heading4-medium">{milestone.year}</span>
                </div>
                <div className="pt-4">
                  <p className="text-base-semibold text-sky-100">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="relative aspect-[1/1]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src="/assets/history-image.jpg"
                alt={`${Store.name} through the years`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-small-semibold text-white/90 text-center">Pioneering technology since 2015</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

