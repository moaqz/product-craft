<script lang="ts">
	import { Loading } from '#components/Icons';
	import type { ButtonType, ButtonSizes, ButtonVariants } from '#types';

	export let type: ButtonType = 'button';
	export let isLoading = false;
	export let variant: ButtonVariants = 'blue';
	export let size: ButtonSizes = 'md';
</script>

<button class="button {variant} text-{size}" disabled={isLoading} on:click {type} {...$$restProps}>
	{#if isLoading}
		<Loading /> Loading...
	{:else}
		<slot />
	{/if}
</button>

<style lang="postcss">
	.button {
		@apply flex items-center justify-center gap-3 py-2 px-5 rounded-md border transition-colors hover:duration-200 disabled:cursor-not-allowed disabled:opacity-40;
	}

	.blue {
		@apply border-transparent bg-blue-500 hover:bg-blue-600;
	}

	.light {
		@apply border-white bg-white text-black hover:text-white hover:bg-transparent;
	}
</style>
