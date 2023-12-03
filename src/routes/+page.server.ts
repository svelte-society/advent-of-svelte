import { challenges } from '$lib/challenges/challenges'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	return {
		challenges,
	}
}
