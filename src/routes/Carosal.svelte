<script>
	const photos = [
		{
			url: 'https://iili.io/HzhIH6g.jpg'
		},
		{
			url: 'https://iili.io/HzhIdFa.jpg'
		},
		{
			url: 'https://iili.io/HzhI9MF.jpg'
		},
		{
			url: 'https://iili.io/Hzhzyn1.jpg'
		}
	];
</script>

<div class="container">
	<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
		<div class="carousel-inner">
			{#each photos as { url }, index}
				<div class={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="5000">
					<img src={url} class="d-block w-100" alt="..." />
				</div>
			{/each}
		</div>
		<button
			class="carousel-control-prev"
			type="button"
			data-bs-target="#carouselExampleInterval"
			data-bs-slide="prev"
		>
			<span class="carousel-control-prev-icon bg-dark bg-primary" aria-hidden="true" />
			<span class="visually-hidden">Previous</span>
		</button>
		<button
			class="carousel-control-next"
			type="button"
			data-bs-target="#carouselExampleInterval"
			data-bs-slide="next"
		>
			<span class="carousel-control-next-icon bg-dark bg-primary" aria-hidden="true" />
			<span class="visually-hidden">Next</span>
		</button>
	</div>
</div>
