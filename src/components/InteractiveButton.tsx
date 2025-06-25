import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InteractiveButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function GlowButton({
  children,
  className = "",
  ...props
}: InteractiveButtonProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 30px rgba(255, 215, 0, 0.3)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Button
        className={cn(
          "relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300",
          className,
        )}
        {...props}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
          initial={false}
          transition={{ duration: 0.3 }}
        />
        <span className="relative z-10">{children}</span>
      </Button>
    </motion.div>
  );
}

export function RippleButton({
  children,
  className = "",
  ...props
}: InteractiveButtonProps) {
  return (
    <motion.div className="relative">
      <Button className={cn("relative overflow-hidden", className)} {...props}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
        <span className="relative z-10">{children}</span>
      </Button>
    </motion.div>
  );
}

export function FloatingActionButton({
  children,
  className = "",
  ...props
}: InteractiveButtonProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.1,
        rotate: 5,
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        className={cn(
          "rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
          className,
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}

export function MagneticButton({
  children,
  className = "",
  ...props
}: InteractiveButtonProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotate: 2,
      }}
      whileTap={{
        scale: 0.95,
        rotate: -2,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      <Button
        className={cn("transition-all duration-300 hover:shadow-lg", className)}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}

export function ExpandingButton({
  children,
  className = "",
  ...props
}: InteractiveButtonProps) {
  return (
    <motion.div
      initial={{ width: "auto" }}
      whileHover={{ width: "110%" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Button
        className={cn(
          "w-full overflow-hidden bg-gradient-to-r from-primary via-accent to-primary bg-size-200 hover:bg-pos-100 transition-all duration-500",
          className,
        )}
        {...props}
      >
        <motion.span
          whileHover={{ x: [0, 5, 0] }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.span>
      </Button>
    </motion.div>
  );
}
