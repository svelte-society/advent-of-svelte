import { isFuture, isPast } from 'date-fns'
import { json } from '@sveltejs/kit'
import data from './data.json'

export const GET = async () => {
	const current = data.find(
		(dest) =>
			dest.departure != null &&
			isPast(dest.arrival) &&
			isFuture(dest.departure),
	)

	const next = data.find((dest) => isFuture(dest.arrival))

	return json({
		current: current || null,
		next: next || null,
		history: data.filter(
			(dest) => dest.departure != null && isPast(dest.departure),
		),
	})
}
