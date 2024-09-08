import { type HomeLayoutProps } from "fumadocs-ui/home-layout"

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
	nav: {
		// TODO: should show LA icon here that links to the website home page instead
		title: ""
	},
	links: [
		{
			text: "Website",
			url: "https://learn-anything.xyz"
		},
		{
			text: "Website Code",
			url: "https://github.com/learn-anything/learn-anything"
		},
		{
			text: "Docs Code",
			url: "https://github.com/learn-anything/docs"
		},
		{
			text: "Discord",
			url: "https://discord.com/invite/bxtD8x6aNF"
		}
	]
}
