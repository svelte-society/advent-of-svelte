import { differenceInMilliseconds } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import { json } from '@sveltejs/kit'
import posts from './data.json'

interface ElfPost {
	id: string
	author: string
	timestamp: string
	content: string
	likes: number
	comments: Comment[]
}

interface Comment {
	id: string
	author: string
	timestamp: string
	content: string
	likes: number
}

export const GET = ({ setHeaders }) => {
	setHeaders({
		'cache-control': 'no-cache',
	})

	const nowUTC = utcToZonedTime(new Date(), 'UTC')

	// Filter posts and comments that can be posted
	const postableData = (posts satisfies ElfPost[]).filter((post) => {
		const postTimeUTC = utcToZonedTime(new Date(post.timestamp), 'UTC')
		const postDelay = differenceInMilliseconds(postTimeUTC, nowUTC)

		if (postDelay <= 0) {
			// Include the post if it can be posted now
			return true
		}

		// Filter comments that can be posted
		const postableComments = post.comments.filter((comment) => {
			const commentTimeUTC = utcToZonedTime(
				new Date(comment.timestamp),
				'UTC',
			)
			const commentDelay = differenceInMilliseconds(
				commentTimeUTC,
				nowUTC,
			)

			return commentDelay <= 0
		})

		// Include the post only if it has postable comments
		return postableComments.length > 0
	})

	return json(postableData)
}
