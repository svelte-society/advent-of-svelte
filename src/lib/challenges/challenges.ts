import dayOne from './day-one.svx';

export interface Challenge {
	// todo make this type better
	body: string;
	discordLink: string;
	unlockDate: string;
}

export interface ChallengeEnriched extends Challenge {
	locked: boolean;
	tomorrowsChallenge: boolean;
	active: boolean;
}

function render(component: any) {
	// I solemly swear this is correct
	return component.render().html as string;
}

export const challengesRaw: Challenge[] = [
	{
		body: render(dayOne),
		discordLink: '',
		unlockDate: '2023-12-01 00:00:00 +02:00',
	},
	{
		unlockDate: '2023-12-02 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-03 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-04 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-05 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-06 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-07 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-08 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-09 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-10 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-11 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-12 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-13 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-14 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-15 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-16 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-17 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-18 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-19 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-20 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-21 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-22 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-23 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
	{
		unlockDate: '2023-12-24 00:00:00 +00:00',
		discordLink: '',
		body: 'TODO',
	},
];
