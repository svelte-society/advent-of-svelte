import { dev } from '$app/environment'
import { getDate, isAfter, addDays } from 'date-fns'
import { zonedTimeToUtc } from 'date-fns-tz'

const NOW_UTC = zonedTimeToUtc(new Date(), 'Europe/London')

export interface Challenge {
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
		discordLink: string | null
		image: string | null
	}
}

const DEFAULT_DISCORD_LINK =
	'https://discord.com/channels/457912077277855764/1158027748699279430'

const challengeFiles = import.meta.glob<ChallengeImport>('./day-*.svx', {
	eager: true,
})

export const challenges = Object.entries(challengeFiles)
	// Parse the files to something useful
	.map<Challenge>(([path, mod]) => {
		const day = Number(path.slice('./day-'.length, -4))
		const locked = dev ? false : getDate(NOW_UTC) < day

		return {
			day,
			locked,
			body: locked
				? 'Svelte Bot commends you for trying, but there are no spoilers in Advent of Svelte'
				: mod.default.render().html,
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
