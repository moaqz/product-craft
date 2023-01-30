<script>
	import '../app.css';
	import Header from '#components/Layout/Header.svelte';
</script>

<main class="flex flex-col min-h-screen bg-brand-primary text-white">
	<Header />
	<slot />
	<div class="background-main">
		<div class="background-content" />
	</div>
</main>

<style lang="postcss">
	.background-main {
		width: 100%;
		height: 100%;
		position: fixed;
		display: flex;
		justify-content: center;
		padding: 120px 24px 160px;
		pointer-events: none;
	}

	.background-main:before {
		background: radial-gradient(circle, rgba(2, 0, 36, 0) 0, rgb(8, 8, 8) 100%);
		position: absolute;
		content: '';
		z-index: -1;
		width: 100%;
		height: 100%;
		top: 0;
	}

	.background-content {
		z-index: -1;
		max-width: 640px;
		background-image: radial-gradient(at 27% 37%, #3a8bfd 0, transparent 0),
			radial-gradient(at 97% 21%, #72fe7d 0, transparent 50%),
			radial-gradient(at 52% 99%, #fd3a4e 0, transparent 50%),
			radial-gradient(at 10% 29%, #855afc 0, transparent 50%),
			radial-gradient(at 97% 96%, #e4c795 0, transparent 50%),
			radial-gradient(at 33% 50%, #8ca8e8 0, transparent 50%),
			radial-gradient(at 79% 53%, #eea5ba 0, transparent 50%);
		content: '';
		width: 100%;
		height: 100%;
		filter: blur(100px) saturate(150%);
		position: absolute;
		top: 80px;
		opacity: 0.15;
	}
</style>
