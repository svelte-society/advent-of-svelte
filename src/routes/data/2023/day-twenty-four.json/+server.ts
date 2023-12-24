import { json } from '@sveltejs/kit'
import { isPast } from 'date-fns'
import data from './data.json'

export const GET = async () => {
	const filtered = data.filter((item) => isPast(item.arrival))
	const now = filtered.at(-1)!

	return json({
		now,
		destinations: data.filter((item) => isPast(item.arrival)),
	})
}
