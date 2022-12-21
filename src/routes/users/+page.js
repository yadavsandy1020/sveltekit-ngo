// @ts-nocheck
export async function load({ fetch }) {
	const res = await fetch('https://dummyjson.com/users');
	const jsonData = await res.json();
	return jsonData;
}
