// ─── Shared colour palette tokens ────────────────────────────────────────────
export const COLORS = {
  dark: "#0A0A0A",
  light: "#FAFAFA",
  warm: "#F5F4EF",
  border: "#E5E5E5",
  accent: "var(--color-accent)",
} as const;

// ─── Navigation links ─────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { href: "#work",       label: "Work",       id: "work"       },
  { href: "#internships",label: "Internships", id: "internships"},
  { href: "#experience", label: "Leadership",  id: "experience" },
  { href: "#hackathons", label: "Hackathons",  id: "hackathons" },
] as const;

// ─── Footer social links ──────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { href: "https://github.com/ananyascodehq",        label: "GitHub"   },
  { href: "https://linkedin.com/in/ananyakannan07",  label: "LinkedIn" },
  { href: "https://leetcode.com/u/ananyakannan/",    label: "LeetCode" },
  { href: "mailto:ananyakannan1502@gmail.com",       label: "Email"    },
] as const;
