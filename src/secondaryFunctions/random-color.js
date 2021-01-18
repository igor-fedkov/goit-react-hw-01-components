export default function randColor() {
	const red = Math.round(Math.random() * 255);
	const green = Math.round(Math.random() * 255);
	const blue = Math.round(Math.random() * 255);
	return `${red}, ${green}, ${blue}`;
}