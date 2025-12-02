import { error, redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { content, isLocked } from '$lib/server/challenges/2025'

export const load: PageServerLoad = ({ params }) => {
	const day = parseInt(params.day)

	if (isNaN(day) || day < 1 || day > 24) {
		error(404, 'Day not found')
	}

	// Redirect to naughty page if day is still locked
	if (isLocked(day)) {
		redirect(302, '/naughty')
	}

	const dayContent = content.get(day)

	return {
		day,
		videoId: dayContent?.videoId ?? '',
		title: dayContent?.title ?? `Day ${day}`,
		content: dayContent?.description ?? ''
	}
}
