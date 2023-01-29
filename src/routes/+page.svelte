<script>
	import '../app.css';
	import FeatureCard from '#components/FeatureCard/index.svelte';
	import { FEATURES } from '#data/features';
</script>

<section class="mx-auto mt-28 sm:mt-36 mb-12 max-w-md sm:max-w-lg px-2.5 sm:px-0 text-center z-30">
	<h1 class="text-5xl sm:text-6xl font-extrabold !leading-[1.15] text-gray-100">
		<span
			class="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500 bg-clip-text text-transparent"
			>Simplify</span
		> Your Product Creation Process
	</h1>
	<h2 class="mt-4 text-gray-300 text-lg sm:text-xl">
		A powerful tool that allows users to quickly and easily generate product information.
	</h2>
</section>
<div
	class="z-30 mx-auto max-w-screen-lg px-4 mt-8 grid items-center gap-4 sm:grid-cols-2 md:grid-cols-3 pb-20"
>
	{#each FEATURES as feature}
		<FeatureCard {...feature} />
	{/each}
</div>
