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
  ],
  [
    5,
    {
      videoId: 'Fhno5Ln1CwI',
      title: 'svelte:boundary',
      description: `
			<p>The holidays are here—time for cozy moments, warm lights, and the occasional unexpected twist. But even in the magic of the season, things can go sideways. That’s where Svelte Boundary comes in: your digital guardian angel, keeping your app smooth, resilient, and gracefully handling the chaos. Whether it’s a sudden error, a delayed response, or a guest who just won’t show up, boundaries help your app stay calm and composed.</p>

      <p>Discover how to contain the unexpected, show thoughtful fallbacks, and keep the holiday spirit alive—without crashing the party.</p>

      <p><a href="https://svelte.dev/docs/svelte/svelte-boundary">Learn more about Svelte Boundary</a></p>

      <p><em>All holiday cheer depicted is real. All family dynamics are fictional. No cookies were harmed in the making of this video.</em></p>
			`
    }
  ],
  [
    6,
    {
      videoId: 'Wu3kcv3iKvg',
      title: 'Async Svelte',
      description: `
				<p>We've been <em>awaiting</em> this moment! Just like Santa's elves finally delivering that long-promised gift, Svelte is ready to resolve a promise made on day one: async components are here.</p>
				<p>Gone are the days of choosing between managing messy loading states inside components or drilling props through your tree like stringing lights on an endless garland. With Async Svelte, you can use the <code>await</code> keyword directly — in your script tags, inside <code>$derived</code> declarations, or right in your markup.</p>
				<p>The magic? Everything stays coordinated. When state changes trigger async work, the UI won't update until all the promises have settled — no more janky, half-loaded experiences. It's like Santa's sleigh: all the reindeer move together, perfectly in sync!</p>
				<p>Enable the experimental flag in your <code>svelte.config.js</code> and give it a whirl. Help the Svelte team iron out the last kinks before it becomes stable in Svelte 6!</p>
				<p><a href="https://svelte.dev/docs/svelte/await-expressions">Read the docs</a></p>
			`
    }
  ],
  [
    7,
    {
      videoId: 'NhdobVYdeYk',
      title: 'Observability',
      description: `
				<p>Santa's workshop has gone enterprise! With millions of deliveries to track, even the North Pole needs proper observability — and now SvelteKit has full OpenTelemetry support to help you see exactly what's happening in your app.</p>
				<p>Create an <code>instrumentation.server.ts</code> file, enable the experimental flags in your config, and suddenly all your <code>handle</code> hooks, <code>load</code> functions, form actions, and remote functions get beautiful traces. It's like having a magical map that shows every stop on Santa's route!</p>
				<p>When something goes wrong (like an elf hiding questionable code in your naughty-or-nice checker), just grab the trace ID and follow it through your spans to find exactly where things went sideways. You'll see the full journey: from the initial request through <code>handle</code> to <code>resolve</code> and into your functions.</p>
				<p>Add custom attributes to your spans with <code>setAttribute()</code> for extra context — because even Santa needs good logging when determining who's been naughty and who's been nice!</p>
				<p><a href="https://svelte.dev/docs/kit/observability">Read the docs</a></p>
			`
    }
  ],
  [
    8,
    {
      videoId: 'umSpfw7Zbgc',
      title: 'Editor Setup',
      description: `
				<p>Just like Santa's workshop needs the right tools for the job, your editor setup can make all the difference! Today we're unwrapping some gifts for your dev experience.</p>
				<p>First up: <a href="https://github.com/sveltejs/vite-plugin-svelte/tree/main/packages/vite-plugin-svelte-inspector">Svelte Inspector</a>! With just three lines of config, you get a magical shortcut that lets you click any component in your browser and teleport directly to its source code. It's like having a GPS for your codebase!</p>
				<p>Next, tame the .file madness in your project root. VS Code's file nesting feature lets you collapse related files together — check out <a href="https://github.com/antfu/vscode-file-nesting-config">Anthony Fu's epic nesting rules collection</a> and adjust to your workshop's needs.</p>
				<p>Finally, the pièce de résistance: <a href="https://code.visualstudio.com/docs/getstarted/userinterface#_customize-tab-labels">custom label patterns</a>! No more squinting at a dozen <code>+page.svelte</code> tabs. Transform them into meaningful names like "page (lucia)" or "layout (root)" — your keyboard navigation will thank you!</p>
				<p><a href="https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode">Svelte for VS Code</a> · <a href="https://sveltesociety.dev/collection/editor-support-c85c080efc292a34">Editor Support Collection</a> · <a href="https://gist.github.com/fubits1/3af058646ab6b872139a6cbda138d582#file-settings-customlabels-json">Custom Labels Config</a></p>
			`
    }
  ]
])
