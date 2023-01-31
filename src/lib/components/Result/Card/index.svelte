<script lang="ts">
	import { Copy } from '#components/Icons';
	import { Button } from '#components/Form';

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

	let lines = text.split('\n');
</script>

<div class="border border-brand-border rounded-md bg-brand-secondary p-4 flex flex-col">
	{#each lines as line}
		<p>{line}</p>
	{/each}
	<div class="flex items-center justify-between mt-4">
		<Button size="sm" variant="light" on:click={handleClick}>
			{#if !copied}
				<Copy />
				Copy
			{:else}
				Copied!
			{/if}
		</Button>
		<p class="text-gray-300 text-sm">{words} words / {charts} chars</p>
	</div>
</div>
