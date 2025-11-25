<script lang="ts">
	import { formatDuration, intervalToDuration, isPast } from 'date-fns'

	let { date, ondone }: { date: Date; ondone?: () => void } = $props()

	let now = $state(Date.now())
	let done = $state(false)

	let duration = $derived(
		intervalToDuration({
			start: now,
			end: date,
		})
	)

	let interval: ReturnType<typeof setInterval>

	function count() {
		clearInterval(interval)
		done = false

		interval = setInterval(() => {
			now = Date.now()

			if (isPast(date)) {
				done = true
				ondone?.()
				clearInterval(interval)
			}
		}, 500)
	}

	$effect(() => {
		if (date) count()
		return () => clearInterval(interval)
	})
</script>

{#if done}
	<span>unlocking...</span>
{:else}
	<span>unlocks in {formatDuration(duration)}</span>
{/if}
