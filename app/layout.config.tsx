import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/learn-anything-xyz/docs",
  nav: {
    title: "docs.learn-anything.xyz",
  },
  links: [
    {
      text: "Web",
      url: "https://learn-anything.xyz",
    },
    {
      text: "GitHub",
      url: "https://github.com/learn-anything-xyz",
    },
    {
      text: "X",
      url: "https://x.com/learnanything_",
    },
  ],
}
