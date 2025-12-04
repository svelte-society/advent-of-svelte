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
				<p>And the newest gift: import projects straight from the Svelte Playground with <code>sv create --from-playground &lt;url&gt;</code>!</p>
				<p><a href="https://svelte.dev/docs/cli/overview">Read the docs</a></p>
			`
		}
	],
	[
		3,
		{
			videoId: 'mxMzzxOVLIM',
			title: '{@attach}',
			description: `
				<p>Let it snow! Attachments are the gift that keeps on giving — a simpler, more powerful way to hook into DOM elements introduced in Svelte 5.29.</p>
				<p>An attachment is just a function that receives a DOM node and optionally returns a cleanup function. Wrap it in a factory to pass options, like configuring how many snowflakes fall from the sky!</p>
				<p>Unlike actions, attachments are inherently reactive — when your state changes, they automatically re-run like magic. And best of all, they're spreadable: wrapper components can accept attachments and pass them along to their elements, no extra plumbing required.</p>
				<p>Think of attachments as Santa's little helpers for your DOM — they arrive when needed, do their work, and clean up after themselves!</p>
				<p><a href="https://svelte.dev/docs/svelte/@attach">Read the docs</a> · <a href="https://svelte.dev/tutorial/svelte/attach">Try the tutorial</a></p>
			`
		}
	],
	[
		4,
		{
			videoId: 'yDy6jHrhRfg',
			title: 'New Svelte Resources',
			description: `
				<p>Santa's elves have been busy! Two shiny new presents just landed under the Svelte tree.</p>
				<p>First, the <a href="https://sveltesociety.dev">Svelte Society website</a> got a magical makeover — it's now a living advent calendar of community content! Videos, libraries, events, recipes, and more appear like gifts each day. And just like writing a letter to Santa, you can now submit content directly without opening PRs!</p>
				<p>Second, unwrap <a href="https://svelte.dev/packages">svelte.dev/packages</a> — the elves' curated catalog of packages that play nicely with Svelte and SvelteKit. Official packages are stamped with the Svelte logo, so you know they came straight from the North Pole workshop.</p>
				<p>Think of Svelte Society as your cozy community fireplace for discovery, and svelte.dev/packages as your official gift guide. Two stockings stuffed with goodness!</p>
				<p><a href="https://sveltesociety.dev">Svelte Society</a> · <a href="https://svelte.dev/packages">Svelte Packages</a> · <a href="https://sveltesociety.dev/submit">Submit Content</a></p>
			`
		}
	]
])
