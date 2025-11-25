<script lang="ts">
	import { isFuture } from 'date-fns'
	import { dev } from '$app/environment'
	import santaLogo from '$lib/images/santa-svelte.png'

	// Svelte orange for all unlocked days
	const SVELTE_ORANGE = '#ff3e00'
	const SVELTE_GLOW = 'rgba(255, 62, 0, 0.5)'

	// Day icons for each topic
	const DAY_ICONS: Record<number, { icon: string; title: string }> = {
		1: {
			title: '$inspect.trace',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<circle cx="11" cy="11" r="8"/>
				<path d="M21 21l-4.35-4.35"/>
				<path d="M11 8v6M8 11h6"/>
			</svg>`
		},
		2: {
			title: 'CLI',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M4 17l6-6-6-6M12 19h8"/>
			</svg>`
		},
		3: {
			title: 'attach',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>
			</svg>`
		},
		4: {
			title: 'packages',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
				<path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>
			</svg>`
		},
		5: {
			title: 'boundary',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
				<path d="M12 8v4M12 16h.01"/>
			</svg>`
		},
		6: {
			title: 'await',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M6 2v6h.01L6 8l4 4-4 4-.01-.01V22"/>
				<path d="M18 2v6h-.01L18 8l-4 4 4 4 .01-.01V22"/>
			</svg>`
		},
		7: {
			title: 'telemetry',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M2 12h2M6 12a6 6 0 1112 0M22 12h-2"/>
				<circle cx="12" cy="12" r="2"/>
				<path d="M12 2v2M12 20v2"/>
			</svg>`
		},
		8: {
			title: 'VS Code',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M16 18l6-6-6-6"/>
				<path d="M8 6l-6 6 6 6"/>
				<path d="M14.5 4l-5 16"/>
			</svg>`
		},
		9: {
			title: 'testing',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M9 11l3 3L22 4"/>
				<path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
			</svg>`
		},
		10: {
			title: 'state class',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<rect x="3" y="3" width="18" height="18" rx="2"/>
				<path d="M3 9h18M9 21V9"/>
			</svg>`
		},
		11: {
			title: 'resolve',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
				<path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
			</svg>`
		},
		12: {
			title: 'query',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<ellipse cx="12" cy="5" rx="9" ry="3"/>
				<path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
				<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
			</svg>`
		},
		13: {
			title: 'form',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
				<path d="M14 2v6h6M8 13h8M8 17h8M8 9h2"/>
			</svg>`
		},
		14: {
			title: 'prerender',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
			</svg>`
		},
		15: {
			title: 'command',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M18 3a3 3 0 00-3 3v12a3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3H6a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3V6a3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 003 3h12a3 3 0 003-3 3 3 0 00-3-3z"/>
			</svg>`
		},
		16: {
			title: 'optimistic',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
				<path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
				<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
			</svg>`
		},
		17: {
			title: '$state.eager',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<circle cx="12" cy="12" r="10"/>
				<path d="M12 6v6l4 2"/>
			</svg>`
		},
		18: {
			title: 'forking',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<circle cx="12" cy="18" r="3"/>
				<circle cx="6" cy="6" r="3"/>
				<circle cx="18" cy="6" r="3"/>
				<path d="M18 9v1a2 2 0 01-2 2H8a2 2 0 01-2-2V9M12 12v3"/>
			</svg>`
		},
		19: {
			title: 'out of order',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M16 3h5v5M8 3H3v5M3 16v5h5M21 16v5h-5"/>
				<path d="M21 3l-7.5 7.5M3 3l7.5 7.5M3 21l7.5-7.5M21 21l-7.5-7.5"/>
			</svg>`
		},
		20: {
			title: 'stream',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
				<path d="M17 8l-5-5-5 5M12 3v12"/>
			</svg>`
		},
		21: {
			title: 'community',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<circle cx="12" cy="12" r="10"/>
				<path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
			</svg>`
		},
		22: {
			title: 'context',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<circle cx="12" cy="12" r="10"/>
				<circle cx="12" cy="12" r="6"/>
				<circle cx="12" cy="12" r="2"/>
			</svg>`
		},
		23: {
			title: 'MCP',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<rect x="3" y="11" width="18" height="10" rx="2"/>
				<circle cx="12" cy="5" r="3"/>
				<path d="M12 8v3M7 15h.01M12 15h.01M17 15h.01"/>
			</svg>`
		},
		24: {
			title: 'hydratable',
			icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>
				<path d="M12 13v4M10 17h4"/>
			</svg>`
		}
	}

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
			{@const dayData = DAY_ICONS[day]}
			<div class="calendar-cell">
				<div
					class="calendar-box"
					class:locked
					style="
						margin-top: {offset.y}px;
						transform: rotate({offset.rotate}deg);
					">
					<div class="day-content">
						<div class="day-icon">
							{@html dayData.icon}
						</div>
						<span class="day-number">{locked ? '?' : day}</span>
					</div>
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
			max-width: 900px;
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
		--day-color: #ff3e00;
		--day-glow: rgba(255, 62, 0, 0.5);

		aspect-ratio: 1;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
		border: 2px solid color-mix(in srgb, var(--day-color) 40%, #374151);
		border-radius: 0.75rem;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease,
			border-color 0.2s ease;
		position: relative;
		overflow: hidden;
	}

	.calendar-box::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: radial-gradient(
			circle at 30% 30%,
			color-mix(in srgb, var(--day-color) 15%, transparent) 0%,
			transparent 70%
		);
		pointer-events: none;
	}

	.calendar-box:not(.locked):hover {
		transform: scale(1.08) rotate(0deg) !important;
		box-shadow: 0 0 25px var(--day-glow);
		border-color: var(--day-color);
	}

	/* Locked state - faded appearance */
	.calendar-box.locked {
		--day-color: #374151;
		--day-glow: transparent;
		background: #111827;
		border-color: #1f2937;
	}

	.calendar-box.locked::before {
		display: none;
	}

	.day-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
	}

	/* Icon styling - vibrant orange when unlocked, faded when locked */
	.day-icon {
		width: 1.5rem;
		height: 1.5rem;
		color: var(--day-color);
		transition: color 0.3s ease, filter 0.3s ease;
	}

	.calendar-box:not(.locked) .day-icon {
		filter: drop-shadow(0 0 6px var(--day-glow));
	}

	.calendar-box.locked .day-icon {
		opacity: 0.4;
	}

	.day-icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	@media (min-width: 640px) {
		.day-icon {
			width: 2rem;
			height: 2rem;
		}
	}

	.day-number {
		font-size: 1.25rem;
		font-weight: 700;
		color: white;
		transition: text-shadow 0.3s ease;
	}

	.calendar-box:not(.locked) .day-number {
		text-shadow: 0 0 10px var(--day-glow);
	}

	@media (min-width: 640px) {
		.day-number {
			font-size: 1.5rem;
		}
	}

	.calendar-box.locked .day-number {
		color: #4b5563;
	}
</style>
