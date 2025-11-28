<script lang="ts">
	import DayContent from '../DayContent.svelte'

	let { data } = $props()
</script>

<svelte:head>
	<title>Day {data.day}: {data.title} - Advent of Svelte 2025</title>
</svelte:head>

<section class="day-page">
	<a href="/2025" class="back-link">
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			<path d="M19 12H5M12 19l-7-7 7-7" />
		</svg>
		Back to Calendar
	</a>

	<DayContent
		day={data.day}
		videoId={data.videoId}
		title={data.title}
		content={data.content}
	/>
</section>

<style>
	.day-page {
		min-height: 100vh;
		background: #111827;
		padding: 2rem 1rem;
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: #9ca3af;
		text-decoration: none;
		font-size: 0.875rem;
		margin-bottom: 2rem;
		transition: color 0.2s;
	}

	.back-link:hover {
		color: #ff3e00;
	}

	.back-link svg {
		width: 1.25rem;
		height: 1.25rem;
	}
</style>
