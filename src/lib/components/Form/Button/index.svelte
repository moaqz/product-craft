<script lang="ts">
	import { Loading } from '#components/Icons';
	import type { ButtonType } from '#types';

	export let type: ButtonType = 'button';
	export let isLoading = false;
	export let text: string;
</script>

<button
	class="button disabled"
	disabled={isLoading}
	{type}
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	{...$$restProps}
>
	{#if isLoading}
		<Loading /> Loading...
	{:else}
		{text}
	{/if}
</button>

<style lang="postcss">
	.button {
		@apply border border-transparent rounded-md h-10 bg-blue-500 hover:bg-blue-600 flex items-center justify-center gap-x-2;
	}

	.disabled {
		@apply disabled:cursor-not-allowed disabled:opacity-40;
	}
</style>
