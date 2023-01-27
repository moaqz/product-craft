<script lang="ts">
	import { scale } from 'svelte/transition';
	import Copy from '#components/Icons/Copy.svelte';

	export let text: string;
	const charts = text.length;
	const words = text.split(' ').length;

	let copied = false;

	function handleClick() {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				setInterval(() => (copied = false), 3000);
				copied = true;
			})
			.catch((err) => {
				console.error(err);
			});
	}
</script>

<div
	class="border border-brand-border rounded-md bg-brand-secondary p-4 flex flex-col"
	in:scale={{ duration: 200, start: 0.95 }}
>
	<p>
		{text}
	</p>
	<div class="flex items-center justify-between mt-4">
		<button
			class="flex items-center gap-3 py-2 px-5 rounded-md border text-sm transition-colors hover:duration-200 border-white bg-white text-black hover:text-white hover:bg-transparent"
			on:click={handleClick}
		>
			{#if !copied}
				<Copy />
				Copy
			{:else}
				Copied!
			{/if}
		</button>
		<p class="text-gray-300 text-sm">{words} words / {charts} chars</p>
	</div>
</div>
