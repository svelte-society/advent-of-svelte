<script lang="ts">
	import type { SvelteComponent } from 'svelte'

	interface $$Props {
		href: string
		class?: string | undefined | null
		secondary?: boolean
		external?: boolean
		iconBefore?: boolean
		iconAfter?: boolean
		iconName?: typeof SvelteComponent
	}
	let className: $$Props['class'] = undefined
	export { className as class }
	export let href: $$Props['href']
	export let secondary: boolean = false
	export let external: boolean = false
	export let iconBefore: boolean = false
	export let iconAfter: boolean = false
	export let iconName: typeof SvelteComponent | undefined = undefined

	let target: '_blank' | '_self' = '_self'
	let rel = external ? 'noopener noreferrer' : undefined

	$: if (external) {
		target = '_blank'
		rel = 'noopener noreferrer'
	}

	let secondaryClass = `relative bg-gray-900 inline-flex justify-center items-center gap-2 py-3 px-5 text-base font-medium text-center rounded-lg border focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800`
	let primaryClass = `inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-900`
</script>

<a
	{href}
	{rel}
	{target}
	{...$$restProps}
	class={$$props.class
		? className
		: secondary
		  ? secondaryClass
		  : primaryClass}>
	{#if iconBefore}
		<span>
			<svelte:component this={iconName} />
		</span>
	{/if}
	<slot />
	{#if iconAfter}
		<span>
			<svelte:component this={iconName} />
		</span>
	{/if}
</a>
