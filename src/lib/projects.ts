import { z } from "zod";

const projectSchema = z.object({
	repo: z.string(),
	link: z.string(),
	description: z.string(),
});

export type Project = z.infer<typeof projectSchema>;

export async function getProjects(): Promise<Project[]> {
	return [
		{
			repo: "Lost-Saint",
			link: "https://github.com/kattsukii/Lost-Saint",
			description: "Boring personal site built with Astro",
		},
	];
}
