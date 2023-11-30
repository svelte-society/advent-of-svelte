<script lang="ts">
	// import AnimationFrameSnow from "$lib/components/AnimationFrameSnow.svelte";
	import Countdown from '$lib/components/Countdown.svelte';
	import santaLogo from '$lib/images/santa-svelte.png';
	import { AccordionItem, Accordion } from 'flowbite-svelte';
	import { onMount } from 'svelte';

	let mounted = false;
	let snowCanvas: HTMLCanvasElement | undefined;

	export let data;

	let windowWidth;
	let windowHeight;
	let canvas;
	let particles = [];

	let ctx;

	const letThereBeSnow = () => {
		//canvas init
		canvas = snowCanvas!;
		ctx = canvas.getContext('2d')!;

		//canvas dimensions
		var W = window.innerWidth;
		var H = window.innerHeight;
		canvas.width = W;
		canvas.height = H;

		//snowflake particles
		var mp = 50; //max particles
		var particles: any[] = [];
		for (var i = 0; i < mp; i++) {
			particles.push({
				x: Math.random() * W, //x-coordinate
				y: Math.random() * H, //y-coordinate
				r: Math.random() * 4 + 1, //radius
				d: Math.random() * mp, //density
			});
		}

		//Lets draw the flakes
		function draw() {
			ctx.clearRect(0, 0, windowWidth, windowHeight);

			ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
			ctx.beginPath();
			for (var i = 0; i < mp; i++) {
				var p = particles[i];
				ctx.moveTo(p.x, p.y);
				ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
			}
			ctx.fill();
			update();
		}

		//Function to move the snowflakes
		//angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
		var angle = 0;
		function update() {
			angle += 0.01;
			for (var i = 0; i < mp; i++) {
				var p = particles[i];
				//Updating X and Y coordinates
				//We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
				//Every particle has its own density which can be used to make the downward movement different for each flake
				//Lets make it more random by adding in the radius
				p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
				p.x += Math.sin(angle) * 2;

				//Sending flakes back from the top when it exits
				//Lets make it a bit more organic and let flakes enter from the left and right also.
				if (p.x > windowWidth + 5 || p.x < -5 || p.y > windowHeight) {
					if (i % 3 > 0) {
						//66.67% of the flakes
						particles[i] = {
							x: Math.random() * windowWidth,
							y: -10,
							r: p.r,
							d: p.d,
						};
					} else {
						//If the flake is exitting from the right
						if (Math.sin(angle) > 0) {
							//Enter from the left
							particles[i] = {
								x: -5,
								y: Math.random() * windowHeight,
								r: p.r,
								d: p.d,
							};
						} else {
							//Enter from the right
							particles[i] = {
								x: windowWidth + 5,
								y: Math.random() * windowHeight,
								r: p.r,
								d: p.d,
							};
						}
					}
				}
			}
		}

		//animation loop
		setInterval(draw, 33);
	};

	onMount(() => {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
		letThereBeSnow();
		mounted = true;
	});

	// $: console.log(data);

	$: {
		if (canvas) {
			canvas.width = windowWidth;
			canvas.height = windowHeight;

			const mp = 50; //max particles
			particles = [];
			for (let i = 0; i < mp; i++) {
				particles.push({
					x: Math.random() * windowWidth, //x-coordinate
					y: Math.random() * windowHeight, //y-coordinate
					r: Math.random() * 4 + 1, //radius
					d: Math.random() * mp, //density
				});
			}
		}
	}
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<canvas bind:this={snowCanvas}></canvas>

<!-- <AnimationFrameSnow />-->
<!-- https://github.com/themesberg/tailwind-landing-page -->
<header>
	<nav class="border-gray-200 px-4 lg:px-6 py-2 bg-[#ff3e00]">
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
		<div class="flex lg:mt-0 lg:col-span-5x justify-center mb-4 lg:hidden">
			<img
				style="max-width: 300px;"
				src={santaLogo}
				alt="Svelte logo with a santa hat on top of it" />
		</div>
		<div class="place-self-center lg:col-span-7">
			<h1
				class="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-white">
				A Svelte challenge for every day of December
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
						clip-rule="evenodd"></path
					></svg>
			</a>
			<a
				href="https://www.sveltelab.dev/"
				target="_blank"
				class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
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

<section class="bg-gray-800">
	<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
		<div class="max-w-screen-md text-center mx-auto">
			<h2 class="mb-4 text-4xl font-extrabold text-white">
				How do I participate?
			</h2>
			<p class="sm:text-xl text-gray-400">
				Check this page every day of December to find the daily channel.
				Join the <a href="#">Discord channel</a> and share your solution
				in the daily thread. That's it!
			</p>
		</div>
	</div>
</section>

<section class="bg-gray-900" id="challenges">
	<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
		<div class="mx-auto max-w-screen-sm text-center">
			<h2 class="mb-8 text-4xl font-extrabold leading-tight text-white">
				The challenges
			</h2>
			<p class="mb-6 font-light text-gray-400 md:text-lg">
				<Accordion>
					{#each data?.challenges as challenge, index}
						{@const title = `Day ${index + 1}`}

						{#if challenge.locked}
							<AccordionItem classInactive="locked-tab">
								<span slot="header">
									{title}
									{#if mounted}
										<Countdown
											from={challenge.unlockDate}
											dateFormat="YYYY-MM-DD H:m:s Z"
											let:remaining>
											{#if remaining.done === false}
												<span>(Opens in ~</span>
												{#if remaining.days}
													<span
														>{remaining.days} days</span>
												{/if}
												<span
													>{remaining.hours} hours</span>
												<span
													>{remaining.minutes} minutes</span>
												<span>)</span>
											{:else if remaining.started !== true}{:else}
												<h2>The time has come</h2>
											{/if}
										</Countdown>
									{/if}
								</span>
							</AccordionItem>
						{:else}
							<AccordionItem open={challenge.active}>
								<span slot="header">{title}</span>
								<p
									class="text-left space-y-3 mb-6 text-gray-400">
									{@html challenge.body}
								</p>
								<div class="mb-4">
									<div class="flex justify-center gap-2">
										<a
											href="https://www.sveltelab.dev/"
											target="_blank"
											class="text-white bg-[#ff3e00] hover:opacity-80 transition-opacity focus:ring-4 ring-offset-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
											>Start a new SvelteLab</a>
										<a
											href={challenge.discordLink}
											target="_blank"
											class="text-white bg-[#5865F2] hover:opacity-80 transition-opacity focus:ring-4 ring-offset-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
											>Share your solution on Discord</a>
									</div>
								</div>
							</AccordionItem>
						{/if}
					{/each}
				</Accordion>
			</p>
		</div>
	</div>
</section>

<footer class="p-4 sm:p-6 bg-gray-800">
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
		<div class="sm:flex sm:items-center sm:justify-between">
			<span class="text-sm sm:text-center text-gray-400">
				Advent of Code is created <a href="https://sveltesociety.dev/"
					>by Svelte Society</a
				>. <br />
				Santa Hat illustration by
				<a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA"
					>Icons 8</a>
				from <a href="https://icons8.com/illustrations">Ouch!</a>
			</span>
			<!--
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                    <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        ><path
                            fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd"
                        /></svg
                    >
                </a>
                <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                    <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        ><path
                            fill-rule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clip-rule="evenodd"
                        /></svg
                    >
                </a>
                <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                    <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        ><path
                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                        /></svg
                    >
                </a>
                <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                    <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        ><path
                            fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd"
                        /></svg
                    >
                </a>
                <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                    <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        ><path
                            fill-rule="evenodd"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                            clip-rule="evenodd"
                        /></svg
                    >
                </a>
            </div>
            -->
		</div>
	</div>
</footer>

<style>
	canvas {
		position: fixed;
		pointer-events: none;
	}

	a {
		cursor: pointer;
	}

	:global(.locked-tab) {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
