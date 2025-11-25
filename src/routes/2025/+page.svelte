<script lang="ts">
	import { isFuture } from 'date-fns'
	import { dev } from '$app/environment'
	import santaLogo from '$lib/images/santa-svelte.png'

	// Shuffled day positions for visual interest
	const DAYS = [
		17, 3, 24, 8, 12, 1, 19, 6, 22, 15, 4, 11, 20, 7, 14, 2, 23, 9, 16, 5, 21,
		10, 18, 13
	]

	// Pre-defined visual offsets per grid position (24 entries)
	const OFFSETS = [
		{ y: 8, rotate: -1.5 },
		{ y: -6, rotate: 2 },
		{ y: 4, rotate: -0.5 },
		{ y: -8, rotate: 1 },
		{ y: 6, rotate: -2 },
		{ y: -4, rotate: 0.5 },
		{ y: 10, rotate: 1.5 },
		{ y: -10, rotate: -1 },
		{ y: 2, rotate: 2 },
		{ y: -6, rotate: -0.5 },
		{ y: 8, rotate: 0 },
		{ y: -2, rotate: 1.5 },
		{ y: 4, rotate: -1.5 },
		{ y: -8, rotate: 2 },
		{ y: 6, rotate: -2 },
		{ y: -4, rotate: 0 },
		{ y: 10, rotate: 1 },
		{ y: -10, rotate: -1.5 },
		{ y: 2, rotate: 0.5 },
		{ y: -6, rotate: 2 },
		{ y: 8, rotate: -0.5 },
		{ y: -2, rotate: 1 },
		{ y: 4, rotate: -2 },
		{ y: -8, rotate: 1.5 }
	]

	// Reuse unlock logic pattern from challenges.ts
	function isLocked(day: number): boolean {
		if (dev) return false
		const unlockDate = new Date(
			`2025-12-${day.toString().padStart(2, '0')}T00:00:00Z`
		)
		return isFuture(unlockDate)
	}
</script>

<section
	class="bg-gray-900 py-8 px-4 mx-auto text-center flex flex-col items-center justify-center gap-2">
	<img
		style="max-width: 300px;"
		src={santaLogo}
		alt="Svelte logo with a santa hat on top of it" />

	<h1
		class="mb-6 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-white">
		24 Svelte Surprises <em>Await</em>
	</h1>
</section>

<section class="bg-gray-900 py-8 px-4">
	<div class="calendar-grid">
		{#each DAYS as day, i (day)}
			{@const locked = isLocked(day)}
			{@const offset = OFFSETS[i]}
			<div class="calendar-cell">
				<div
					class="calendar-box"
					class:locked
					style="margin-top: {offset.y}px; transform: rotate({offset.rotate}deg)">
					<span class="day-number">{locked ? '?' : day}</span>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.calendar-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
		max-width: 600px;
		margin: 0 auto;
		padding: 1rem;
	}

	@media (min-width: 640px) {
		.calendar-grid {
			grid-template-columns: repeat(6, 1fr);
			max-width: 800px;
			gap: 2rem;
		}
	}

	.calendar-cell {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;
	}

	.calendar-box {
		aspect-ratio: 1;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #1f2937;
		border: 2px solid #374151;
		border-radius: 0.5rem;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease,
			border-color 0.2s ease;
	}

	.calendar-box:not(.locked):hover {
		transform: scale(1.05) rotate(0deg) !important;
		box-shadow: 0 0 20px rgba(255, 62, 0, 0.4);
		border-color: #ff3e00;
	}

	.calendar-box.locked {
		background-color: #111827;
		border-color: #1f2937;
	}

	.day-number {
		font-size: 1.5rem;
		font-weight: 700;
		color: white;
	}

	@media (min-width: 640px) {
		.day-number {
			font-size: 2rem;
		}
	}

	.calendar-box.locked .day-number {
		color: #4b5563;
	}
</style>
