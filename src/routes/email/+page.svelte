<script script lang="ts">
	import PageWrapper from '#components/Layout/PageWrapper.svelte';
	import { getWelcomeEmail } from '#services/cohere';
	import { ResultCard } from '#components/Result';
	import { Button, TextArea, Label, Input } from '#components/Form';
	import type { CohereReponse } from '#types';

	let loading = false;
	let results: CohereReponse[];

	async function handleSubmit(e: SubmitEvent) {
		loading = true;
		results = [];

		const entries = Object.fromEntries(new FormData(e.target as HTMLFormElement));
		results = await getWelcomeEmail({
			productName: entries.productName as string,
			description: entries.description as string
		});

		loading = false;
	}
</script>

<PageWrapper title="Welcome Email">
	<form class="flex flex-col gap-y-4" on:submit|preventDefault={handleSubmit}>
		<Label id="productName">Product Name</Label>
		<Input id="productName" placeholder="e.g. Flud" />

		<Label id="description">Describe your product</Label>
		<TextArea placeholder="e.g. a content generation tool." id="description" />

		<Button type="submit" isLoading={loading}>Create Content</Button>
	</form>

	{#if results}
		<div class="grid gap-4 mt-8">
			{#each results as res}
				<ResultCard text={res.text} />
			{/each}
		</div>
	{/if}
</PageWrapper>
