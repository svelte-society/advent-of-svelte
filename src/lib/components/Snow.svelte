<script lang="ts">
	import { onMount } from 'svelte'

	let width: number
	let height: number
	let canvas: HTMLCanvasElement
	let ctx: CanvasRenderingContext2D
	let particles = []

	onMount(() => {
		ctx = canvas.getContext('2d')!

		letThereBeSnow()
	})

	const letThereBeSnow = () => {
		//canvas init

		//canvas dimensions
		const w = window.innerWidth
		const h = window.innerHeight
		canvas.width = w
		canvas.height = h

		// snowflake particles
		let mp = 50 // max particles
		let particles: any[] = []
		for (let i = 0; i < mp; i++) {
			particles.push({
				x: Math.random() * w, // x-coordinate
				y: Math.random() * h, // y-coordinate
				r: Math.random() * 4 + 1, // radius
				d: Math.random() * mp, // density
			})
		}

		// Lets draw the flakes.
		function draw() {
			ctx.clearRect(0, 0, width, height)

			ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
			ctx.beginPath()
			for (let i = 0; i < mp; i++) {
				let p = particles[i]
				ctx.moveTo(p.x, p.y)
				ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true)
			}
			ctx.fill()
			update()
		}

		// Slowly rotating angle axis.
		let angle = 0

		function update() {
			angle += 0.01
			for (let i = 0; i < mp; i++) {
				let p = particles[i]
				//Updating X and Y coordinates
				//We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
				//Every particle has its own density which can be used to make the downward movement different for each flake
				//Lets make it more random by adding in the radius
				p.y += Math.cos(angle + p.d) + 1 + p.r / 2
				p.x += Math.sin(angle) * 2

				//Sending flakes back from the top when it exits
				//Lets make it a bit more organic and let flakes enter from the left and right also.
				if (p.x > width + 5 || p.x < -5 || p.y > height) {
					if (i % 3 > 0) {
						//66.67% of the flakes
						particles[i] = {
							x: Math.random() * width,
							y: -10,
							r: p.r,
							d: p.d,
						}
					} else {
						//If the flake is exitting from the right
						if (Math.sin(angle) > 0) {
							//Enter from the left
							particles[i] = {
								x: -5,
								y: Math.random() * height,
								r: p.r,
								d: p.d,
							}
						} else {
							//Enter from the right
							particles[i] = {
								x: width + 5,
								y: Math.random() * height,
								r: p.r,
								d: p.d,
							}
						}
					}
				}
			}
		}

		// requestAnimationFrame(draw)

		// 30fps animation loop.
		setInterval(draw, 1000 / 30)
	}

	// $: console.log(data);

	function resize() {
		if (!canvas) return

		width = window.innerWidth
		height = window.innerHeight
	}

	function generateParticles() {
		if (!canvas) return

		const count = 50
		particles = []
		for (let i = 0; i < count; i++) {
			particles.push({
				x: Math.random() * width, // x
				y: Math.random() * height, // y
				r: Math.random() * 4 + 1, // radius
				d: Math.random() * count, // density
			})
		}
	}
</script>

<svelte:window on:resize={resize} />

<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		position: fixed;
		pointer-events: none;

		width: 100vw;
		height: 100vh;

		z-index: -1;
	}
</style>
