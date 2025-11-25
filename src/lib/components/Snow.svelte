<script lang="ts">
	import { onDestroy, onMount, tick } from 'svelte'
	import rich from '$lib/images/rich.png'

	let img: HTMLImageElement

	interface Particle {
		x: number
		y: number
		radius: number
		density: number
		isImage?: boolean
	}

	const particleCount = 100
	const speed = 3000
	// Chance for a snowflake to be a rich harris instead.
	const richChance = 0.01

	let width: number
	let height: number
	let canvas: HTMLCanvasElement
	let ctx: CanvasRenderingContext2D
	let particles: Particle[] = []
	// render loop timeout
	let timer: NodeJS.Timeout

	onMount(async () => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return
		}

		await tick()

		ctx = canvas.getContext('2d')!

		img = new Image()
		img.src = rich

		letThereBeSnow()
	})

	onDestroy(() => {
		clearTimeout(timer)
	})

	function letThereBeSnow() {
		resize()

		particles = regenerateParticles()

		// Lets draw the flakes.
		function draw() {
			ctx.clearRect(0, 0, width, height)

			for (let i = 0; i < particleCount; i++) {
				let p = particles[i]
				if (p.isImage) {
					// Draw a rich harris
					ctx.drawImage(img, p.x, p.y, p.radius * 20, p.radius * 20) // Adjust size as needed
				} else {
					// Draw a snowflake
					ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
					ctx.beginPath()
					ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, true)
					ctx.fill()
				}
			}

			update()
		}

		// Slowly rotating angle axis.
		let angle = 0
		// Bounds margin for detecting when a particle exits the canvas
		const margin = 50

		function update(time = Date.now()) {
			angle = time / speed

			for (let i = 0; i < particleCount; i++) {
				let p = particles[i]
				// Updating X and Y coordinates.
				// We will add 1 to the cos function to prevent negative values from reversing gravity.
				// Every particle has its own density which can be used to make the downward movement different for each flake.
				// Lets make it more random by adding in the radius.
				p.y += 1 + Math.cos(angle + p.density) + p.radius / 2
				p.x += Math.sin(angle) * 2

				// Sending flakes back from the top when it exits.
				// Lets make it a bit more organic and let flakes enter from the left and right also.
				if (p.x > width + margin || p.x < -margin || p.y > height) {
					if (i % 3 > 0) {
						// 66.67% of the flakes.
						particles[i] = {
							x: Math.random() * width,
							y: -10,
							radius: p.radius,
							density: p.density,
							isImage: Math.random() < richChance,
						}
					} else {
						// If the flake is exitting from the right.
						if (Math.sin(angle) > 0) {
							// Enter from the left.
							particles[i] = {
								x: -margin,
								y: Math.random() * height,
								radius: p.radius,
								density: p.density,
								isImage: p.isImage,
							}
						} else {
							// Enter from the right.
							particles[i] = {
								x: width + margin,
								y: Math.random() * height,
								radius: p.radius,
								density: p.density,
								isImage: p.isImage,
							}
						}
					}
				}
			}

			requestAnimationFrame(() => {
				// 60fps animation loop.
				timer = setTimeout(() => draw(), 1000 / 60)
			})
		}

		draw()
	}

	function resize() {
		if (!canvas) return

		width = window.innerWidth
		height = window.innerHeight

		canvas.width = width
		canvas.height = height
	}

	let debounce: NodeJS.Timeout
	function debounceResize() {
		clearTimeout(debounce)
		debounce = setTimeout(resize, 100)
	}

	function regenerateParticles() {
		const particles: Particle[] = []

		for (let i = 0; i < particleCount; i++) {
			particles.push({
				x: Math.random() * width,
				y: Math.random() * height,
				radius: 1 + Math.random() * 2,
				density: Math.random() * particleCount,
				isImage: false,
			})
		}

		return particles
	}
</script>

<svelte:window onresize={debounceResize} />

<canvas bind:this={canvas} aria-hidden="true"></canvas>

<style>
	canvas {
		position: fixed;
		inset: 0;

		width: 100vw;
		height: 100vh;

		z-index: 0;
		pointer-events: none;
	}
</style>
