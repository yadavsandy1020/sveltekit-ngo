<script>
	// @ts-nocheck

	const tableHeaders = [
		{
			name: 'First Name'
		},
		{
			name: 'Last Name'
		},
		{ name: 'Age' },
		{ name: 'Gender' },
		{ name: 'Email' }
	];

	export let data;
</script>

<table>
	<tr>
		{#each tableHeaders as column}
			<th>{column.name}</th>
		{/each}
	</tr>

	{#each data.users as user}
		<tr>
			<td>{user.firstName}</td>
			<td>{user.lastName}</td>
			<td>{user.age}</td>
			<td>{user.gender}</td>
			<td>{user.email}</td>
		</tr>
	{/each}
</table>

<style>
	table {
		font-family: arial, sans-serif;
		border-collapse: collapse;
		width: 100%;
	}

	td,
	th {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 8px;
	}

	tr:nth-child(even) {
		background-color: #dddddd;
	}
</style>
