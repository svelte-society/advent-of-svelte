import { zonedTimeToUtc } from 'date-fns-tz'

export function getNowUTC() {
	return zonedTimeToUtc(new Date(), 'Europe/London')
}
