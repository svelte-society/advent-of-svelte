import { faker } from '@faker-js/faker/locale/en'
import { json } from '@sveltejs/kit'

export const prerender = true

interface Present {
	name: string
	weight: number
}

export const GET = ({ setHeaders }) => {
	faker.seed(13)

	setHeaders({
		'cache-control': 'public, max-age=31536000',
	})

	const presents: Present[] = []

	for (let i = 0; i < 10000; i++) {
		presents.push({
			name: faker.person.firstName(),
			weight: faker.number.float({
				min: 3.5,
				max: 8.2,
				multipleOf: 0.01,
			}),
		})
	}

	return json(presents)
}
