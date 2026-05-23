import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { BrandLogo } from "@/components/site/BrandLogo";
import { HOTELS } from "@/data/hotels";
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_TWITTER,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  seoKeywords,
} from "@/lib/seo";

const orgSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/branding/sanraj-logo.png"),
    sameAs: ["https://www.instagram.com/", "https://www.facebook.com/", "https://x.com/"],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Hotel Sanraj Inn and Hotel Sanraj Prime in Jaipur",
    itemListElement: HOTELS.map((hotel, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": ["Hotel", "LodgingBusiness", "LocalBusiness"],
        name: `${hotel.name} - ${hotel.location}`,
        image: absoluteUrl(hotel.cover),
        address: {
          "@type": "PostalAddress",
          streetAddress: hotel.address,
          addressLocality: "Jaipur",
          addressRegion: "Rajasthan",
          addressCountry: "IN",
        },
        telephone: hotel.call,
        url: absoluteUrl(`/hotels/${hotel.slug}`),
        hasMap: hotel.googleMaps,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which Sanraj properties are available in Jaipur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Guests can stay at Hotel Sanraj Inn in Pratap Nagar, Jaipur and Hotel Sanraj Prime in Gurjar Ki Thadi, Jaipur.",
        },
      },
      {
        "@type": "Question",
        name: "Is Hotel Sanraj Inn suitable for family stays in Jaipur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, both branches provide comfortable rooms, reliable hospitality, and family-friendly amenities.",
        },
      },
    ],
  },
];

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-gradient-gold">404</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for has wandered off.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-full bg-gradient-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-ink"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 rounded-full bg-gradient-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-ink"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Luxury Hotel in Jaipur | Hotel Sanraj Inn" },
      {
        name: "description",
        content:
          "Discover premium Jaipur stays at Hotel Sanraj Inn, Pratap Nagar and Hotel Sanraj Prime, Gurjar Ki Thadi with direct booking options.",
      },
      { name: "keywords", content: seoKeywords() },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#0a0905" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Luxury Hotel in Jaipur | Hotel Sanraj Inn" },
      {
        property: "og:description",
        content:
          "Premium Jaipur stay collection featuring Hotel Sanraj Inn and Hotel Sanraj Prime with real galleries and quick booking links.",
      },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { property: "og:image:alt", content: "Hotel Sanraj Inn Jaipur exterior view" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: DEFAULT_TWITTER },
      { name: "twitter:title", content: "Luxury Hotel in Jaipur | Hotel Sanraj Inn" },
      {
        name: "twitter:description",
        content:
          "Discover premium rooms and easy hotel booking in Jaipur at Hotel Sanraj Inn and Hotel Sanraj Prime.",
      },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Inter:wght@300;400;500;600;700&display=swap",
      },
      { rel: "canonical", href: SITE_URL },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`loader-overlay ${showLoader ? "is-visible" : ""}`} aria-hidden={!showLoader}>
        <div className="loader-content">
          <BrandLogo className="loader-logo" />
          <div className="loader-shimmer" />
        </div>
      </div>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </QueryClientProvider>
  );
}
