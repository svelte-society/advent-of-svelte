import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const challenges = [
        {
            title: "Day 1",
            description:
                "Create a simple counter that can be incremented and decremented.",
            active: true,
        },
        {
            title: "Day 2",
            description: "",
            active: false,
            locked: true,
            unlockDate: '2023-12-01 00:00:00 +00:00',
        },
        {
            title: "Day 3",
            description: "",
            active: false,
            locked: true,
            unlockDate: '2023-12-02 00:00:00 +00:00',
        },
    ];

	return {
		challenges,
	};
};