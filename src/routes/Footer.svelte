<script lang="ts">
	import IconClose from '$lib/icons/IconClose.svelte'

	let dialog: HTMLDialogElement

	interface Credit {
		label: string
		author: string
		items?: string[]
		url: string
	}

	const credits: Credit[] = [
		{
			author: 'Icons 8',
			label: 'Illustrations',
			url: 'https://icons8.com/illustrations/author/zD2oqC8lLBBA',
			items: [
				'Santa Hat',
				'Santa sleigh',
				'Cookie',
				'Heart',
				'Santa face',
				'Present',
				'ID',
				'Snowflake',
				'Snow Globe',
				'Question Mark',
			],
		},
		{
			author: 'Elisabet Guba',
			label: 'Illustrations',
			url: 'https://icons8.com/illustrations/author/lZpGtGw5182N',
			items: ['Clock'],
		},
		{
			author: 'Obra Icons',
			label: 'Icons',
			url: 'https://icons.obra.studio/',
		},
	]
</script>

<footer class="p-4 sm:p-6 bg-gray-800 relative">
	<div class="mx-auto max-w-screen-xl">
		<div class="md:flex md:justify-between">
			<div class="mb-6 md:mb-0">
				<p class="text-2xl font-semibold text-white">
					Advent of Svelte
				</p>
			</div>
		</div>

		<hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />

		<p class="text-sm text-gray-400">
			Advent of Svelte is created
			<a href="https://sveltesociety.dev/">by Svelte Society</a>.
		</p>

		<button
			class="button simple text-sm text-svelte"
			on:click={() => dialog.showModal()}>
			Show Credits
		</button>
	</div>
</footer>

<dialog
	class="border border-gray-700 text-gray-400 bg-gray-900 py-6 px-12 backdrop:bg-black backdrop:bg-opacity-60"
	bind:this={dialog}>
	<div class="flex items-center justify-between">
		<h1 class="text-3xl font-extrabold text-white mb-3">Credits</h1>

		<button class="button simple" on:click={() => dialog.close()}>
			<IconClose />
		</button>
	</div>

	{#each credits as { author, url, items }}
		<h3 class="text-lg">
			Illustrations by
			<a href={url}>{author}</a>{items ? ':' : ''}
		</h3>

		{#if items}
			<ul class="list-disc list-inside my-2">
				{#each items as item}
					<li>{item}</li>
				{/each}
			</ul>
		{/if}
	{/each}
</dialog>
