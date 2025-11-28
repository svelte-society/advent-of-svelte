/// <reference types="mdsvex/globals" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface PageState {
			selectedDay?: {
				day: number
				videoId: string
				title: string
				content: string
			}
		}
		// interface Platform {}
	}
}

export {};
