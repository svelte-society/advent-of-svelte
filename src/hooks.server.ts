import { isWordNumber, wordNumberMap } from '$lib/helpers/numbers'
import { getNowUTC } from '$lib/helpers/date'
import type { Handle } from '@sveltejs/kit'
import { getDate } from 'date-fns'
import { building } from '$app/environment'

// todo protect /data for access ahead of time

export const handle: Handle = async ({ resolve, event }) => {
	// Apply CORS header for API routes
	if (event.url.pathname.startsWith('/data')) {
		// Required for CORS to work
		if (event.request.method === 'OPTIONS') {
			return new Response(null, {
				headers: {
					'Access-Control-Allow-Methods':
						'GET, POST, PUT, DELETE, PATCH, OPTIONS',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Headers': '*',
				},
			})
		}

		event.setHeaders({
			'Access-Control-Allow-Origin': '*',
		})

		// Protect requests for data for locked days
		if (event.url.pathname.startsWith('/data/2023') && !building) {
			const segments = event.url.pathname.split('/')
			const dayString = segments[3].replace('.json', '').slice(4)

			if (!isWordNumber(dayString)) {
				return Response.json({ error: 'Invalid day' }, { status: 400 })
			}

			const day = wordNumberMap[dayString]
			const now = getNowUTC()

			if (getDate(now) < day) {
				return Response.json(
					{ error: 'Day not unlocked' },
					{ status: 403 },
				)
			}
		}
	}

	return await resolve(event)
}
