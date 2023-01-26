<script lang="ts">
	import { supabaseClient } from '$lib/db';
	import { page } from '$app/stores';
</script>

{#if !$page.data.session}
	<button
		on:click={() => {
			supabaseClient.auth.signInWithOAuth({ provider: 'github' });
		}}
		class="py-2 px-3 rounded-md bg-gray-100 dark:bg-stone-900 border dark:border-stone-700 hover:bg-gray-200 dark:hover:bg-stone-800 hover:transition-colors hover:duration-200"
		>Sign in with Github</button
	>
{:else}
	<button
		on:click={async () => {
			await supabaseClient.auth.signOut();
		}}
		class="py-2 px-3 rounded-md bg-gray-100 dark:bg-stone-900 border dark:border-stone-700 hover:bg-gray-200 dark:hover:bg-stone-800 hover:transition-colors hover:duration-200"
	>
		Sign out
	</button>
{/if}
