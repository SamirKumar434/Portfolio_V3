import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * RevealOnScroll component that reveals its children with smooth entrance animations
 * as the user scrolls down into view.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Section or elements to reveal
 * @param {'up' | 'down' | 'left' | 'right' | 'none'} [props.direction='up'] - Direction of entry movement
 * @param {number} [props.distance=40] - Initial distance offset in pixels
 * @param {number} [props.duration=0.6] - Animation duration in seconds
 * @param {number} [props.delay=0] - Delay before starting animation in seconds
 * @param {number | 'some' | 'all'} [props.threshold=0.15] - Viewport threshold ratio to trigger animation
 * @param {boolean} [props.once=true] - Whether animation runs only once or resets on scroll out
 * @param {boolean} [props.blur=false] - Apply initial blur effect that resolves on scroll
 * @param {number} [props.scale=1] - Initial scale factor (e.g., 0.95 for subtle zoom-in)
 * @param {string} [props.className=''] - Extra CSS classes for the container
 * @param {Object} [props.style={}] - Custom inline styles
 */
export const RevealOnScroll = ({
  children,
  direction = "up",
  distance = 40,
  duration = 0.6,
  delay = 0,
  threshold = 0.15,
  once = true,
  blur = false,
  scale = 1,
  className = "",
  style = {},
  ...rest
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: once,
  });

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialPos = getInitialPosition();

  const initialVariants = {
    opacity: 0,
    x: initialPos.x,
    y: initialPos.y,
    scale: scale,
    filter: blur ? "blur(8px)" : "blur(0px)",
  };

  const animateVariants = {
    opacity: isInView ? 1 : 0,
    x: isInView ? 0 : initialPos.x,
    y: isInView ? 0 : initialPos.y,
    scale: isInView ? 1 : scale,
    filter: isInView ? "blur(0px)" : blur ? "blur(8px)" : "blur(0px)",
  };

  return (
    <motion.div
      ref={ref}
      initial={initialVariants}
      animate={animateVariants}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1], // Smooth cubic-bezier cubic transition
      }}
      className={`w-full ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
