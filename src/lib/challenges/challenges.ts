import { isAfter, addDays, isFuture } from 'date-fns'
import { UTCDate } from '@date-fns/utc'
import { dev } from '$app/environment'
import { render } from 'svelte/server'

export interface Challenge {
	title: string
	day: number
	body: string
	discordLink: string
	unlockDate: Date
	image: string | null
	locked: boolean
}

interface ChallengeImport {
	default: any
	metadata?: {
		title: string
		discordLink: string | null
		image: string | null
	}
}

const DEFAULT_DISCORD_LINK =
	'https://discord.com/channels/457912077277855764/1158027748699279430'

const LOCKED_BODY =
	'Svelte Bot commends you for trying, but there are no spoilers in Advent of Svelte'

function createUnlockDate(year: number, day: number) {
	return new Date(`${year}-12-${day < 10 ? '0' : ''}${day}T00:00:00Z`)
}

const CHALLENGE_FILES = {
	2023: () =>
		import.meta.glob<ChallengeImport>('./2023/day-*.svx', { eager: true }),
}

type Year = keyof typeof CHALLENGE_FILES

export async function getChallenges(year: Year) {
	const challengeFiles = CHALLENGE_FILES[year]()

	const NOW_UTC = new UTCDate()

	const challenges = await Promise.all(
		Object.entries(challengeFiles)
			// Parse the files to something useful
			.map<Challenge>(([path, mod]) => {
				const day = Number(path.match(/day-(\d+)/)![1])
				const unlockDate = createUnlockDate(year, day)

				const locked = dev ? false : isFuture(unlockDate)

				if (!mod.metadata?.title?.length) {
					throw new Error(`Missing title for day ${day}`)
				}

				return {
					day,
					locked,
					title: locked ? 'Spoilers' : mod.metadata.title,
					body: locked ? LOCKED_BODY : render(mod.default).body,
					discordLink:
						mod.metadata?.discordLink || DEFAULT_DISCORD_LINK,
					image: locked ? mod.metadata?.image || null : null,
					unlockDate,
				}
			})
			// Sort it by day
			.sort((a, b) => a.day - b.day)
			// Only show the available challenges, and the next day (locked)
			.filter((challenge) =>
				dev ? true : isAfter(addDays(NOW_UTC, 1), challenge.unlockDate),
			)
			.map(async (challenge) => {
				let image: string | null = null

				if (challenge.image) {
					const mod = await import(`./images/${challenge.image}.png`)
					image = mod.default as string
				}

				return {
					...challenge,
					image,
				}
			}),
	)

	// Push a empty locked challenge if the next day hasn't been written yet
	// purely for UI purposes
	if (!dev && !challenges.some((c) => c.locked) && challenges.length < 24) {
		const day = challenges.length + 1

		challenges.push({
			day,
			title: 'Spoilers',
			locked: true,
			body: LOCKED_BODY,
			discordLink: DEFAULT_DISCORD_LINK,
			image: null,
			unlockDate: createUnlockDate(year, day),
		})
	}

	return challenges
}
