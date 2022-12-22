<script>
	import { contactData } from './utils';

	const news = [
		{
			heading: 'Stationany Distribution',
			img: [
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
			],
			publishedOn: '25 Aug 2022'
		}
	];
</script>

<!-- svelte-ignore a11y-missing-attribute -->

<footer class="bg-dark">
	<div class="container">
		<div class="row mt-3">
			<div class="col-sm-12 col-lg-3 justify-content-center align-items-center">
				<h4>Popular News</h4>
				{#each news as { heading, img, publishedOn }}
					<h5>{heading}</h5>
					<div class="flex-column">
						{#each img as { url }}
							<img class="p-1" src={url} alt="Some txt" />
						{/each}
					</div>

					<p>{publishedOn}</p>
				{/each}
			</div>
			<div class="col-sm-12 col-lg-3">
				<h4>Our Photos</h4>
				{#each news as { img, publishedOn }}
					<div class="flex-column">
						{#each img as { url }}
							<img class="p-1" src={url} alt="Some txt" />
						{/each}
					</div>

					<p>{publishedOn}</p>
				{/each}
			</div>
			<div class="col-sm-12 col-lg-3">
				<h4>Contact us</h4>
				<span class="d-inline-block">
					<h5>Address:</h5>
					<p>{contactData.address}</p>
				</span>
				<span class="d-inline-block">
					<h5>Phone:</h5>
					<p>{contactData.phoneNumber}</p>
				</span>

				<span class="d-inline-block">
					<h5>Email:</h5>
					<p>{contactData.email}</p>
				</span>
			</div>
			<div class="col-sm-12 col-lg-3 d-flex align-items-center">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.5283834970764!2d78.58954711504911!3d27.1081626830438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39744bc582e36eb9%3A0x294999efb740d8b0!2sRoyal%20Krishna%20Group!5e0!3m2!1sen!2sin!4v1653729343731!5m2!1sen!2sin"
					width="100%"
					style="border: 10px; padding-left: 1%;padding-right: 1%"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				/>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		position: relative;
		bottom: 0 !important;
		color: white;
	}
	img {
		width: 50%;
		height: auto;
	}
</style>
