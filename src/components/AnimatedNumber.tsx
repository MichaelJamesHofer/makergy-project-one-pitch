import { motion, animate, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

interface AnimatedNumberProps {
  value: number;
  format?: (n: number) => string;
}

export const AnimatedNumber = ({ value, format }: AnimatedNumberProps) => {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => {
    const formatted = format ? format(latest) : Math.round(latest).toLocaleString();
    return formatted;
  });

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.3,
      ease: "easeOut"
    });

    return controls.stop;
  }, [value, motionValue]);

  return <motion.span>{rounded}</motion.span>;
};

export default AnimatedNumber;