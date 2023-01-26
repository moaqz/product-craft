<script>
	import Theme from '#components/Theme/index.svelte';
	import Auth from '#components/Auth/index.svelte';
	import Github from '#components/Icons/Github.svelte';
</script>

<header class="border-b dark:border-b-brand-dark-border dark:bg-brand-dark-secondary">
	<nav class="flex items-center justify-between p-4 max-w-5xl mx-auto">
		<a href="/" class="text-xl font-medium">Flud</a>
		<div class="flex items-center gap-x-3">
			<Auth />
			<Theme />
			<a
				href="https://github.com/techwithmat/flud"
				class="py-2 px-3 rounded-md bg-gray-100 dark:bg-stone-900 hover:bg-gray-200 dark:hover:bg-stone-800 hover:transition-colors hover:duration-200"
			>
				<Github />
			</a>
		</div>
	</nav>
</header>
