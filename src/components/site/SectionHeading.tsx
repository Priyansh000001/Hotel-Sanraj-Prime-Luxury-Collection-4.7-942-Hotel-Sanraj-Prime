import { motion } from "motion/react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-gold" />
          <span className="text-xs uppercase tracking-[0.4em] text-gold">{eyebrow}</span>
          <span className="h-px w-8 bg-gold" />
        </div>
      )}
      <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
