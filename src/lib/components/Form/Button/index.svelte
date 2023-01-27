<script lang="ts">
	export let type: 'submit' | 'button' | 'reset' = 'button';
	export let disabled = false;
</script>

{#if disabled}
	<button class="button disabled" on:click disabled {type} {...$$restProps}>
		<slot />
	</button>
{:else}
	<button class="button" on:click {type} {...$$restProps}>
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
