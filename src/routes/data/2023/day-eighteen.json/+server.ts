import questions from './questions.json'
import { faker } from '@faker-js/faker'
import { json } from '@sveltejs/kit'

export const GET = () => {
	return json(faker.helpers.arrayElements(questions, 20))
}
