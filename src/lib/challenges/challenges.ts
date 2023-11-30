export interface Challenge {
    title: string;
    description: string;
    discordLink: string;
    unlockDate: string;
}

export interface ChallengeEnriched extends Challenge {
    locked: boolean;
    tomorrowsChallenge: boolean;
    active: boolean;
}

export const challengesRaw: Challenge[] = [
    {
        title: 'Day 1',
        description:
            'Create a simple counter that can be incremented and decremented.',
        discordLink: '',
        unlockDate: '2023-12-01 00:00:00 +02:00',
    },
    {
        title: 'Day 2',
        description: '',
        unlockDate: '2023-12-02 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 3',
        description: '',
        unlockDate: '2023-12-03 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 4',
        description: '',
        unlockDate: '2023-12-04 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 5',
        description: '',
        unlockDate: '2023-12-05 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 6',
        description: '',
        unlockDate: '2023-12-06 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 7',
        description: '',
        unlockDate: '2023-12-07 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 8',
        description: '',
        unlockDate: '2023-12-08 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 9',
        description: '',
        unlockDate: '2023-12-09 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 10',
        description: '',
        unlockDate: '2023-12-10 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 11',
        description: '',
        unlockDate: '2023-12-11 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 12',
        description: '',
        unlockDate: '2023-12-12 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 13',
        description: '',
        unlockDate: '2023-12-13 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 14',
        description: '',
        unlockDate: '2023-12-14 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 15',
        description: '',
        unlockDate: '2023-12-15 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 16',
        description: '',
        unlockDate: '2023-12-16 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 17',
        description: '',
        unlockDate: '2023-12-17 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 18',
        description: '',
        unlockDate: '2023-12-18 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 19',
        description: '',
        unlockDate: '2023-12-19 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 20',
        description: '',
        unlockDate: '2023-12-20 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 21',
        description: '',
        unlockDate: '2023-12-21 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 22',
        description: '',
        unlockDate: '2023-12-22 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 23',
        description: '',
        unlockDate: '2023-12-23 00:00:00 +00:00',
        discordLink: '',
    },
    {
        title: 'Day 24',
        description: '',
        unlockDate: '2023-12-24 00:00:00 +00:00',
        discordLink: '',
    },
];
