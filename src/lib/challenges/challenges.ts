import day1 from './day-1.svx'
import day2 from './day-2.svx'
import day3 from './day-3.svx'
import day4 from './day-4.svx'

// todo replace title as I made it unused?

import sleighImage from '$lib/images/sleigh.png'
import cookieImage from '$lib/images/cookie.png'
import heartImage from '$lib/images/heart.png'

export interface Challenge {
	body: string
	discordLink: string
	unlockDate: string
	title: string
	image?: string
}

export interface ChallengeEnriched extends Challenge {
	locked: boolean
	tomorrowsChallenge: boolean
	active: boolean
}

function render(component: any) {
	// I solemly swear this is correct
	return component.render().html as string
}

const DEFAULT_DISCORD_LINK =
	'https://discord.com/channels/457912077277855764/1158027748699279430'

export const challengesRaw: Challenge[] = [
	{
		title: 'Day 1',
		body: render(day1),
		discordLink:
			'https://discord.com/channels/457912077277855764/1179937338751725659',
		unlockDate: '2023-12-01 00:00:00 +00:00',
	},
	{
		title: 'Day 2',
		unlockDate: '2023-12-02 00:00:00 +00:00',
		discordLink:
			'https://discord.com/channels/457912077277855764/1180291180995559514',
		image: cookieImage,
		body: render(day2),
	},
	{
		title: 'Day 3',
		unlockDate: '2023-12-03 00:00:00 +00:00',
		discordLink:
			'https://discord.com/channels/457912077277855764/1180653927448973352',
		image: sleighImage,
		body: render(day3),
	},
	{
		title: 'Day 4',
		unlockDate: '2023-12-04 00:00:00 +00:00',
		discordLink:
			'https://discord.com/channels/457912077277855764/1180997671541035078',
		image: heartImage,
		body: render(day4),
	},
	{
		title: 'Day 5',
		unlockDate: '2023-12-05 00:00:00 +00:00',
		discordLink: DEFAULT_DISCORD_LINK,
		body: 'TODO',
	},
	{
		title: 'Day 6',
		unlockDate: '2023-12-06 00:00:00 +00:00',
		discordLink: DEFAULT_DISCORD_LINK,
		body: 'TODO',
	},
	{
		title: 'Day 7',
		unlockDate: '2023-12-07 00:00:00 +00:00',
		discordLink: DEFAULT_DISCORD_LINK,
		body: 'TODO',
	},
	{
		title: 'Day 8',
		unlockDate: '2023-12-08 00:00:00 +00:00',
		discordLink: DEFAULT_DISCORD_LINK,
		body: 'TODO',
	},
	{
		title: 'Day 9',
		unlockDate: '2023-12-09 00:00:00 +00:00',
		discordLink: DEFAULT_DISCORD_LINK,
		body: 'TODO',
	},
	{
		title: 'Day 10',
		unlockDate: '2023-12-10 00:00:00 +00:00',
		discordLink: DEFAULT_DISCORD_LINK,
		body: 'TODO',
	},
	{
		title: 'Day 11',
		unlockDate: '2023-12-11 00:00:00 +00:00',
		discordLink: DEFAULT_DISCORD_LINK,
		body: 'TODO',
	},
	{
		title: 'Day 12',
		unlockDate: '2023-12-12 00:00:00 +00:00',
		discordLink: DEFAULT_DISCORD_LINK,
		body: 'TODO',
	},
	{
		title: 'Day 13',
		unlockDate: '2023-12-13 00:00:00 +00:00',
		discordLink: DEFAULT_DISCORD_LINK,
		body: 'TODO',
	},
	{
		title: 'Day 14',
		unlockDate: '2023-12-14 00:00:00 +00:00',
		discordLink: DEFAULT_DISCORD_LINK,
		body: 'TODO',
	},
	{
		title: 'Day 15',
		unlockDate: '2023-12-15 00:00:00 +00:00',
		discordLink: DEFAULT_DISCORD_LINK,
		body: 'TODO',
	},
	{
		title: 'Day 16',
		unlockDate: '2023-12-16 00:00:00 +00:00',
		discordLink: DEFAULT_DISCORD_LINK,
		body: 'TODO',
	},
	{
		title: 'Day 17',
		unlockDate: '2023-12-17 00:00:00 +00:00',
		discordLink: DEFAULT_DISCORD_LINK,
		body: 'TODO',
	},
	{
		title: 'Day 18',
		unlockDate: '2023-12-18 00:00:00 +00:00',
		discordLink: DEFAULT_DISCORD_LINK,
		body: 'TODO',
	},
	{
		title: 'Day 19',
		unlockDate: '2023-12-19 00:00:00 +00:00',
		discordLink: DEFAULT_DISCORD_LINK,
		body: 'TODO',
	},
	{
		title: 'Day 20',
		unlockDate: '2023-12-20 00:00:00 +00:00',
		discordLink: DEFAULT_DISCORD_LINK,
		body: 'TODO',
	},
	{
		title: 'Day 21',
		unlockDate: '2023-12-21 00:00:00 +00:00',
		discordLink: DEFAULT_DISCORD_LINK,
		body: 'TODO',
	},
	{
		title: 'Day 22',
		unlockDate: '2023-12-22 00:00:00 +00:00',
		discordLink: DEFAULT_DISCORD_LINK,
		body: 'TODO',
	},
	{
		title: 'Day 23',
		unlockDate: '2023-12-23 00:00:00 +00:00',
		discordLink: DEFAULT_DISCORD_LINK,
		body: 'TODO',
	},
	{
		title: 'Day 24',
		unlockDate: '2023-12-24 00:00:00 +00:00',
		discordLink: DEFAULT_DISCORD_LINK,
		body: 'TODO',
	},
]
