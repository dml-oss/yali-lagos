/**
 * Returns a valid absolute origin for metadataBase and canonical URLs.
 * Never returns empty, the literal "undefined", or other values that break `new URL()`.
 */
function getCanonicalSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (typeof explicit === "string") {
    const trimmed = explicit.trim();
    if (trimmed && trimmed !== "undefined") {
      const candidate = trimmed.replace(/\/$/, "");
      const withProtocol = /^https?:\/\//i.test(candidate)
        ? candidate
        : `https://${candidate}`;
      try {
        return new URL(withProtocol).origin;
      } catch {
        /* fall through */
      }
    }
  }

  const vercel = process.env.VERCEL_URL;
  if (typeof vercel === "string") {
    const host = vercel.replace(/^https?:\/\//, "").trim();
    if (host && host !== "undefined") {
      try {
        return new URL(`https://${host}`).origin;
      } catch {
        /* fall through */
      }
    }
  }

  return "http://localhost:3000";
}

const siteUrl = getCanonicalSiteUrl();

export const siteConfig = {
  name: "YALI Network Lagos ",
  author: "Built by Pacepard | Damola Oladipo",
  url: siteUrl,
  description:
    "YALI Lagos Hub strengthens youth leadership and community impact across Lagos as part of Nigeria. With over 1,000 members, the hub delivers impactful programs promoting civic engagement and youth development.",
  ogImage: "/blocks/og.png",
  baseLinks: {
    home: "/",
    activities: "activities",
    programs: "/programs",
    events: "/events",
    stories: "/stories",
    about: "/about",
    faqs: "/faqs",
    join: "/join",
    login: "login",

    sociaLlinks: {
      twitter: "https://www.x.com/damolaoladipo",
      github: "https://github.com/damolaoladipo",
      bluesky: "https://bsky.app/profile/madebydamola.tngl.sh",
      linkedin: "https://www.linkedin.com/in/damolaoladipo",
      email: "mailto:mail@damolaoladipo.com",
    },
  },
};

export const metadataKeywords = [
  'Essay',
  'React',
  'Damola Essays',
  'Damola Essays Template',
  'Damola Essays Next.js',
  'Damola Essays Tailwind',
  'Next.js Essays',
  'React Essays',
  'Web Development',
  'Tutorials',
  'MDX Essays',
  'Design Engineering',
];

export type siteConfig = typeof siteConfig;
