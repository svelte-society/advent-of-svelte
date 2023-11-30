import { json } from '@sveltejs/kit';
import { faker } from '@faker-js/faker/locale/en';

export const prerender = true;

interface Person {
	name: string;
	tally: number;
}

export const GET = ({ setHeaders }) => {
	setHeaders({
		'cache-control': 'public, max-age=31536000, immutable',
	});

	const people: Person[] = [];

	for (let i = 0; i < 100; i++) {
		people.push({
			name: faker.person.firstName(),
			tally: faker.number.int({ min: -100, max: 100 }),
		});
	}

	return json(people);
};
