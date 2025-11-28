export interface DayContent {
	videoId: string
	title: string
	description: string
}

/**
 * Content for each day of Advent of Svelte 2025
 * Key: day number (1-24)
 * Value: content object with videoId, title, and description
 */
export const content = new Map<number, DayContent>([
	// Example:
	// [1, {
	// 	videoId: 'abc123',
	// 	title: 'Introduction to Runes',
	// 	description: 'Learn about the new reactivity system in Svelte 5...'
	// }],
])
