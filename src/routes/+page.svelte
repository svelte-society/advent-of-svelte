<script lang="ts">
	// import AnimationFrameSnow from "$lib/components/AnimationFrameSnow.svelte";
	import { AccordionItem, Accordion } from 'flowbite-svelte'
	import Countdown from '$lib/components/Countdown.svelte'
	import santaLogo from '$lib/images/santa-svelte.png'
	import Snow from '$lib/components/Snow.svelte'
	import { onMount } from 'svelte'

	export let data

	let mounted = false

	onMount(() => {
		mounted = true
	})
</script>

<Snow />

<!-- <AnimationFrameSnow />-->
<!-- https://github.com/themesberg/tailwind-landing-page -->
<header>
	<nav class="border-gray-200 px-4 lg:px-6 py-2 bg-svelte relative">
		<div
			class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
			<a href="/" class="flex items-center">
				<span
					class="self-center text-xl font-semibold whitespace-nowrap text-white"
					>Advent of Svelte</span>
			</a>
			<div
				class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
				id="mobile-menu-2">
				<ul
					class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
					<li>
						<a
							href="/"
							class="block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:p-0"
							aria-current="page">2023</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>

<section class="bg-gray-900">
	<div
		class="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 text-center">
		<div
			class="flex lg:mt-0 lg:col-span-5x justify-center mb-4 lg:hidden relative">
			<img
				style="max-width: 300px;"
				src={santaLogo}
				alt="Svelte logo with a santa hat on top of it" />
		</div>
		<div class="place-self-center lg:col-span-7">
			<h1
				class="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-white relative">
				A Svelte challenge for each day of December
			</h1>

			<p
				class="mb-6 max-w-2xl font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
				Join the festivities and participate in a daily frontend
				challenge using Svelte.
			</p>

			<a
				href="#challenges"
				class="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-900">
				See the challenges
				<svg
					class="ml-2 -mr-1 w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd" /></svg>
			</a>
			<a
				href="https://www.sveltelab.dev/"
				target="_blank"
				class="relative bg-gray-900 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
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
							<AccordionItem classInactive="locked-tab">
								<div class="flex gap-3" slot="header">
									<h3>{title}</h3>

									{#if mounted}
										<p>
											<Countdown
												from={challenge.unlockDate}
												dateFormat="YYYY-MM-DD H:m:s Z"
												let:remaining>
												{#if remaining.done === false}
													<span>~</span>

													{#if remaining.days}
														<span>
															{remaining.days} days
														</span>
													{/if}

													<span>
														{remaining.hours} hours
													</span>

													<span>
														{remaining.minutes} minutes
													</span>
												{:else}
													<h2>The time has come</h2>
												{/if}
											</Countdown>
										</p>
									{/if}
								</div>
							</AccordionItem>
						{:else}
							<AccordionItem open={challenge.active}>
								<h3 slot="header">{title}</h3>
								{#if challenge.image}
									<img
										class="w-60 mx-auto mt-4 mb-8"
										src={challenge.image}
										alt={challenge.title} />
								{/if}

								<div
									class="text-left space-y-3 mb-6 text-gray-300 max-w-full overflow-x-auto">
									{@html challenge.body}
								</div>

								<div class="mb-4 flex gap-2">
									<a
										class="hover:opacity-80 transition-opacity"
										href="https://sveltelab.dev/">
										<img
											alt="Open in SvelteLab"
											src="https://docs.sveltelab.dev/button/light_short.svg" />
									</a>

									<a
										href={challenge.discordLink}
										target="_blank"
										class="text-white bg-[#5865F2] hover:opacity-80 transition-opacity focus:ring-4 ring-offset-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
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

<footer class="p-4 sm:p-6 bg-gray-800 relative">
	<div class="mx-auto max-w-screen-xl">
		<div class="md:flex md:justify-between">
			<div class="mb-6 md:mb-0">
				<a href="https://sveltesociety.dev/" class="flex items-center">
					<span
						class="self-center text-2xl font-semibold whitespace-nowrap text-white"
						>Advent of Code</span>
				</a>
			</div>
		</div>

		<hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />

		<p class="text-sm text-gray-400">
			Advent of Code is created
			<a href="https://sveltesociety.dev/">by Svelte Society</a>.
		</p>

		<p class="text-sm text-gray-400">
			Santa Hat illustration by
			<a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
				Icons 8
			</a>
			from
			<a href="https://icons8.com/illustrations">Ouch!</a>
			<br /> Santa sleigh illustration by Illustration by
			<a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA"
				>Icons 8</a>
			from <a href="https://icons8.com/illustrations">Ouch!</a>
			<br />
			Cookie Illustration by
			<a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA"
				>Icons 8</a>
			from <a href="https://icons8.com/illustrations">Ouch!</a>
		</p>
	</div>
</footer>

<style>
	a {
		cursor: pointer;
	}

	:global(.locked-tab) {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
