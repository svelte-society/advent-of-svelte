<script lang="ts">
	import { formatDuration, intervalToDuration } from 'date-fns'
	import { onMount } from 'svelte'

	export let date: Date

	let now = Date.now()

	$: duration = intervalToDuration({
		start: date,
		end: now,
	})

	onMount(() => {
		const interval = setInterval(() => (now = Date.now()), 500)
		return () => clearInterval(interval)
	})
</script>

<span>unlocks in {formatDuration(duration)}</span>
