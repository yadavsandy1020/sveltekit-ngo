<script>
	import Carosal from './Carosal.svelte';
</script>

<svelte:head>
	<title>Royal Krishna Group Foundation</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<div class="container-fluid text-center">
	<div class="row content">
		<div class="col-sm-2 sidenav">
			<p><a href="#">Link</a></p>
			<p><a href="#">Link</a></p>
			<p><a href="#">Link</a></p>
		</div>
		<div class="col-sm-8 text-left">
			<Carosal />
		</div>
		<div class="col-sm-2 sidenav">
			<div class="well">
				<p>ADS</p>
			</div>
			<div class="well">
				<p>ADS</p>
			</div>
		</div>
	</div>
</div>

<!-- <main>
	<Carosal />
</main> -->
<style>
	/* Remove the navbar's default margin-bottom and rounded borders */
	.navbar {
		margin-bottom: 0;
		border-radius: 0;
	}

	/* Set height of the grid so .sidenav can be 100% (adjust as needed) */
	.row.content {
		height: 450px;
	}

	/* Set gray background color and 100% height */
	.sidenav {
		padding-top: 20px;
		/* background-color: #f1f1f1; */
		height: 100%;
	}

	/* Set black background color, white text and some padding */
	footer {
		background-color: #555;
		color: white;
		padding: 15px;
	}

	/* On small screens, set height to 'auto' for sidenav and grid */
	@media screen and (max-width: 767px) {
		.sidenav {
			height: auto;
			padding: 15px;
		}
		.row.content {
			height: auto;
		}
	}
</style>
