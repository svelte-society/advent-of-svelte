import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = ({ params }) => {
	const day = parseInt(params.day)

	if (isNaN(day) || day < 1 || day > 24) {
		error(404, 'Day not found')
	}

	// TODO: Replace with actual content for each day
	return {
		day,
		videoId: '',
		title: `Day ${day}`,
		content: ''
	}
}
