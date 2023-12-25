import { getChallenges } from '$lib/challenges/challenges'
import type { PageServerLoad } from './$types'

export const prerender = false

export const load: PageServerLoad = async ({ depends }) => {
	depends('challenges')

	return {
		challenges: await getChallenges(2023),
	}
}
