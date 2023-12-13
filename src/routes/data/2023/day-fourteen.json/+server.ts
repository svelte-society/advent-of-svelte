import { faker } from '@faker-js/faker/locale/en'
import { json } from '@sveltejs/kit'

export const prerender = true

interface Present {
	name: string
	x: number
	y: number
}

export const GET = ({ setHeaders }) => {
	faker.seed(14)

	setHeaders({
		'cache-control': 'public, max-age=31536000',
	})

	const presents: Present[] = []

	for (let i = 0; i < 1000; i++) {
		presents.push({
			name: faker.person.firstName(),
			x: faker.number.int({ min: 0, max: 20 }),
			y: faker.number.int({ min: 0, max: 20 }),
		})
	}

	return json(presents)
}
