"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Cpu, HeadphonesIcon as HeadphonesMic, Shield } from "lucide-react"

const brandValues = [
  {
    icon: Cpu,
    title: "Innovation & Technology",
    description:
      "We stay at the forefront of technological advancement, bringing you the latest and most innovative products in the market.",
  },
  {
    icon: HeadphonesMic,
    title: "Expert Support",
    description:
      "Our dedicated team provides comprehensive technical support and expert guidance to ensure the best experience with your devices.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "We partner with trusted brands and rigorously test all products to guarantee reliability and performance that exceeds expectations.",
  },
]

export default function Brand() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={sectionRef}
      className="w-full py-24 bg-zinc-50"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-heading1-bold mb-12 text-center text-zinc-900"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our Core Values
        </motion.h2>
        <motion.p
          className="text-body-medium text-zinc-600 text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We deliver more than just devices — we provide a complete technology ecosystem that combines innovation,
          support, and reliability.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {brandValues.map((value, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="mb-6 p-4 rounded-lg bg-gradient-to-br from-sky-500 to-sky-600 shadow-lg">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-heading3-bold mb-4 text-zinc-900">{value.title}</h3>
              <p className="text-base-regular text-zinc-600 max-w-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

