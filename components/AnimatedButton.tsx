"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

interface AnimatedButtonProps {
  href: string;
  className: string;
  children: React.ReactNode;
}

export default function AnimatedButton({
  href,
  className,
  children,
}: AnimatedButtonProps) {
  return (
    <motion.div
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      <Link className={className} href={href}>
        {children}
      </Link>
    </motion.div>
  );
}
