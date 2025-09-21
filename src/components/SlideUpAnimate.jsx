// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export function SlideUpAnimate({ key, classname, children }) {
  return (
    <motion.div
      key={key}
      className={classname}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
