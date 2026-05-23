import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Award, Sparkles, ShieldCheck, Star } from "lucide-react";
import { HOTELS } from "@/data/hotels";
import { HotelCard } from "@/components/site/HotelCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BrandLogo } from "@/components/site/BrandLogo";
import { SITE_NAME, SITE_URL, absoluteUrl, seoKeywords } from "@/lib/seo";

const heroImg = "/images/pratap-nagar/rooms/deluxe-room-1.jpeg";
const experienceImages = HOTELS.flatMap((hotel) => hotel.gallery).slice(0, 4);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luxury Hotel in Jaipur | Hotel Sanraj Inn" },
      {
        name: "description",
        content:
          "Luxury hotel stays in Jaipur with Hotel Sanraj Inn at Pratap Nagar and Hotel Sanraj Prime at Gurjar Ki Thadi. Ideal for family stays, business travel, and seamless booking.",
      },
      {
        name: "keywords",
        content: seoKeywords(["Jaipur hotel near airport", "best luxury hotel Jaipur"]),
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Luxury Hotel in Jaipur | Hotel Sanraj Inn" },
      {
        property: "og:description",
        content:
          "Book premium stays in Jaipur with comfortable rooms, local branch access, and quick booking links.",
      },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: absoluteUrl(heroImg) },
      { property: "og:image:alt", content: "Premium room interior at Hotel Sanraj Inn Jaipur" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Luxury Hotel in Jaipur | Hotel Sanraj Inn" },
      {
        name: "twitter:description",
        content: "Luxury hospitality, comfortable rooms, and easy hotel booking in Jaipur.",
      },
      { name: "twitter:image", content: absoluteUrl(heroImg) },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <img
          src={heroImg}
          alt="Luxury room interior at Hotel Sanraj Inn Jaipur"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.82_0.14_85/0.18),transparent_60%)]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-24 pt-40">
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 self-start"
          >
            <div className="logo-hero-wrap">
              <div className="logo-hero-glow" />
              <BrandLogo className="logo-hero animate-float-slow" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-ink/40 px-4 py-1.5 backdrop-blur-md">
              <Sparkles size={12} className="text-gold" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-gold">
                Est. 1998 · Two Luxury Properties
              </span>
            </div>
            <h1 className="font-display text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl lg:text-[88px]">
              Experience <span className="text-gradient-gold italic">Luxury</span>
              <br />& Quiet Comfort
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
              Discover a luxury hotel in Jaipur crafted for premium comfort, smooth hotel booking,
              and family-friendly stays near key city routes including airport access.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#hotels"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-ink shadow-gold-glow transition hover:scale-105"
              >
                Explore Hotels
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/hotels/pratap-nagar-branch#book"
                className="rounded-full border border-gold/40 bg-ink/40 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-foreground backdrop-blur-md transition hover:border-gold hover:text-gold"
              >
                Book Now
              </a>
              <a
                href="tel:+919876543210"
                className="rounded-full border hairline px-5 py-3.5 text-xs uppercase tracking-[0.25em] text-foreground/80 backdrop-blur-md transition hover:text-gold"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>

        {/* floating gold orbs */}
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-[120px] animate-float-slow" />
      </section>

      {/* TRUST BAR */}
      <section className="border-y hairline bg-ink/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
          {[
            { icon: Award, label: "Forbes 5-Star Recognition" },
            { icon: Star, label: "4.9 Average Guest Rating" },
            { icon: ShieldCheck, label: "Discreet 24/7 Security" },
            { icon: Sparkles, label: "Personal Butler Service" },
          ].map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 text-sm text-muted-foreground"
            >
              <Icon size={18} className="text-gold" />
              {label}
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOTELS */}
      <section id="hotels" className="mx-auto max-w-7xl px-6 py-28">
        <SectionHeading
          eyebrow="The Collection"
          title="Two distinct sanctuaries. One standard of luxury."
          subtitle="Each Sanraj Inn branch is shaped by modern comfort, thoughtful interiors, and reliable hospitality — all built for an effortless Jaipur stay."
          center
        />
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {HOTELS.map((h, i) => (
            <HotelCard key={h.slug} hotel={h} index={i} />
          ))}
        </div>
      </section>

      {/* EXPERIENCE STRIP */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Moments" title="Crafted experiences, quietly delivered." center />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {experienceImages.length > 0 ? (
            experienceImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className={`group relative overflow-hidden rounded-2xl ${i % 2 === 0 ? "row-span-2 h-[460px]" : "h-[220px]"}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent opacity-0 transition group-hover:opacity-100" />
              </motion.div>
            ))
          ) : (
            <div className="col-span-2 grid h-[300px] place-items-center rounded-2xl border hairline bg-card text-muted-foreground md:col-span-4">
              Images coming soon
            </div>
          )}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-gold hover:underline"
          >
            View full gallery <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[2rem] border hairline bg-card p-12 shadow-luxury md:p-20">
          <div
            className="absolute inset-0 opacity-60"
            style={{ background: "var(--gradient-radial-gold)" }}
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl md:text-5xl">
              Begin your <span className="text-gradient-gold italic">private stay</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our concierge team is available around the clock to design your perfect itinerary.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/hotels/pratap-nagar-branch"
                className="rounded-full bg-gradient-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-ink shadow-gold-glow"
              >
                Explore Pratap Nagar
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gold/40 px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-foreground hover:text-gold"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
