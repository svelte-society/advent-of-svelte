import { json } from '@sveltejs/kit'

function deterministicVariation(timestamp: number) {
	let seed = timestamp
	seed = seed ^ 61 ^ (seed >> 16)
	seed *= 9
	seed = seed ^ (seed >> 4)
	seed *= 0x27d4eb2d
	seed = seed ^ (seed >> 15)
	return Math.round((seed % 5) - 2)
}

function mockHeartRate(timestamp: number) {
	// Constants for heart rate simulation
	const baseBPM = 55 // Adjusted average resting heart rate
	const shortTermAmplitude = 5 // Amplitude for the two-hour fluctuation
	const shortTermPeriod = 60 * 60 * 2 // A two-hour period for fluctuation

	// Slowly changing sinusoidal base for natural fluctuation
	let heartRate =
		baseBPM +
		shortTermAmplitude *
			Math.sin(
				(2 * Math.PI * (timestamp % shortTermPeriod)) / shortTermPeriod,
			)

	// Two peak daily activity simulation
	const dayPeriod = 60 * 60 * 24 // One day in seconds
	const morningPeak =
		65 *
		Math.sin(
			(2 * Math.PI * ((timestamp - dayPeriod / 4) % dayPeriod)) /
				dayPeriod,
		) // Morning peak
	const eveningPeak =
		65 *
		Math.sin(
			(2 * Math.PI * ((timestamp - (3 * dayPeriod) / 4) % dayPeriod)) /
				dayPeriod,
		) // Evening peak
	heartRate += Math.max(morningPeak, eveningPeak)

	// Deterministic, integer heart rate variability
	const hrv = deterministicVariation(timestamp)
	console.log(hrv)
	heartRate += hrv

	return Math.floor(Math.max(45, Math.min(160, heartRate))) // Clamping the value between 45 and 160 BPM
}

export const GET = ({ setHeaders }) => {
	const currentTimestamp = Math.floor((Date.now() + 1000) / 1000)

	setHeaders({
		'cache-control': 'no-cache',
	})

	return json({
		heartRate: mockHeartRate(currentTimestamp),
	})
}
