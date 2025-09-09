// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

export function AutoAnimate({ key, classname, children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        className={classname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
