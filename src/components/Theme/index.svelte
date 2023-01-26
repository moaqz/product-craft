<script lang="ts">
	import Moon from '#components/Icons/Moon.svelte';
	import Sun from '#components/Icons/Sun.svelte';

	let theme = 'light';

	function toggleTheme() {
		window.document.body.classList.toggle('dark');
	}
</script>

<button
	class="p-2 hover:bg-gray-200 dark:hover:bg-stone-800 rounded-md hover:transition-colors hover:duration-200"
	on:click={toggleTheme}
>
	{#if theme === 'light'}
		<Sun />
	{:else}
		<Moon />
	{/if}
</button>
