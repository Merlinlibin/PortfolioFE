import React from "react";
import { motion } from "framer-motion";

function AnimatedPage({ children }) {
  const animation = {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0,  },
    exit: { opacity: 0, x: -200 },
  };
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 2 }}>
      {children}
    </motion.div>
  );
}

export default AnimatedPage;  