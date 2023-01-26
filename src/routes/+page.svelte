<script>
	import '../app.css';
	import Github from '#components/Icons/Github.svelte';
	import LinkButton from '#components/LinkButton.svelte';
</script>

<header class="w-full z-20">
	<nav class="flex items-center justify-between px-5 h-16 max-w-screen-lg mx-auto">
		<a href="/" class="text-3xl font-semibold">Flud</a>
		<div class="flex items-center gap-x-3">
			<LinkButton href="/product">New Product</LinkButton>
		</div>
	</nav>
</header>

<section class="mx-auto my-28 sm:my-36 max-w-md sm:max-w-lg px-2.5 sm:px-0 text-center z-30">
	<h1 class="text-5xl sm:text-6xl font-extrabold !leading-[1.15] text-gray-100">
		<span
			class="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500 bg-clip-text text-transparent"
			>Simplify</span
		> Your Product Creation Process
	</h1>
	<h2 class="mt-4 text-gray-300 text-lg sm:text-xl">
		Flur is an amazing application that makes it easy to generate information about a product.
	</h2>
	<div class="mt-8 flex items-center justify-center space-x-3">
		<LinkButton href="/product">Get Started</LinkButton>
		<LinkButton href="https://github.com/techwithmat/flud" variant="secondary">
			<Github />
			Star on Github
		</LinkButton>
	</div>
</section>
<div class="background">
	<div class="background-content" />
</div>

<style lang="postcss">
	.background {
		width: 100%;
		height: 100%;
		position: absolute;
		display: flex;
		justify-content: center;
		padding: 120px 24px 160px;
		pointer-events: none;
	}

	.background-content {
		z-index: 3;
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
		top: 80px;
		opacity: 0.15;
	}

	.background:before {
		background: radial-gradient(circle, rgba(2, 0, 36, 0) 0, rgb(8, 8, 8) 100%);
		position: absolute;
		content: '';
		z-index: 2;
		width: 100%;
		height: 100%;
		top: 0;
	}
</style>
