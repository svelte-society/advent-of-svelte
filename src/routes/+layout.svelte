<script>
	import '$lib/app.css'
	import Snow from '$lib/components/Snow.svelte'
	import Header from './Header.svelte'
	import Footer from './Footer.svelte'
</script>

<svelte:head>
	<title>Advent of Svelte</title>
</svelte:head>

<Snow />
<div class="bg-black">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	:global(.locked-tab) {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
