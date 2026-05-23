export const SITE_URL = "https://www.sanrajinn.com";
export const SITE_NAME = "Hotel Sanraj Inn";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/pratap-nagar/hotel-front.PNG`;
export const DEFAULT_TWITTER = "@sanrajinn";

export function absoluteUrl(path: string) {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function seoKeywords(extra: string[] = []) {
  return [
    "luxury hotel in Jaipur",
    "hotel booking Jaipur",
    "premium stay Jaipur",
    "family hotel Jaipur",
    "hotel near Jaipur airport",
    "Pratap Nagar hotel Jaipur",
    "Gurjar Ki Thadi hotel Jaipur",
    "comfortable rooms Jaipur",
    ...extra,
  ].join(", ");
}
