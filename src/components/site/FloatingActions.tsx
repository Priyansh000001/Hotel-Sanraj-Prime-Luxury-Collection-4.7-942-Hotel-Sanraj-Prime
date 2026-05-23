import { Phone, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function FloatingActions({
  phone = "+919876543210",
  whatsapp = "919876543210",
}: {
  phone?: string;
  whatsapp?: string;
}) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-end px-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="pointer-events-auto flex flex-col gap-3"
      >
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.7_0.18_150)] text-ink shadow-luxury transition hover:scale-110"
          aria-label="WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-[oklch(0.7_0.18_150)] opacity-50 blur-md transition group-hover:opacity-80" />
          <MessageCircle className="relative" size={22} />
        </a>
        <a
          href={`tel:${phone}`}
          className="group relative grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-ink shadow-luxury transition hover:scale-110"
          aria-label="Call"
        >
          <span className="absolute inset-0 rounded-full bg-gold opacity-40 blur-md transition group-hover:opacity-70" />
          <Phone className="relative" size={20} />
        </a>
      </motion.div>
    </div>
  );
}
