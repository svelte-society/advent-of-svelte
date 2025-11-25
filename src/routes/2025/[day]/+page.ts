import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = ({ params }) => {
	const day = parseInt(params.day)

	if (isNaN(day) || day < 1 || day > 24) {
		error(404, 'Day not found')
	}

	return {
		day,
		videoId: 'dQw4w9WgXcQ', // placeholder video
		title: `Surprise #${day}`,
		content: `This is placeholder content for Day ${day}. The actual content will be revealed when this day is unlocked.`
	}
}
