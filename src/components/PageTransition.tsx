import { motion } from "framer-motion";

export default function PageTransition({ children }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }}
            style={{ minHeight: "100vh" }}
        >
            {children}
        </motion.div>
    );
}