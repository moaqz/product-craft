<script script lang="ts">
	import PageWrapper from '#components/Layout/PageWrapper.svelte';
	import { getDescription } from '#services/cohere';
	import { ResultCard } from '#components/Result';
	import { Button, TextArea, Label, Input } from '#components/Form';
	import type { CohereReponse } from '#types';

	let loading = false;
	let results: CohereReponse[];

	async function handleSubmit(e: SubmitEvent) {
		loading = true;
		results = [];

		const entries = Object.fromEntries(new FormData(e.target as HTMLFormElement));
		results = await getDescription({
			description: entries.description as string,
			keywords: entries.keywords as string,
			brand: entries.brand as string
		});

		loading = false;
	}
</script>

<PageWrapper title="Product Description">
	<form class="flex flex-col gap-y-4" on:submit|preventDefault={handleSubmit}>
		<Label id="brand">Product / Brand Name</Label>
		<Input id="brand" placeholder="e.g. Flud" required={false} />

		<Label id="description">Describe your product</Label>
		<TextArea
			placeholder="e.g. an AI powered copywriter for small businesses and entrepreneurs..."
			id="description"
		/>

		<Label id="keywords">Keywords</Label>
		<Input id="keywords" placeholder="e.g. Entretaining, Friendly" />

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
