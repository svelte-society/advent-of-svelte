export interface DayContent {
	videoId: string
	title: string
	description: string
}

/**
 * Content for each day of Advent of Svelte 2025
 * Key: day number (1-24)
 * Value: content object with videoId, title, and description
 */
export const content = new Map<number, DayContent>([
	[
		1,
		{
			videoId: 'l4EEcL1oMDQ',
			title: '$inspect.trace()',
			description:
				"Like Santa checking his list twice, $inspect.trace() helps you see exactly which pieces of reactive state caused your effects to re-run. Added in Svelte 5.14, place this rune as the first statement inside any $effect or $derived to get detailed console output about what's naughty (triggering unnecessary updates) and what's nice (working as expected). You can even pass an optional label to help identify your traces — because even Santa needs good logging when managing millions of deliveries!"
		}
	]
])
