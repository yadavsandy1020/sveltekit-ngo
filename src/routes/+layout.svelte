<script>
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		justify-content: space-between;
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
