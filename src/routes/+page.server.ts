import {
	challengesRaw,
	type ChallengeEnriched,
} from '$lib/challenges/challenges';
import type { PageServerLoad } from './$types';

import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import duration from 'dayjs/plugin/duration.js';
import tz from 'dayjs/plugin/timezone.js';
import utc from 'dayjs/plugin/utc.js';
import dayjs from 'dayjs';

dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(tz);
dayjs.extend(customParseFormat);

export const load: PageServerLoad = async () => {
	const TIMEZONE = 'Europe/London';

	const currentDayJSDateInCET = dayjs().tz(TIMEZONE);
	const currentMonthIsDecember2023 =
		currentDayJSDateInCET.month() === 11 &&
		currentDayJSDateInCET.year() === 2023;
	const currentDayNumber1Indexed = currentDayJSDateInCET.date();

	/* Filter challenges based on current date */
	const challenges: ChallengeEnriched[] = challengesRaw.map(
		(challenge, i) => {
			const unlockDate = dayjs.tz(
				challenge.unlockDate,
				'YYYY-MM-DD H:m:s Z',
				TIMEZONE,
			);
			const isLocked = unlockDate.isAfter(currentDayJSDateInCET);
			const active = currentMonthIsDecember2023
				? currentDayNumber1Indexed === i + 1
				: i === 0;
			return {
				...challenge,
				tomorrowsChallenge: false,
				active,
				discordLink: challenge.discordLink,
				// hide challenge
				// description: isLocked ? '' : challenge.description,
				body: isLocked ? '' : challenge.body,
				locked: isLocked,
			};
		},
	);

	/* Show only all challenges up to today and tomorrow's challenge */
	const todayIndex = challenges.findIndex((challenge) => challenge.active);
	const tomorrowIndex = todayIndex + 1;
	challenges[tomorrowIndex].tomorrowsChallenge = true;
	challenges.splice(tomorrowIndex + 1);

	return {
		challenges,
	};
};
