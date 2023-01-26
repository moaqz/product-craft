<script>
	import { supabaseClient } from '$lib/utils/db';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import SEO from '#components/SEO.svelte';

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<SEO />
<main class="flex flex-col min-h-screen">
	<slot />
</main>
