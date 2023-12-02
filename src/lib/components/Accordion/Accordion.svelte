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
	import { browser } from '$app/environment'

	const accordion = createAccordion()
	accordionCtx.set(accordion)

	const {
		elements: { root },
	} = accordion

	let className = ''
	export { className as class }

	const isHtmlOnly = !browser
</script>

{#if isHtmlOnly}
	<slot />
{:else}
	<div class={className} use:melt={$root}>
		<slot />
	</div>
{/if}
