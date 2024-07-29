import type { Site, Page, Links, Socials } from "@types"

const baseUrl =
  import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL;

// Global
export const SITE: Site = {
  TITLE: "Luca's Portfolio",
  DESCRIPTION: "Luca Verheul's personal portfolio.",
  AUTHOR: "Luca Verheul",
}

// Work Page
export const WORK: Page = {
  TITLE: "Curriculum Vitae",
  DESCRIPTION: "Curriculum Vitae",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Recent blog posts.",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search my portfolio by keyword.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: baseUrl + "/",
  },
  {
    TEXT: "CV",
    HREF: baseUrl + "/cv",
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
    TEXT: "findmeongithub",
    HREF: "mailto:findmeongithub",
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

