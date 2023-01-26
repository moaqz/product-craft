<script>
	import Auth from '#components/Auth/index.svelte';
</script>

<header class="border-b dark:border-b-brand-dark-border dark:bg-brand-dark-secondary">
	<nav class="flex items-center justify-between p-4 max-w-5xl mx-auto">
		<a href="/" class="text-xl font-medium">Flud</a>
		<div class="flex items-center gap-x-3">
			<Auth />
		</div>
	</nav>
</header>
