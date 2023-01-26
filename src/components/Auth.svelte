<script lang="ts">
	import { supabaseClient } from '$lib/db';
	import { page } from '$app/stores';

	const handleSignIn = () => {
		supabaseClient.auth.signInWithOAuth({ provider: 'github' });
	};
</script>

{#if !$page.data.session}
	<button on:click={handleSignIn} class="button">Sign in with Github</button>
{:else}
	<a href="/dashboard" class="button">Dashboard</a>
{/if}

<style lang="postcss">
	.button {
		@apply py-2 px-5 rounded-full border border-white bg-white text-sm text-black hover:text-white hover:bg-transparent hover:duration-200 transition-colors;
	}
</style>
