import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    interface Challenge {
        title: string;
        description: string;
        active: boolean;
        discordLink: string;
        locked?: boolean;
        unlockDate?: string;
    }

    const challenges: Challenge[] = [
        {
            title: "Day 1",
            description:
                "Create a simple counter that can be incremented and decremented.",
            active: true,
            discordLink: 'https://discord.com/channels/457912077277855764/1158027748699279430/1160654834022760581',
        },
        {
            title: "Day 2",
            description: "hello 123",
            active: false,
            locked: true,
            unlockDate: '2023-12-01 00:00:00 +00:00',
            discordLink: '#',
        },
        {
            title: "Day 3",
            description: "",
            active: false,
            locked: true,
            unlockDate: '2023-12-02 00:00:00 +00:00',
            discordLink: '#',
        },
    ];

	return {
		challenges,
	};
};