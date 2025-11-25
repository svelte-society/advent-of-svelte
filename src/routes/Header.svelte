<script lang="ts">
	import { page } from '$app/state'

	const YEARS = ['2024', '2023']
</script>

<header>
	<nav class="border-gray-200 px-4 lg:px-6 py-2 bg-svelte relative">
		<div
			class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
			<a href="/{YEARS[0]}" class="flex items-center">
				<span
					class="self-center text-xl font-semibold whitespace-nowrap text-white">
					Advent of Svelte
				</span>
			</a>

			<div class="justify-between items-center flex w-auto order-1">
				{#each YEARS as year}
					{@const href = `/${year}`}

					<a
						{href}
						class="py-2 pr-4 pl-3 text-white rounded"
						class:font-bold={page.url.pathname.startsWith(href)}
						aria-current="page">{year}</a>
				{/each}
			</div>
		</div>
	</nav>
</header>
