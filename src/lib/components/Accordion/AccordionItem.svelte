<script lang="ts">
	import { melt } from '@melt-ui/svelte'
	import { accordionCtx } from './Accordion.svelte'
	import { slide } from 'svelte/transition'
	import { generateId } from '@melt-ui/svelte/internal/helpers'
	import { browser } from '$app/environment'

	const {
		elements: { item, trigger, content },
		helpers: { isSelected },
		states: { value },
	} = accordionCtx.get()

	export let open = false
	export let classInactive = ''
	export let disabled = false
	export let headingLevel: 1 | 2 | 3 | 4 | 5 | 6 = 3
	$: headingEl = `h${headingLevel}`

	const id = generateId()
	const isHtmlOnly = !browser

	$: if (open) {
		value.set(id)
	}
</script>

{#if isHtmlOnly}
	<details {open} class={disabled ? classInactive : ''}>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex - False positive -->
		<summary
			class="flex items-center justify-between w-full p-5 font-medium rtl:text-right
		text-gray-500 border border-gray-200 focus:ring-4
		focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400
		hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
			tabindex={disabled ? -1 : undefined}>
			<slot name="header" />
		</summary>

		<div
			class="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
			<div class="px-5 py-4">
				<slot />
			</div>
		</div>
	</details>
{:else}
	<div
		use:melt={$item({ value: id, disabled })}
		class={disabled ? classInactive : ''}>
		<svelte:element this={headingEl} class="flex">
			<button
				use:melt={$trigger({ value: id, disabled })}
				class="flex items-center justify-between w-full p-5 font-medium rtl:text-right
			text-gray-500 border border-gray-200 focus:ring-4
			focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400
			hover:bg-gray-100 dark:hover:bg-gray-800 gap-3">
				<slot name="header" />
			</button>
		</svelte:element>
		{#if $isSelected(id)}
			<div
				class="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900"
				use:melt={$content(id)}
				transition:slide>
				<div class="px-5 py-4">
					<slot />
				</div>
			</div>
		{/if}
	</div>
{/if}

<style lang="postcss">
	details {
		&:first-child summary {
			@apply rounded-t-xl;
		}

		&:not(:last-child) summary {
			@apply border-b-0;
		}

		&:not(:last-child) [data-melt-accordion-content] {
			@apply border-b-0;
		}

		&:last-child [data-melt-accordion-content] {
			@apply border-t-0;
		}

		summary {
			list-style: none;
			&::-webkit-details-marker {
				display: none;
			}
		}
	}

	*:is([data-melt-accordion-item]) {
		&:first-child button {
			@apply rounded-t-xl;
		}

		&:not(:last-child) button {
			@apply border-b-0;
		}

		&:not(:last-child) [data-melt-accordion-content] {
			@apply border-b-0;
		}

		&:last-child [data-melt-accordion-content] {
			@apply border-t-0;
		}
	}
</style>
