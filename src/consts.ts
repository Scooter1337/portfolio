import type { Site, Page, Links, Socials } from "@types"

const baseUrl =
  import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL;

// Global
export const SITE: Site = {
  TITLE: "Astro Sphere",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Mark Horn",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: baseUrl + "/",
  },
  {
    TEXT: "Work",
    HREF: baseUrl + "/work",
  },
  {
    TEXT: "Blog",
    HREF: baseUrl + "/blog",
  },
  {
    TEXT: "Projects",
    HREF: baseUrl + "/projects",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "lucav007@hotmail.com",
    HREF: "mailto:lucav007@hotmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "Scooter1337",
    HREF: "https://github.com/scooter1337",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Luca Verheul",
    HREF: "https://www.linkedin.com/in/lucaadrianusverheul/",
  },
  // {
  //   NAME: "Twitter",
  //   ICON: "twitter-x",
  //   TEXT: "markhorn_dev",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
]

