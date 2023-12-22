import { json } from '@sveltejs/kit'
import data from './data.json'

export const prerender = true

export const GET = ({ setHeaders }) => {
	setHeaders({
		'cache-control': 'public, max-age=31536000',
	})

	return json(data)
}
