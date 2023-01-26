<script lang="ts">
	type VARIANT = 'primary' | 'secondary';

	export let href: string;
	export let isExternal = false;
	export let variant: VARIANT = 'primary';
</script>

{#if !isExternal}
	<a class="linkButton {variant === 'primary' ? 'primary' : 'secondary'}" {href}><slot /></a>
{:else}
	<a
		class="linkButton {variant === 'primary' ? 'primary' : 'secondary'}"
		{href}
		target="_blank"
		rel="noreferrer"
	>
		<slot />
	</a>
{/if}

<style lang="postcss">
	.linkButton {
		@apply flex items-center gap-3 py-2 px-5 rounded-full border text-sm transition-colors hover:duration-200;
	}

	.primary {
		@apply border-white bg-white text-sm text-black hover:text-white hover:bg-transparent;
	}

	.secondary {
		@apply border-white bg-transparent text-white hover:text-black hover:bg-white;
	}
</style>
