<script>
	import '$lib/app.css'
	import Snow from '$lib/components/Snow.svelte'
	import Header from './Header.svelte'
	import Footer from './Footer.svelte'
	import { page } from '$app/state'

	let { children } = $props()

	let year = $derived(page.url.pathname.split('/')[1])
</script>

<svelte:head>
	<title>Advent of Svelte - {year}</title>
</svelte:head>

<Snow />

<div class="bg-black wrapper">
	<Header />

	<main>
		{@render children()}
	</main>

	{#if year != '2024'}
		<Footer />
	{/if}
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: max-content 1fr max-content;
		min-height: 100dvh;
	}
</style>
