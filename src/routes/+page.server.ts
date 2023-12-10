import { getChallenges } from '$lib/challenges/challenges'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ setHeaders, depends }) => {
	depends('challenges')

	setHeaders({
		'cache-control': 'no-cache',
	})

	return {
		challenges: await getChallenges(),
	}
}
