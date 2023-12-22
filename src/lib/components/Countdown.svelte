<script lang="ts">
	import { formatDuration, intervalToDuration, isPast } from 'date-fns'
	import { createEventDispatcher, onDestroy } from 'svelte'

	const dispatcher = createEventDispatcher<{ done: {} }>()

	export let date: Date

	let now = Date.now()

	$: duration = intervalToDuration({
		start: now,
		end: date,
	})

	let interval: ReturnType<typeof setInterval>
	let done = false

	function count() {
		clearInterval(interval)
		done = false

		interval = setInterval(() => {
			now = Date.now()

			if (isPast(date)) {
				done = true
				dispatcher('done', {})
				clearInterval(interval)
			}
		}, 500)
	}

	$: if (date) count()

	onDestroy(() => {
		clearInterval(interval)
	})
</script>

{#if done}
	<span>unlocking...</span>
{:else}
	<span>unlocks in {formatDuration(duration)}</span>
{/if}
