export default function isLeapYear(year = new Date()) {
	if (typeof year === 'string') {
		year = new Date(year);
	}

	if (!(year instanceof Date) && typeof year !== 'number') {
		throw new TypeError(
			`Expected "year" type to be "Date" | "number" | "string" and got ${typeof year}.`,
		);
	}

	year = year instanceof Date ? year.getUTCFullYear() : year;
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
