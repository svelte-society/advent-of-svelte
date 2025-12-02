import type { PageServerLoad } from './$types'
import { isLocked } from '$lib/server/challenges/2025'

export const load: PageServerLoad = () => {
	// Return which days are unlocked for initial render
	const unlockedDays = Array.from({ length: 24 }, (_, i) => i + 1).filter(
		(day) => !isLocked(day),
	)

	return { unlockedDays }
}
