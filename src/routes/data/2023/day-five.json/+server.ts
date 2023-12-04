import data from './data.json'
import { json } from '@sveltejs/kit'

type TaskType = 'CREATED_TOY' | 'WRAPPED_PRESENT'

interface Task {
	elf: string
	task: TaskType
	minutesTaken: number
}

export const GET = () => {
	const now = new Date()
	return json(
		data.filter((task) => {
			return new Date(task.date).getTime() < now.getTime()
		}),
	)
}
