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
  ],
  [
    9,
    {
      videoId: 'O2ODcC9Gj1A',
      title: 'Unit Testing',
      description: `
				<p>Even Santa checks his list twice — and now your Svelte code can get the same treatment! Unit testing in SvelteKit is powered by <a href="https://vitest.dev/">Vitest</a>, making it easier than ever to ensure your components and logic are on the nice list.</p>
				<p>The best part? Svelte's reactive classes work beautifully with tests. Since <code>$state</code> in classes behaves just like regular JavaScript, you can test your stores and logic without any special mocking magic. Create a <code>.svelte.spec.ts</code> file, write your assertions, and watch Vitest's gorgeous UI light up green like a Christmas tree!</p>
				<p>Whether you're over-engineering a Christmas wish list with a binary search tree (hey, no judgment — it's very testable!) or just making sure your naughty-or-nice checker works correctly, testing keeps your codebase merry and bright.</p>
				<p>Run <code>npx sv add vitest</code> to get started, then create your test files right alongside your components. When things go wrong, Vitest shows you exactly what failed — like having an elf quality control inspector for every function!</p>
				<p><a href="https://svelte.dev/docs/svelte/testing">Read the docs</a> · <a href="https://svelte.dev/docs/cli/vitest">CLI setup guide</a></p>
			`
    }
  ],
  [
    10,
    {
      videoId: 'oGpd2rvXgJg',
      title: 'State in Class',
      description: `
				<p>From baroque aristocracies of abstract factory providers to the reactive revolution — JavaScript's relationship with classes has been, shall we say, complicated. But Svelte finds the pragmatic middle ground!</p>
				<p>Use the <code>$state</code> rune directly in class fields to create reactive properties. When you need more control — like clamping a belief meter between 0 and 100 — make the field private and wrap it in a getter and setter. The compiler transforms these into efficient get/set methods on the class prototype.</p>
				<p>Add custom methods like <code>believe()</code> and <code>doubt()</code> to encapsulate your logic. Just remember: when passing methods as event handlers, <code>this</code> binding matters! Either use arrow functions in your class definition or wrap the call in an inline function.</p>
				<p>For computed values, <code>$derived</code> works beautifully in classes too — perfect for determining if Santa's belief level has reached critical status. You can even use <code>$state</code> inside the constructor when assigning to properties for the first time.</p>
				<p>Like Santa traversing the globe, bolstered by belief and hindered by doubt, your classes can now be both elegant and reactive!</p>
				<p><a href="https://svelte.dev/docs/svelte/$state#Classes">Read the docs</a></p>
			`
    }
  ],
  [
    11,
    {
      videoId: 'Ekhb5Ipuqks',
      title: 'resolve and asset',
      description: `
				<p>The 404 monster lurks in every codebase, waiting to pounce on typos and broken links. But fear not — SvelteKit 2.26 brought two trusty helpers to keep your routes and assets safe: <code>resolve</code> and <code>asset</code> from <code>$app/paths</code>.</p>
				<p>The <code>resolve</code> function is your type-safe compass for navigation. Pass it a route ID and SvelteKit validates it against your actual routes — typos light up red in your editor before they ever reach production. Even dynamic routes like <code>/tree/[name]</code> get proper parameter handling, ensuring every path leads somewhere real.</p>
				<p>For static files, <code>asset</code> wraps your references to the <code>static</code> folder with autocomplete and validation. No more wondering if it's <code>/elf.svg</code> or <code>/elves.svg</code> — your editor knows what's in Santa's bag!</p>
				<p>Pair these with ESLint (<code>npx sv add eslint</code>) to scan your entire codebase for unsafe routes. And when requirements change — like serving everything from <code>/advent-of-svelte-2025</code> — just update your config. All your <code>resolve</code> calls automatically include the new base path. The 404 monster doesn't stand a chance!</p>
				<p><a href="https://svelte.dev/docs/kit/$app-paths">Read the docs</a></p>
			`
    }
  ],
  [
    12,
    {
      videoId: 'XqlD3A_Btio',
      title: 'Remote Functions: Queries',
      description: `
				<p>What if fetching server data felt as natural as calling a local function? Remote Functions make Santa's data pipeline dreams come true — no more threading props through layers of components like tangled Christmas lights!</p>
				<p>Declare a <code>query</code> in a <code>.remote.ts</code> file by importing from <code>$app/server</code>, and suddenly you can fetch data right inside your components. During SSR it runs as a regular function; on the client, SvelteKit handles the fetch calls behind the scenes. Your database queries and secrets stay safe on the server — no accidental security leaks like closing over variables in other frameworks!</p>
				<p>Combined with Svelte's async features, loading a children's wish list in Santa's workshop dashboard becomes delightfully simple: just <code>await</code> your query inside a <code>$derived</code> and iterate with <code>{#each}</code>. The result? Type-safe, secure, and granular data loading that's easy to reason about.</p>
				<p>Validate your inputs with any Standard Schema library like Zod or Valibot for extra safety — because even Santa double-checks the naughty and nice lists!</p>
				<p><a href="https://svelte.dev/docs/kit/remote-functions">Read the docs</a></p>
			`
    }
  ],
  [
    13,
    {
      videoId: 'f_UBt3TxbkE',
      title: 'Remote Functions: Forms',
      description: `
				<p>Yesterday we fetched data with queries — today we write it back with Remote Form Functions! Import <code>form</code> from <code>$app/server</code> in your <code>.remote.ts</code> file, define a schema, and you've got a type-safe form handler ready for action.</p>
				<p>The schema does triple duty: it transforms raw <code>FormData</code> into a proper object, validates the input, and provides autocomplete when wiring up your form fields. Use the <code>fields</code> property to connect each input, then spread the form function onto your <code>&lt;form&gt;</code> element. That's it — Santa's wish list submission form is ready!</p>
				<p>The best gift? Progressive enhancement comes standard. Your forms work without JavaScript, just like the classics. When JS is available, submissions happen seamlessly without full page reloads.</p>
				<p>By default, a form submission refetches all queries to keep data fresh. Want to be more efficient? Add a <code>refresh</code> call inside your form handler for a single-flight mutation — the server sends back the updated data in the same response. One trip to the North Pole instead of two!</p>
				<p><a href="https://svelte.dev/docs/kit/remote-functions#form">Read the docs</a></p>
			`
    }
  ],
  [
    14,
    {
      videoId: '4NMAGKaPaD4',
      title: 'Remote Functions: Prerender',
      description: `
				<p>Some data changes with every request, but other data only changes when you deploy. Why fetch it fresh every time? Remote Prerender Functions let you bake data into your build like cookies for Santa!</p>
				<p>Import <code>prerender</code> from <code>$app/server</code> in your <code>.remote.ts</code> file, declare your function, and use it just like a query. The magic happens at build time: SvelteKit executes the function and saves the result to disk. In production, your server delivers a static file instead of running expensive database queries or API calls.</p>
				<p>This unlocks partial prerendering at the data level, not just the page level. On Santa's workshop dashboard, for example, the comments list stays dynamic and fresh, while the overview stats — which only change per deployment — are prerendered and served instantly from the CDN.</p>
				<p>Mix static and dynamic data on the same page with surgical precision. Stay tuned for more Remote Functions goodness!</p>
				<p><a href="https://svelte.dev/docs/kit/remote-functions#prerender">Read the docs</a></p>
			`
    }
  ],
  [
    15,
    {
      videoId: 'DUM1x1_WsGI',
      title: 'Remote Functions: Commands',
      description: `
				<p>Sometimes you need to trigger server-side logic without a form — like when an elf clicks a button to mark a gift as wrapped. That's where Remote Command Functions come in!</p>
				<p>Import <code>command</code> from <code>$app/server</code> in your <code>.remote.ts</code> file, define a schema for validation and type safety, and call it directly from your component. Unlike forms, commands require JavaScript — but they give you the flexibility to trigger mutations from any event handler.</p>
				<p>By default, commands don't refresh any queries — you're in full control. Want the UI to update? Add a <code>refresh</code> call to fetch new data alongside the mutation. It's the same single-flight mutation pattern from form functions: one round trip to the server, mutation plus fresh data back in your hands.</p>
				<p>With just a few lines of code, you get type-safe, input-validated remote commands. Perfect for those interactive dashboard moments when Santa needs to mark items as processed!</p>
				<p><a href="https://svelte.dev/docs/kit/remote-functions#command">Read the docs</a></p>
			`
    }
  ],
  [
    16,
    {
      videoId: 'qUfKrQjAXiM',
      title: 'Remote Functions: Optimistic Updates',
      description: `
				<p>Even the fastest reindeer can't outrun network latency. When Santa's workshop dashboard feels sluggish because the server takes time to process updates, optimistic updates come to the rescue!</p>
				<p>Building on yesterday's command example, we tackle the problem of slow responses. Instead of waiting for the server to confirm that a wish list item is processed, we update the UI immediately and let the server catch up.</p>
				<p>Chain <code>.updates()</code> to your command call, pass in the query you want to update, and call <code>.withOverride()</code> on it. You receive the current state and return what the UI should show right now. The interface responds instantly — no more waiting for that strikethrough to appear!</p>
				<p>The best part? Optimistic updates automatically revert when the request completes, whether it succeeds or fails. If something goes wrong, the UI snaps back to reality. Fast, smooth, and safe — just like Santa's sleigh on Christmas Eve!</p>
				<p><a href="https://svelte.dev/docs/kit/remote-functions#command-Updating-queries">Read the docs</a></p>
			`
    }
  ],
  [
    17,
    {
      videoId: '2FOkmgsOYyI',
      title: '$state.eager',
      description: `
				<p>When async work is happening in your Svelte app, the UI waits for everything to settle before updating — like Santa's reindeer moving in perfect sync. But sometimes you want immediate feedback!</p>
				<p>Imagine Santa's naughty-and-nice list with tabs. When you click a tab to switch views, async data fetching begins. Without <code>$state.eager</code>, the active tab indicator won't update until the data loads — leaving users confused about whether their click registered.</p>
				<p>Enter <code>$state.eager(value)</code>! This rune tells Svelte: "Give me the latest value right now, even if async work is still in progress." Wrap your state reference with it, and the UI updates instantly while the data loads in the background.</p>
				<p>Use this sparingly — only for providing immediate visual feedback in response to user actions. In most cases, letting Svelte coordinate updates provides a smoother experience. But for navigation indicators, tab switches, and loading states, <code>$state.eager</code> is the perfect gift!</p>
				<p><a href="https://svelte.dev/docs/svelte/$state#$state.eager">Read the docs</a></p>
			`
    }
  ],
  [
    18,
    {
      videoId: 'WHvNIr6Xhmw',
      title: 'fork',
      description: `
				<p>Yesterday we used <code>$state.eager</code> to show immediate feedback when switching tabs. But what if we could go even further — preloading data before the user even clicks?</p>
				<p>In SvelteKit, when you hover over a link, data fetching starts automatically because the framework assumes you're about to navigate. The <code>fork</code> function brings this same magic to your own components!</p>
				<p>Import <code>fork</code> from <code>svelte</code> and pass it a function that modifies state. The state changes happen in an off-screen DOM — fetching starts, but nothing visually changes yet. When the user commits to the action (like clicking), call <code>fork.commit()</code> and the pre-loaded changes apply instantly.</p>
				<p>The result? Hover over a tab for a couple seconds, then click — and the content appears immediately! If the user navigates elsewhere instead, call <code>fork.discard()</code> to clean up. It's like Santa's elves preparing gifts in a secret workshop, ready to deliver the moment you ask!</p>
				<p><a href="https://svelte.dev/docs/svelte/svelte#fork">Read the docs</a></p>
			`
    }
  ]
])
