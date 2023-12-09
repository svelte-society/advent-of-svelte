<script lang="ts">
	import { formatDuration, intervalToDuration, isPast } from 'date-fns'
	import { onMount, createEventDispatcher } from 'svelte'

	const dispatcher = createEventDispatcher<{ done: {} }>()

	export let date: Date

	let now = Date.now()

	$: duration = intervalToDuration({
		start: date,
		end: now,
	})

	onMount(() => {
		const interval = setInterval(() => {
			now = Date.now()

			if (isPast(date)) {
				dispatcher('done', {})
				clearInterval(interval)
			}
		}, 500)

		return () => clearInterval(interval)
	})
</script>

<span>unlocks in {formatDuration(duration)}</span>
