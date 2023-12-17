import { json } from '@sveltejs/kit'
import jokes from './jokes.json'

export const prerender = true

export const GET = ({ setHeaders }) => {
	setHeaders({
		'cache-control': 'public, max-age=31536000',
	})

	return json(jokes)
}
