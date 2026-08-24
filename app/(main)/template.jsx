"use client";
import { motion } from "framer-motion";

export default function Template({ children }) {
    const variants = {
        initial: { opacity: 0, x: -40 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 40 },
    };

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
            }}
            style={{ height: "100%", width: "100%" }}
        >
            {children}
        </motion.div>
    );
}
