import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { HOTELS } from "@/data/hotels";
import { useState } from "react";
import { X } from "lucide-react";
import { SITE_URL, absoluteUrl, seoKeywords } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Hotel Photo Gallery Jaipur | Hotel Sanraj Inn" },
      {
        name: "description",
        content:
          "Browse real room photos of Hotel Sanraj Inn (Pratap Nagar) and Hotel Sanraj Prime (Gurjar Ki Thadi) in Jaipur.",
      },
      {
        name: "keywords",
        content: seoKeywords(["hotel photo gallery Jaipur", "real room photos Jaipur hotel"]),
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Hotel Photo Gallery Jaipur | Hotel Sanraj Inn" },
      {
        property: "og:description",
        content: "Real room interiors and hotel spaces from both Sanraj Inn Jaipur branches.",
      },
      { property: "og:url", content: `${SITE_URL}/gallery` },
      {
        property: "og:image",
        content: absoluteUrl(HOTELS[0]?.gallery[0]?.src ?? "/images/pratap-nagar/hotel-front.PNG"),
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hotel Photo Gallery Jaipur | Hotel Sanraj Inn" },
      {
        name: "twitter:image",
        content: absoluteUrl(HOTELS[0]?.gallery[0]?.src ?? "/images/pratap-nagar/hotel-front.PNG"),
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/gallery` }],
  }),
  component: GalleryPage,
});

const imgs = HOTELS.flatMap((hotel) =>
  hotel.gallery.map((img) => ({ src: img.src, alt: img.alt || `${hotel.name} room interior` })),
);

function GalleryPage() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-36">
      <SectionHeading eyebrow="Visual Diary" title="A look inside Sanraj Inn" center />
      {imgs.length > 0 ? (
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {imgs.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05 }}
              onClick={() => setActive(img.src)}
              aria-label={`Open image ${i + 1}`}
              className="group relative mb-4 block w-full overflow-hidden rounded-2xl"
            >
              <img
                src={img.src}
                loading="lazy"
                decoding="async"
                alt={img.alt}
                className="h-auto w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/30" />
            </motion.button>
          ))}
        </div>
      ) : (
        <div className="mt-12 grid h-[300px] place-items-center rounded-2xl border hairline bg-card text-muted-foreground">
          Images coming soon
        </div>
      )}

      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/95 p-6 backdrop-blur-xl"
        >
          <button
            className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold"
            aria-label="Close"
          >
            <X />
          </button>
          <motion.img
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            src={active}
            alt="Expanded Sanraj Inn gallery image"
            className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-luxury"
          />
        </motion.div>
      )}
    </section>
  );
}
