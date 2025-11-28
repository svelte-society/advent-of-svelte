<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props {
		onclose: () => void
		children: Snippet
	}

	let { onclose, children }: Props = $props()

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			onclose()
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			onclose()
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div
	class="modal-backdrop"
	onclick={handleBackdropClick}
	onkeydown={handleKeydown}
	role="dialog"
	aria-modal="true"
	tabindex="-1"
>
	<div class="modal-content">
		<button class="close-button" onclick={onclose} aria-label="Close modal">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M18 6L6 18M6 6l12 12" />
			</svg>
		</button>
		{@render children()}
	</div>
</div>

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.85);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		z-index: 100;
		animation: fadeIn 0.2s ease-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.modal-content {
		background: #111827;
		border-radius: 1rem;
		padding: 2rem;
		max-width: 950px;
		width: 100%;
		max-height: 90vh;
		overflow-y: auto;
		position: relative;
		border: 1px solid #374151;
		animation: slideUp 0.2s ease-out;
	}

	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.close-button {
		position: absolute;
		top: 1rem;
		right: 1rem;
		width: 2.5rem;
		height: 2.5rem;
		border: none;
		background: #1f2937;
		border-radius: 0.5rem;
		color: #9ca3af;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition:
			background 0.2s,
			color 0.2s;
	}

	.close-button:hover {
		background: #374151;
		color: white;
	}

	.close-button svg {
		width: 1.25rem;
		height: 1.25rem;
	}
</style>
