<script lang="ts" context="module">
	import type { Accordion } from '@melt-ui/svelte'
	import { getContext, setContext } from 'svelte'

	type Context = Accordion

	export const accordionCtx = {
		get() {
			return getContext<Context>('accordion')
		},
		set(context: Context) {
			setContext<Context>('accordion', context)
		},
	}
</script>

<script lang="ts">
	import { createAccordion, melt } from '@melt-ui/svelte'

	const accordion = createAccordion()
	accordionCtx.set(accordion)

	const {
		elements: { root },
	} = accordion

	let className = ''
	export { className as class }
</script>

<div class={className} use:melt={$root}>
	<slot />
</div>
