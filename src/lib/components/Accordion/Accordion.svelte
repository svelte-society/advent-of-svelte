<script module lang="ts">
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
	import type { Snippet } from 'svelte'

	const accordion = createAccordion()
	accordionCtx.set(accordion)

	const {
		elements: { root },
	} = accordion

	let { class: className = '', children }: { class?: string; children: Snippet } = $props()

	const isHtmlOnly = !browser
</script>

{#if isHtmlOnly}
	{@render children()}
{:else}
	<div class={className} use:melt={$root}>
		{@render children()}
	</div>
{/if}
