import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Star, Phone, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import type { Hotel } from "@/data/hotels";

export function HotelCard({ hotel, index }: { hotel: Hotel; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl border hairline bg-card shadow-luxury"
    >
      {/* Image */}
      <div className="relative h-[420px] overflow-hidden md:h-[460px]">
        <img
          src={hotel.cover}
          alt={hotel.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

        {/* Badge */}
        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-gold/40 bg-ink/60 px-3 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-gold-glow" />
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-gold">
            Luxury Collection
          </span>
        </div>

        {/* Rating */}
        <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full bg-ink/70 px-3 py-1.5 text-xs text-foreground backdrop-blur-md">
          <Star size={12} className="fill-gold text-gold" />
          {hotel.rating} <span className="text-muted-foreground">· {hotel.reviews}</span>
        </div>

        {/* Title overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
            {hotel.name}
          </h3>
          <div className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
            <MapPin size={12} /> {hotel.location}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-5 p-6 md:p-8">
        <p className="text-sm leading-relaxed text-muted-foreground">{hotel.tagline}</p>

        <div className="flex flex-wrap gap-2">
          {hotel.amenities.slice(0, 5).map((a) => (
            <span
              key={a}
              className="rounded-full border hairline bg-onyx px-3 py-1 text-[11px] tracking-wide text-muted-foreground"
            >
              {a}
            </span>
          ))}
        </div>

        <div className="flex items-end justify-between border-t hairline pt-5">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Starting from
            </div>
            {hotel.startingOriginalPrice ? (
              <div className="mt-1 text-sm text-muted-foreground line-through">
                ₹{hotel.startingOriginalPrice.toLocaleString("en-IN")}
              </div>
            ) : null}
            <div className="mt-0.5 font-display text-3xl text-gradient-gold">
              ₹{hotel.startingPrice.toLocaleString("en-IN")}
              <span className="ml-1 text-xs text-muted-foreground">/ night</span>
            </div>
            <div className="mt-2 inline-flex rounded-full border border-gold/35 bg-onyx px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-gold">
              {hotel.priceBadge ?? "Special Stay Price"}
            </div>
          </div>

          <Link
            to="/hotels/$slug"
            params={{ slug: hotel.slug }}
            className="group/btn inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-gold-glow transition hover:scale-105"
          >
            Explore
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <a
            href={`tel:${hotel.phone}`}
            aria-label={`Call ${hotel.name}`}
            className="flex items-center justify-center gap-1.5 rounded-xl border hairline py-2.5 text-xs text-foreground/80 transition hover:border-gold hover:text-gold"
          >
            <Phone size={12} /> Call
          </a>
          <a
            href={`https://wa.me/${hotel.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp ${hotel.name}`}
            className="flex items-center justify-center gap-1.5 rounded-xl border hairline py-2.5 text-xs text-foreground/80 transition hover:border-gold hover:text-gold"
          >
            <MessageCircle size={12} /> WhatsApp
          </a>
          <a
            href={hotel.mapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Get directions to ${hotel.name}`}
            className="flex items-center justify-center gap-1.5 rounded-xl border hairline py-2.5 text-xs text-foreground/80 transition hover:border-gold hover:text-gold"
          >
            <MapPin size={12} /> Directions
          </a>
        </div>
      </div>

      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: "0 0 0 1px var(--gold), 0 30px 90px -20px oklch(0.82 0.14 85 / 0.25)" }}
      />
    </motion.article>
  );
}
