import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { motion } from "motion/react";
import { HOTELS } from "@/data/hotels";
import { SITE_URL, absoluteUrl, seoKeywords } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Hotel Sanraj Inn Jaipur | Luxury Hospitality" },
      {
        name: "description",
        content:
          "Learn about Hotel Sanraj Inn (Pratap Nagar) and Hotel Sanraj Prime (Gurjar Ki Thadi), a premium Jaipur hospitality collection offering comfortable luxury rooms and family-friendly stays.",
      },
      { name: "keywords", content: seoKeywords(["about Sanraj Inn", "Jaipur hospitality brand"]) },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "About Hotel Sanraj Inn Jaipur" },
      {
        property: "og:description",
        content: "Craft, discretion, and service-first hospitality in Jaipur.",
      },
      { property: "og:url", content: `${SITE_URL}/about` },
      {
        property: "og:image",
        content: absoluteUrl(HOTELS[0]?.gallery[0]?.src ?? "/images/pratap-nagar/hotel-front.PNG"),
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Hotel Sanraj Inn Jaipur" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: About,
});

function About() {
  const storyImage = HOTELS[0]?.gallery?.[0]?.src;

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-36">
        <SectionHeading
          eyebrow="Our Story"
          title="Built on craft, discretion, and place."
          subtitle="Founded with a service-first philosophy, Sanraj Inn focuses on thoughtfully designed rooms, reliable comfort, and warm hospitality in Jaipur."
        />
      </section>

      <section className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="overflow-hidden rounded-3xl border hairline shadow-luxury"
        >
          {storyImage ? (
            <img
              src={storyImage}
              alt="Sanraj Inn interior"
              className="h-[480px] w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="grid h-[480px] place-items-center bg-card text-muted-foreground">
              Images coming soon
            </div>
          )}
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-3">
        {[
          {
            n: "01",
            t: "Heritage",
            d: "We restore, never overwrite. Original carvings, frescoes and marble are protected by hand.",
          },
          {
            n: "02",
            t: "Hospitality",
            d: "Discreet, anticipatory service. A single contact, available 24/7, who knows your preferences.",
          },
          {
            n: "03",
            t: "Place",
            d: "Each branch is shaped by its neighborhood — connected locations, practical comfort, and calm interiors.",
          },
        ].map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-8"
          >
            <div className="font-display text-5xl text-gradient-gold">{p.n}</div>
            <h3 className="mt-3 font-display text-2xl">{p.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
          </motion.div>
        ))}
      </section>
    </>
  );
}
