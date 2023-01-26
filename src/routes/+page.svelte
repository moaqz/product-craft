<script>
	import '../app.css';
	import { page } from '$app/stores';
</script>

{#if !$page.data.session}
	<h1>I am not logged in</h1>
{:else}
	<h1>Welcome {$page.data.session.user?.user_metadata?.name}</h1>
	<p>I am logged in!</p>
{/if}
