<script lang="ts">
	import type { ButtonType } from '#types';
	export let type: ButtonType = 'button';
	export let disabled = false;
</script>

{#if disabled}
	<button
		class="button disabled"
		disabled
		{type}
		on:click
		on:click
		on:change
		on:keydown
		on:keyup
		on:mouseenter
		on:mouseleave
		{...$$restProps}
	>
		<slot />
	</button>
{:else}
	<button
		class="button"
		{type}
		on:click
		on:click
		on:change
		on:keydown
		on:keyup
		on:mouseenter
		on:mouseleave
		{...$$restProps}
	>
		<slot />
	</button>
{/if}

<style lang="postcss">
	.button {
		@apply border border-transparent rounded-md h-10 bg-blue-500 hover:bg-blue-600 flex items-center justify-center gap-x-2;
	}

	.disabled {
		@apply disabled:cursor-not-allowed disabled:opacity-40;
	}
</style>
