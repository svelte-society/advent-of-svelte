<script lang="ts">
	interface Props {
		day: number
		videoId: string
		title: string
		content: string
	}

	let { day, videoId, title, content }: Props = $props()
</script>

<div class="day-content">
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/{videoId}"
			title="Day {day} - {title}"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
	<div class="text-container">
		<h2 class="day-title">
			<span class="day-number">Day {day}</span>
			{title}
		</h2>
		<p class="day-description">{content}</p>
	</div>
</div>

<style>
	.day-content {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		width: 100%;
		max-width: 900px;
		margin: 0 auto;
	}

	@media (min-width: 768px) {
		.day-content {
			flex-direction: row;
			gap: 2rem;
		}
	}

	.video-container {
		flex: 0 0 auto;
		width: 100%;
		max-width: 280px;
		margin: 0 auto;
	}

	@media (min-width: 768px) {
		.video-container {
			width: 280px;
			margin: 0;
		}
	}

	.video-container iframe {
		width: 100%;
		aspect-ratio: 9 / 16;
		border-radius: 0.75rem;
		background: #1f2937;
	}

	.text-container {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.day-title {
		font-size: 1.75rem;
		font-weight: 700;
		color: white;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.day-number {
		font-size: 0.875rem;
		font-weight: 600;
		color: #ff3e00;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.day-description {
		font-size: 1rem;
		line-height: 1.6;
		color: #9ca3af;
		margin: 0;
	}
</style>
