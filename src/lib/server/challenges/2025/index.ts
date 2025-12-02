export interface DayContent {
	videoId: string
	title: string
	description: string
}

/**
 * Check if a day is still locked (not yet available)
 * Days unlock at 12:00 UTC on their respective dates in December 2025
 */
export function isLocked(day: number): boolean {
	const unlockDate = new Date(
		`2025-12-${day.toString().padStart(2, '0')}T12:00:00Z`,
	)
	return unlockDate > new Date()
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
	],
	[
		2,
		{
			videoId: '380FZyo-1ew',
			title: 'The Svelte CLI',
			description: `
				<p>Santa's workshop just got a new helper! The Svelte CLI (<code>sv</code>) is your one-stop tool for scaffolding projects, adding integrations, and migrating to the latest goodies.</p>
				<p>Use <code>sv create</code> to spin up a fresh SvelteKit project faster than Rudolph's takeoff. Need Tailwind, Drizzle, or Vitest? <code>sv add</code> wraps them up with a bow — no manual config required.</p>
				<p>Still on Svelte 4? Let <code>sv migrate svelte-5</code> do the heavy lifting, updating your components to use runes like magic.</p>
				<p>And the newest gift: import projects straight from the Svelte Playground with <code>sv create --template playground</code>!</p>
				<p><a href="https://svelte.dev/docs/cli/overview">Read the docs</a></p>
			`
		}
	]
])
