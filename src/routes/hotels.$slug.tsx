import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Star,
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
  Wifi,
  Snowflake,
  Tv,
  Car,
  UtensilsCrossed,
  BellRing,
  ShieldCheck,
  Users,
  Waves,
  Sparkles,
  BedDouble,
} from "lucide-react";
import { getHotel, HOTELS, type Hotel } from "@/data/hotels";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SITE_NAME, SITE_URL, absoluteUrl, seoKeywords } from "@/lib/seo";

const AMENITY_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Wifi,
  AC: Snowflake,
  TV: Tv,
  Parking: Car,
  Restaurant: UtensilsCrossed,
  Service: BellRing,
  Security: ShieldCheck,
  Family: Users,
  Pool: Waves,
  Spa: Sparkles,
};

function iconFor(label: string) {
  const key = Object.keys(AMENITY_ICONS).find((k) => label.toLowerCase().includes(k.toLowerCase()));
  return key ? AMENITY_ICONS[key] : Sparkles;
}

export const Route = createFileRoute("/hotels/$slug")({
  loader: ({ params }) => {
    const hotel = getHotel(params.slug);
    if (!hotel) throw notFound();
    return { hotel };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.hotel.name} | ${loaderData.hotel.location} | Luxury Hotel in Jaipur` },
          {
            name: "description",
            content: `${loaderData.hotel.tagline}. Book comfortable premium rooms in Jaipur at ${loaderData.hotel.name}, ${loaderData.hotel.location} with direct call, map, and booking links.`,
          },
          {
            name: "keywords",
            content: seoKeywords([
              `${loaderData.hotel.name} ${loaderData.hotel.location}`,
              loaderData.hotel.location,
              "Jaipur luxury stay",
              "family stay Jaipur",
            ]),
          },
          { name: "robots", content: "index, follow, max-image-preview:large" },
          { property: "og:title", content: `${loaderData.hotel.name} | ${loaderData.hotel.location}` },
          { property: "og:description", content: loaderData.hotel.tagline },
          { property: "og:url", content: `${SITE_URL}/hotels/${loaderData.hotel.slug}` },
          { property: "og:type", content: "website" },
          { property: "og:image", content: absoluteUrl(loaderData.hotel.cover) },
          {
            property: "og:image:alt",
            content: `${loaderData.hotel.name} ${loaderData.hotel.location} hotel preview`,
          },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: `${loaderData.hotel.name} | ${loaderData.hotel.location}` },
          { name: "twitter:description", content: loaderData.hotel.tagline },
          { name: "twitter:image", content: absoluteUrl(loaderData.hotel.cover) },
        ]
      : [],
    links: loaderData
      ? [{ rel: "canonical", href: `${SITE_URL}/hotels/${loaderData.hotel.slug}` }]
      : [],
  }),
  notFoundComponent: () => (
    <div className="grid min-h-[60vh] place-items-center text-center">
      <div>
        <h1 className="font-display text-4xl">Hotel not found</h1>
        <Link to="/" className="mt-4 inline-block text-gold underline">
          Back home
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="grid min-h-[60vh] place-items-center p-6 text-center">
      <div>
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
        <button
          onClick={reset}
          className="mt-4 rounded-full bg-gradient-gold px-5 py-2 text-xs uppercase tracking-widest text-ink"
        >
          Retry
        </button>
      </div>
    </div>
  ),
  component: HotelPage,
});

function HotelPage() {
  const { hotel } = Route.useLoaderData() as { hotel: Hotel };
  const other = HOTELS.find((h) => h.slug !== hotel.slug);
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": ["Hotel", "LodgingBusiness", "LocalBusiness"],
    name: `${hotel.name} - ${hotel.location}`,
    image: absoluteUrl(hotel.cover),
    description: hotel.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: hotel.address,
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    telephone: hotel.call,
    hasMap: hotel.googleMaps,
    url: `${SITE_URL}/hotels/${hotel.slug}`,
    priceRange: `INR ${hotel.startingPrice}+`,
    starRating: {
      "@type": "Rating",
      ratingValue: hotel.rating,
      bestRating: 5,
    },
    amenityFeature: hotel.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
      value: true,
    })),
    makesOffer: hotel.bookingLinks.map((link) => ({
      "@type": "Offer",
      name: `${hotel.name} ${hotel.location} booking via ${link.name}`,
      url: link.url,
      priceCurrency: "INR",
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Hotels", item: `${SITE_URL}/#hotels` },
      {
        "@type": "ListItem",
        position: 3,
        name: `${hotel.name} - ${hotel.location}`,
        item: `${SITE_URL}/hotels/${hotel.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([hotelSchema, breadcrumbSchema]) }}
      />
      {/* HERO */}
      <section className="relative min-h-[90svh] overflow-hidden">
        <img
          src={hotel.cover}
          alt={`${hotel.name} hotel cover image`}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 mx-auto flex min-h-[90svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em]">
              <span className="flex items-center gap-1.5 rounded-full bg-ink/60 px-3 py-1 text-foreground backdrop-blur-md">
                <Star size={12} className="fill-gold text-gold" /> {hotel.rating} · {hotel.reviews}{" "}
                reviews
              </span>
            </div>
            <h1 className="font-display text-5xl leading-[1.05] text-foreground md:text-7xl lg:text-[80px] max-w-4xl">
              {hotel.name}
            </h1>
            <p className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
              <MapPin size={12} /> {hotel.location}
            </p>
            <p className="mt-5 max-w-2xl text-base text-foreground/80 md:text-lg">
              {hotel.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#rooms"
                className="rounded-full bg-gradient-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-ink shadow-gold-glow hover:scale-105 transition"
              >
                View Rooms
              </a>
              <a
                href={`tel:${hotel.phone}`}
                className="rounded-full border border-gold/40 px-6 py-3.5 text-xs uppercase tracking-[0.25em] text-foreground backdrop-blur-md hover:text-gold transition"
              >
                Call Now
              </a>
              <a
                href={`https://wa.me/${hotel.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border hairline px-6 py-3.5 text-xs uppercase tracking-[0.25em] text-foreground/80 backdrop-blur-md hover:text-gold transition"
              >
                WhatsApp
              </a>
              <a
                href={hotel.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border hairline px-6 py-3.5 text-xs uppercase tracking-[0.25em] text-foreground/80 backdrop-blur-md hover:text-gold transition"
              >
                Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionHeading
            eyebrow="The Property"
            title="A residence, not a hotel."
            subtitle={hotel.description}
          />
        </div>
        <div className="glass rounded-2xl p-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Starting From</div>
          {hotel.startingOriginalPrice ? (
            <div className="mt-2 text-sm text-muted-foreground line-through">
              ₹{hotel.startingOriginalPrice.toLocaleString("en-IN")}
            </div>
          ) : null}
          <div className="font-display text-4xl text-gradient-gold">
            ₹{hotel.startingPrice.toLocaleString("en-IN")}
          </div>
          <div className="text-xs text-muted-foreground">per night · taxes incl.</div>
          <div className="mt-3 inline-flex rounded-full border border-gold/35 bg-onyx px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-gold">
            {hotel.priceBadge ?? "Special Stay Price"}
          </div>
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-gold" /> {hotel.address}
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-gold" /> {hotel.phone}
            </div>
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          eyebrow="Stays"
          title="Rooms & Suites"
          subtitle="Every room is a private sanctuary, dressed in natural materials and discreet technology."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {hotel.rooms.map((room, i) => (
            <motion.article
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group overflow-hidden rounded-3xl border hairline bg-card shadow-card"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.imageAlt ?? `${hotel.name} room interior`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <div className="absolute right-4 top-4 rounded-full bg-ink/60 px-3 py-1 text-[11px] text-gold backdrop-blur-md">
                  {room.size}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-foreground">{room.name}</h3>
                <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                  <BedDouble size={12} /> {room.capacity}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {room.amenities.map((a) => (
                    <span
                      key={a}
                      className="rounded-full border hairline px-2.5 py-1 text-[10px] text-muted-foreground"
                    >
                      {a}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-end justify-between border-t hairline pt-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      Starting From
                    </div>
                    {room.originalPrice ? (
                      <div className="mt-1 text-xs text-muted-foreground line-through">
                        ₹{room.originalPrice.toLocaleString("en-IN")}
                      </div>
                    ) : null}
                    <div className="font-display text-2xl text-gradient-gold">
                      ₹{room.price.toLocaleString("en-IN")}
                    </div>
                    <div className="mt-1 inline-flex rounded-full border border-gold/35 bg-onyx px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] text-gold">
                      {hotel.priceBadge ?? "Special Stay Price"}
                    </div>
                  </div>
                  <a
                    href="#book"
                    className="inline-flex items-center gap-1 rounded-full bg-gradient-gold px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink"
                  >
                    Book <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Spaces" title="Inside the property" center />
        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4">
          {hotel.gallery.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? "row-span-2 col-span-2" : i === 3 ? "row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt || `${hotel.name} room interior`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/30" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* AMENITIES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading eyebrow="Comforts" title="Every detail considered" center />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {hotel.amenities.map((a, i) => {
            const Icon = iconFor(a);
            return (
              <motion.div
                key={a}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group glass flex flex-col items-center gap-3 rounded-2xl p-6 text-center transition hover:border-gold hover:shadow-gold-glow"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full border border-gold/30 bg-ink/40 text-gold transition group-hover:bg-gradient-gold group-hover:text-ink">
                  <Icon size={18} />
                </div>
                <div className="text-xs leading-snug text-foreground/80">{a}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* MAP */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Location" title="Find us" subtitle={hotel.address} />
        <div className="mt-8 overflow-hidden rounded-3xl border hairline shadow-luxury">
          <iframe
            title={`${hotel.name} map`}
            src={hotel.mapsEmbed}
            width="100%"
            height="450"
            style={{ border: 0, filter: "grayscale(0.6) invert(0.92) contrast(0.9)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-4 flex justify-end">
          <a
            href={hotel.mapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink"
          >
            Get Directions <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Reserve" title="Book through our partners" center />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hotel.booking.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative flex items-center justify-between overflow-hidden rounded-2xl border hairline bg-card p-6 transition hover:border-gold hover:shadow-gold-glow"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Book on</div>
                <div className="font-display text-2xl text-foreground">{p.name}</div>
              </div>
              <ArrowUpRight className="text-gold transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              <div
                className="absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100"
                style={{ background: "var(--gradient-radial-gold)" }}
              />
            </motion.a>
          ))}
        </div>
      </section>

      {/* OTHER PROPERTY */}
      {other && (
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative overflow-hidden rounded-3xl border hairline">
            <img
              src={other.cover}
              alt={other.name}
              className="h-[360px] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
            <div className="absolute inset-0 flex items-center p-10">
              <div className="max-w-md">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                  Also in the collection
                </div>
                <h3 className="mt-2 font-display text-4xl text-foreground">{other.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{other.tagline}</p>
                <Link
                  to="/hotels/$slug"
                  params={{ slug: other.slug }}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-ink"
                >
                  Discover <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* STICKY MOBILE BOTTOM BAR */}
      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-4 gap-1 border-t hairline bg-ink/90 p-2 backdrop-blur-lg lg:hidden">
        <a
          href={`tel:${hotel.phone}`}
          className="flex flex-col items-center justify-center gap-0.5 rounded-lg py-2 text-[10px] text-foreground/80"
        >
          <Phone size={16} className="text-gold" /> Call
        </a>
        <a
          href={`https://wa.me/${hotel.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 rounded-lg py-2 text-[10px] text-foreground/80"
        >
          <MessageCircle size={16} className="text-gold" /> WhatsApp
        </a>
        <a
          href={hotel.mapsDirections}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 rounded-lg py-2 text-[10px] text-foreground/80"
        >
          <MapPin size={16} className="text-gold" /> Map
        </a>
        <a
          href="#book"
          className="flex flex-col items-center justify-center gap-0.5 rounded-lg bg-gradient-gold py-2 text-[10px] font-semibold text-ink"
        >
          <Sparkles size={16} /> Book
        </a>
      </div>
    </>
  );
}
