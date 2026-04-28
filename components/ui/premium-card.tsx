"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface PremiumCardProps extends HTMLMotionProps<"div"> {
  glass?: boolean;
  hover?: boolean;
}

const PremiumCard = forwardRef<HTMLDivElement, PremiumCardProps>(
  ({ className, glass, hover = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "rounded-2xl border border-slate-200 bg-white p-6 premium-shadow",
          glass && "glass",
          hover && "premium-shadow-hover",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

PremiumCard.displayName = "PremiumCard";

export { PremiumCard };
