<script>
	import Github from '#components/Icons/Github.svelte';
	import LinkButton from '#components/LinkButton/index.svelte';
</script>

<header class="w-full z-20">
	<nav class="flex items-center justify-between px-5 h-16 max-w-screen-lg mx-auto">
		<a href="/" class="text-3xl font-semibold">Flud</a>
		<div class="flex items-center gap-x-3">
			<LinkButton href="https://github.com/techwithmat/flud" variant="secondary">
				<Github />
				Star on Github
			</LinkButton>
		</div>
	</nav>
</header>
