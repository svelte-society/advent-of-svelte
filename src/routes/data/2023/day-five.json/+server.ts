import { json } from '@sveltejs/kit'
import data from './data.json'

export const GET = () => {
	const now = Date.now()

	return json(
		data.filter((task) => {
			return new Date(task.date).getTime() < now
		}),
	)
}
