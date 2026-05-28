import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";

const INSTAGRAM_LINK = "https://www.instagram.com/hotelsanrajinn/";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t hairline bg-ink/60">
      <div className="gold-divider" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo className="h-12 w-12 shrink-0 opacity-90" />
            <div className="font-display text-2xl">
              Sanraj <span className="text-gradient-gold">Inn</span>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A premium Jaipur stay collection designed for guests who value comfort, calm interiors,
            and dependable hospitality.
          </p>
          <div className="mt-6 flex items-center">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border hairline transition hover:border-gold hover:text-gold"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Properties</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/hotels/pratap-nagar-branch" className="hover:text-gold">
                Hotel Sanraj Inn · Pratap Nagar, Jaipur
              </Link>
            </li>
            <li>
              <Link to="/hotels/gurjar-ki-thadi-branch" className="hover:text-gold">
                Hotel Sanraj Prime · Gurjar Ki Thadi, Jaipur
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Explore</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/gallery" className="hover:text-gold">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gold">
                Explore Gallery
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Reservations</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-gold" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-gold" /> hotelsanrajinn@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-gold" /> Jaipur · Rajasthan · India
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t hairline">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Sanraj Inn Luxury Collection. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Crafted with care</p>
        </div>
      </div>
    </footer>
  );
}
