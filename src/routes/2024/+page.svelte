<script lang="ts">
	import santaLogo from '$lib/images/santa-svelte.png'
</script>

<section
	class="bg-gray-900 h-full pb-[25dvh] py-8 px-4 mx-auto text-center flex flex-col items-center justify-center gap-2">
	<img
		style="max-width: 300px;"
		src={santaLogo}
		alt="Svelte logo with a santa hat on top of it" />

	<h1
		class="mb-6 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-white">
		Advent of Svelte
	</h1>

	<p class="max-w-2xl md:text-lg lg:text-xl text-gray-400">
		Last December, we presented an advent calendar's worth of festive
		Svelte-themed coding challenges.
	</p>

	<p class="max-w-2xl md:text-lg lg:text-xl text-gray-400">
		This year, you get to relax while the Svelte team take on a challenge.
		They'll be releasing a new thing each day until Christmas! Whether it's
		a few feature in Svelte/SvelteKit, or an improvement to the website.
	</p>

	<p class="max-w-2xl md:text-lg lg:text-xl text-gray-400">
		If you still want to do some fun coding challenges, you can checkout
		<a href="/2023">last year's</a>! Regardless, come hang out with us in
		the
		<a href="https://svelte.dev/chat">Discord server</a> to chat and share the
		joy of Advent of Svelte.
	</p>

	<div class="flex items-center gap-6 mt-6">
		<a href="https://svelte.dev/blog/advent-of-svelte" class="button">
			What's new?!
		</a>

		<a href="/2023" class="button secondary"> Last Year's Challenges </a>
	</div>
</section>
