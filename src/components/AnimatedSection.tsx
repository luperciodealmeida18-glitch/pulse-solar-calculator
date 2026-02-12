import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const getVariants = (direction: string): Variants => {
  const offsets = {
    up: { x: 0, y: 60 },
    down: { x: 0, y: -60 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  };
  const offset = offsets[direction as keyof typeof offsets] || offsets.up;

  return {
    hidden: { opacity: 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0 },
  };
};

export const AnimatedSection = ({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
    variants={getVariants(direction)}
    className={className}
  >
    {children}
  </motion.div>
);

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

export const counterVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 12 } },
};
