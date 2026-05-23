import { motion } from "motion/react";
import { Calendar, Users, BedDouble, Search } from "lucide-react";

export function BookingWidget() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      onSubmit={(e) => e.preventDefault()}
      className="glass-strong mx-auto grid w-full max-w-5xl grid-cols-2 gap-4 rounded-2xl p-5 shadow-luxury md:grid-cols-5"
    >
      <Field icon={<Calendar size={14} />} label="Check-in" type="date" />
      <Field icon={<Calendar size={14} />} label="Check-out" type="date" />
      <Field icon={<Users size={14} />} label="Guests" defaultValue="2 Adults" />
      <Field icon={<BedDouble size={14} />} label="Room" defaultValue="Suite" />
      <button
        type="submit"
        className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-gold-glow transition hover:scale-[1.02]"
      >
        <Search size={14} /> Search
      </button>
    </motion.form>
  );
}

function Field({
  icon,
  label,
  type = "text",
  defaultValue,
}: {
  icon: React.ReactNode;
  label: string;
  type?: string;
  defaultValue?: string;
}) {
  return (
    <label className="group flex flex-col gap-1 rounded-xl border hairline bg-ink/40 px-4 py-2 transition focus-within:border-gold">
      <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-gold">
        {icon} {label}
      </span>
      <input
        type={type}
        defaultValue={defaultValue}
        className="bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
      />
    </label>
  );
}
