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
		class="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-white">
		Advent of Svelte
	</h1>

	<p class="mb-6 max-w-2xl md:text-lg lg:text-xl text-gray-400">
		This year the Svelte team are doing something special (to be announced),
		so there won't be any coding challenges. However, you can always
		checkout
		<a href="/2023">last years challenges</a>! If you competed last year, or
		just want something else, then we recommend
		<a href="https://adventofcode.com">Advent of Code</a>.
	</p>
</section>
