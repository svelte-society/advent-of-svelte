import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import sequence from 'svelte-sequential-preprocessor'
import { preprocessMeltUI } from '@melt-ui/pp'
import adapter from '@sveltejs/adapter-vercel'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config}*/
const config = {
	preprocess: sequence([mdsvex(), vitePreprocess(), preprocessMeltUI()]),
	extensions: ['.svelte', '.svx'],
	kit: {
		adapter: adapter({
			runtime: 'nodejs22.x',
		}),
	},
}
export default config
