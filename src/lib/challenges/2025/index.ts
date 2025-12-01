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
			description: `
				<p>Like Santa checking his list twice, <code>$inspect.trace()</code> helps you see exactly which pieces of reactive state caused your effects to re-run.</p>
				<p>Added in Svelte 5.14, place this rune as the first statement inside any <code>$effect</code> or <code>$derived</code> to get detailed console output about what's naughty (triggering unnecessary updates) and what's nice (working as expected).</p>
				<p>You can even pass an optional label to help identify your traces — because even Santa needs good logging when managing millions of deliveries!</p>
				<p><a href="https://svelte.dev/docs/svelte/$inspect#$inspect.trace()">Read the docs</a></p>
			`
		}
	]
])
