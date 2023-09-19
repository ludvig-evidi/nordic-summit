import adapter from '@sveltejs/adapter-auto'
import sequence from 'svelte-sequential-preprocessor'
import { preprocessMeltUI } from '@melt-ui/pp'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sequence([
		vitePreprocess(),
		preprocessMeltUI() // add to the end!
	]),

	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components'
		}
	}
}

export default config
