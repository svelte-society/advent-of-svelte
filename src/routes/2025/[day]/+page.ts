import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import { content } from '$lib/challenges/2025'

export const load: PageLoad = ({ params }) => {
	const day = parseInt(params.day)

	if (isNaN(day) || day < 1 || day > 24) {
		error(404, 'Day not found')
	}

	const dayContent = content.get(day)

	return {
		day,
		videoId: dayContent?.videoId ?? '',
		title: dayContent?.title ?? `Day ${day}`,
		content: dayContent?.description ?? ''
	}
}
