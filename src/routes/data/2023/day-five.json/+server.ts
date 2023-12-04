import { faker } from '@faker-js/faker/locale/en'
import { json } from '@sveltejs/kit'

export const prerender = true

type TaskType = 'CREATED_TOY' | 'WRAPPED_PRESENT'

interface Task {
	elf: string
	task: TaskType
	minutesTaken: number
}

export const GET = ({ setHeaders }) => {
	setHeaders({
		'cache-control': 'public, max-age=31536000, immutable',
	})

	const tasks: Task[] = []

	for (let i = 0; i < 150; i++) {
		const task = faker.helpers.arrayElement<TaskType>([
			'CREATED_TOY',
			'WRAPPED_PRESENT',
		])

		tasks.push({
			elf: faker.person.firstName(),
			task,
			minutesTaken: faker.number.int({
				min: task == 'CREATED_TOY' ? 15 : 3,
				max: task == 'CREATED_TOY' ? 60 : 8,
			}),
		})
	}

	return json(tasks)
}
