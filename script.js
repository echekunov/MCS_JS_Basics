const evalRandomDeg = (number) => {
	const randomDeg = Math.floor(Math.random() * 9 + 1);
	return Math.abs(number ** randomDeg);
}