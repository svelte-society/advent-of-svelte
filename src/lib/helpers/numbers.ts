export const wordNumberMap = Object.freeze({
	zero: 0,
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
	ten: 10,
	eleven: 11,
	twelve: 12,
	thirteen: 13,
	fourteen: 14,
	fifteen: 15,
	sixteen: 16,
	seventeen: 17,
	eighteen: 18,
	nineteen: 19,
	twenty: 20,
	'twenty-one': 21,
	'twenty-two': 22,
	'twenty-three': 23,
	'twenty-four': 24,
})

export function isWordNumber(word: string): word is keyof typeof wordNumberMap {
	return word in wordNumberMap
}
