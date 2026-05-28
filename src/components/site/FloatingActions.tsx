import { Phone } from "lucide-react";
import { motion } from "motion/react";

export function FloatingActions({ phone = "+917300070816" }: { phone?: string }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-20 z-40 flex justify-end px-4 sm:bottom-5 sm:px-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="pointer-events-auto flex"
      >
        <a
          href={`tel:${phone}`}
          className="group relative grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-ink shadow-luxury transition hover:scale-110 active:scale-95"
          aria-label="Call"
        >
          <span className="absolute inset-0 rounded-full bg-gold opacity-40 blur-md transition group-hover:opacity-70" />
          <Phone className="relative" size={20} />
        </a>
      </motion.div>
    </div>
  );
}
