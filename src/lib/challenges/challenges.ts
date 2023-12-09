import { dev } from '$app/environment'
import { getDate, isAfter, addDays } from 'date-fns'
import { zonedTimeToUtc } from 'date-fns-tz'

const NOW_UTC = zonedTimeToUtc(new Date(), 'Europe/London')

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

const challengeFiles = import.meta.glob<ChallengeImport>('./day-*.svx', {
	eager: true,
})

export const challenges = await Promise.all(
	Object.entries(challengeFiles)
		// Parse the files to something useful
		.map<Challenge>(([path, mod]) => {
			const day = Number(path.slice('./day-'.length, -4))
			const locked = dev ? false : getDate(NOW_UTC) < day

			if (!mod.metadata?.title?.length) {
				throw new Error(`Missing title for day ${day}`)
			}

			return {
				day,
				locked,
				title: locked ? 'Spoilers' : mod.metadata.title,
				body: locked ? LOCKED_BODY : mod.default.render().html,
				discordLink: mod.metadata?.discordLink || DEFAULT_DISCORD_LINK,
				image: mod.metadata?.image || null,
				unlockDate: new Date(
					`2023-12-${day < 10 ? '0' : ''}${day} 00:00:00 +00:00`,
				),
			}
		})
		// Sort it by day
		.sort((a, b) => a.day - b.day)
		// Only show the available challenges, and the next day (locked)
		.filter((challenge) =>
			dev ? true : isAfter(addDays(NOW_UTC, 1), challenge.unlockDate),
		)
		.map(async (challenge) => {
			const image = challenge.image
				? // todo lock to webp instead
				  (await import(`./images/${challenge.image}.png?format=webp`))
						.default
				: null

			return {
				...challenge,
				image,
			}
		}),
)

// Push a empty locked challenge if the next day hasn't been written yet
// purely for UI purposes
// todo handle this in UI instead of complex logic server side
if (!dev && !challenges.some((c) => c.locked)) {
	const day = challenges.length + 1

	challenges.push({
		day,
		title: 'Spoilers',
		locked: true,
		body: LOCKED_BODY,
		discordLink: DEFAULT_DISCORD_LINK,
		image: null,
		unlockDate: new Date(
			`2023-12-${day < 10 ? '0' : ''}${day} 00:00:00 +00:00`,
		),
	})
}

