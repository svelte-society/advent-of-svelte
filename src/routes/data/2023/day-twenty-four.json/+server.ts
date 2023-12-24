import { json } from '@sveltejs/kit'
import { isFuture, isPast } from 'date-fns'
import data from './data.json'

export const GET = async () => {
	const currentIndex = data.findIndex(
		(dest) =>
			dest.departure && isPast(dest.arrival) && isFuture(dest.departure),
	)

	return json({
		current: data[currentIndex],
		next: data[currentIndex + 1],
		history: data.filter(
			(item) => item.departure != null && isPast(item.departure),
		),
	})
}
