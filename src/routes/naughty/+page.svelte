<script lang="ts">
</script>

<section class="naughty-page">
	<div class="content">
		<!-- Grumpy Elf SVG -->
		<div class="elf-container">
			<svg viewBox="0 0 200 200" class="grumpy-elf" role="img" aria-label="Grumpy elf with crossed arms">
				<!-- Elf body -->
				<ellipse cx="100" cy="160" rx="40" ry="30" fill="#2d5a27" />

				<!-- Elf head -->
				<circle cx="100" cy="90" r="45" fill="#f5d0a9" />

				<!-- Angry eyebrows -->
				<path d="M70 75 L85 82" stroke="#4a3728" stroke-width="4" stroke-linecap="round" />
				<path d="M130 75 L115 82" stroke="#4a3728" stroke-width="4" stroke-linecap="round" />

				<!-- Grumpy eyes -->
				<circle cx="80" cy="88" r="8" fill="white" />
				<circle cx="120" cy="88" r="8" fill="white" />
				<circle cx="82" cy="90" r="4" fill="#2d2d2d" />
				<circle cx="122" cy="90" r="4" fill="#2d2d2d" />

				<!-- Frowning mouth -->
				<path d="M85 110 Q100 100 115 110" stroke="#8b4513" stroke-width="3" fill="none" stroke-linecap="round" />

				<!-- Pointy ears -->
				<path d="M55 85 L40 70 L58 80" fill="#f5d0a9" />
				<path d="M145 85 L160 70 L142 80" fill="#f5d0a9" />

				<!-- Elf hat -->
				<path d="M55 75 Q100 -10 145 75" fill="#c41e3a" />
				<circle cx="100" cy="20" r="10" fill="white" />
				<ellipse cx="100" cy="78" rx="50" ry="8" fill="#c41e3a" />

				<!-- Crossed arms indication -->
				<path d="M65 145 Q100 160 135 145" stroke="#2d5a27" stroke-width="15" fill="none" stroke-linecap="round" />
			</svg>
		</div>

		<h1>You're on the Naughty List!</h1>

		<p class="message">
			The Svelte Helpers caught you trying to peek at locked presents!
		</p>

		<p class="submessage">
			Nice try, but you'll have to wait until each day unlocks at 12:00 UTC.
			<br />
			Patience is a virtue... especially during Advent!
		</p>

		<a href="/2025" class="back-link">
			Back to the Calendar
		</a>
	</div>
</section>

<style>
	.naughty-page {
		min-height: 100vh;
		background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}

	.content {
		text-align: center;
		max-width: 500px;
	}

	.elf-container {
		margin-bottom: 2rem;
	}

	.grumpy-elf {
		width: 180px;
		height: 180px;
		filter: drop-shadow(0 0 20px rgba(196, 30, 58, 0.3));
		animation: shake 0.5s ease-in-out;
	}

	@keyframes shake {
		0%, 100% { transform: rotate(0deg); }
		25% { transform: rotate(-5deg); }
		75% { transform: rotate(5deg); }
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 800;
		color: #ff3e00;
		margin-bottom: 1rem;
		text-shadow: 0 0 30px rgba(255, 62, 0, 0.4);
	}

	.message {
		font-size: 1.25rem;
		color: #e2e8f0;
		margin-bottom: 1rem;
	}

	.submessage {
		font-size: 1rem;
		color: #94a3b8;
		margin-bottom: 2rem;
		line-height: 1.6;
	}

	.back-link {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		background: linear-gradient(135deg, #ff3e00 0%, #ff6b35 100%);
		color: white;
		text-decoration: none;
		border-radius: 0.5rem;
		font-weight: 600;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.back-link:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 30px rgba(255, 62, 0, 0.3);
	}

	@media (min-width: 640px) {
		h1 {
			font-size: 3rem;
		}

		.grumpy-elf {
			width: 220px;
			height: 220px;
		}
	}
</style>
