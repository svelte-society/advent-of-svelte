function mockHeartRate(timestamp) {
	// Constants for heart rate simulation
	const baseBPM = 75 // Adjusted average resting heart rate
	const shortTermAmplitude = 5 // Amplitude for the two-hour fluctuation
	const shortTermPeriod = 60 * 60 * 2 // A two-hour period for fluctuation

	// Slowly changing sinusoidal base for natural fluctuation
	let heartRate =
		baseBPM +
		shortTermAmplitude *
			Math.sin(
				(2 * Math.PI * (timestamp % shortTermPeriod)) / shortTermPeriod,
			)

	// More significant daily activity or rest simulation
	const dayPeriod = 60 * 60 * 24 // One day in seconds
	const dailyVariationAmplitude = 30 // Increased amplitude for daily variation
	const dailyVariation =
		dailyVariationAmplitude *
		Math.sin((2 * Math.PI * (timestamp % dayPeriod)) / dayPeriod)
	heartRate += dailyVariation

	// Adding heart rate variability
	const hrv = Math.random() * 2 // Random value up to 2
	heartRate += Math.random() > 0.5 ? hrv : -hrv // Randomly adding or subtracting the variability

	return Math.max(45, Math.min(160, heartRate)) // Clamping the value between 45 and 160 BPM
}

// Start of the day in Unix timestamp (e.g., midnight)
const startOfDayTimestamp = Math.floor(new Date().setHours(0, 0, 0, 0) / 1000)

// Loop to sample heart rate every 10 minutes over 24 hours
for (let i = 0; i < 144; i++) {
	const currentTimestamp = startOfDayTimestamp + i * 600 // 600 seconds = 10 minutes
	const heartRate = mockHeartRate(currentTimestamp)
	console.log(
		`Time: ${new Date(
			currentTimestamp * 1000,
		).toLocaleTimeString()}, Heart Rate: ${heartRate} BPM`,
	)
}

// Example usage
/*
setInterval(() => {
	const currentTimestamp = Math.floor((Date.now() + 1000) / 1000) // Current Unix timestamp in seconds
	console.log('Mock Heart Rate:', mockHeartRate(currentTimestamp))
}, 1000)
*/
