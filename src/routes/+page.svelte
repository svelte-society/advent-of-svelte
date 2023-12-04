<script lang="ts">
	import AccordionItem from '$lib/components/Accordion/AccordionItem.svelte'
	import Accordion from '$lib/components/Accordion/Accordion.svelte'
	import Countdown from '$lib/components/Countdown.svelte'
	import RightArrow from '$lib/icons/RightArrow.svelte'
	import santaLogo from '$lib/images/santa-svelte.png'
	import SvelteLab from '$lib/icons/SvelteLab.svelte'
	import { onMount } from 'svelte'

	export let data

	let mounted = false

	onMount(() => {
		mounted = true
	})
</script>

<section class="bg-gray-900 z-10">
	<div
		class="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 text-center">
		<div
			class="flex lg:mt-0 lg:col-span-5x justify-center mb-4 lg:hidden relative">
			<img
				style="max-width: 300px;"
				src={santaLogo}
				alt="Svelte logo with a santa hat on top of it" />
		</div>

		<div class="place-self-center lg:col-span-7 relative">
			<h1
				class="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-white relative">
				A Svelte challenge for each day until Christmas!
			</h1>

			<p
				class="mb-6 max-w-2xl font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
				Join the festivities and participate in a daily frontend
				challenge using Svelte.
			</p>

			<a class="button" href="#challenges">
				See the challenges
				<RightArrow />
			</a>

			<a
				class="button secondary"
				rel="external"
				target="_blank"
				href="https://www.sveltelab.dev/">
				Launch SvelteLab
			</a>
		</div>

		<div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
			<img
				src={santaLogo}
				alt="Svelte logo with a santa hat on top of it" />
		</div>
	</div>
</section>

<section class="bg-gray-800 relative">
	<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
		<div class="max-w-screen-md text-center mx-auto">
			<h2 class="mb-4 text-4xl font-extrabold text-white">
				How do I participate?
			</h2>

			<p class="sm:text-xl text-gray-400">
				Check this page every day of December to find the daily
				challenge. Join the
				<a
					href="https://discord.com/channels/457912077277855764/1158027748699279430">
					Discord channel
				</a>
				and share your solution in the daily thread. That's it!
			</p>
		</div>
	</div>
</section>

<section class="bg-gray-900/75 relative" id="challenges">
	<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
		<div class="mx-auto max-w-screen-sm text-center">
			<h2 class="mb-6 text-4xl font-extrabold leading-tight text-white">
				The challenges
			</h2>

			<p class="text-gray-400 mb-4 text-xl">
				Every year, Santa and his elves work around the clock to prepare
				for Christmas. This year, however, he faces an unprecedented
				challenge. The <strong>Magical Christmas Code</strong>, which
				powers Santa's Sleigh and ensures the smooth delivery of
				presents, was shattered into 24 fragments.
			</p>

			<p class="text-gray-400 mb-6 text-xl">
				Santa immediately called upon his sentient robot assistant
				Svelte Bot to get the sleigh operational, but they can't do it
				alone. Each day, a new challenge awaits - a unique puzzle that,
				when solved, will unlock a fragment of the <strong>
					Magical Christmas Code
				</strong>. Will you help Santa and Svelte Bot fix the Sleigh and
				save Christmas?!
			</p>

			<div
				class="mb-6 font-light text-gray-300 md:text-lg bg-gray-900 relative">
				<Accordion>
					{#each data.challenges as challenge, index}
						{@const title = `Day ${index + 1}`}

						{#if challenge.locked}
							<AccordionItem classInactive="locked-tab" disabled>
								<h3 slot="header">
									{title}

									{#if mounted}
										<Countdown
											date={challenge.unlockDate} />
									{/if}
								</h3>
							</AccordionItem>
						{:else}
							<AccordionItem
								open={new Date().getUTCDate() == challenge.day}>
								<span slot="header">{title}</span>
								{#if challenge.image}
									<img
										class="w-60 mx-auto mt-4 mb-8"
										src={challenge.image}
										alt="{title} image" />
								{/if}

								<div
									class="text-left space-y-3 mb-6 text-gray-300 max-w-full overflow-x-auto">
									{@html challenge.body}
								</div>

								<div class="mb-4 flex gap-2">
									<a
										class="button"
										rel="external"
										target="_blank"
										href="https://sveltelab.dev/">
										<SvelteLab />
										Open in SvelteLab
									</a>

									<a
										class="button !bg-[#5865F2] focus:!outline-[#5865F2]"
										rel="external"
										target="_blank"
										href={challenge.discordLink}>
										Share your solution on Discord
									</a>
								</div>
							</AccordionItem>
						{/if}
					{/each}
				</Accordion>
			</div>
		</div>
	</div>
</section>

<style>
	a {
		cursor: pointer;
	}
</style>
