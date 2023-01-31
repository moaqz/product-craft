<script script lang="ts">
	import PageWrapper from '#components/Layout/PageWrapper.svelte';
	import { getFeatureBenefits } from '#services/cohere';
	import { ResultCard } from '#components/Result';
	import { Button, TextArea, Label } from '#components/Form';
	import type { CohereReponse } from '#types';

	let loading = false;
	let response: CohereReponse[];

	async function handleSubmit(e: SubmitEvent) {
		loading = true;
		response = [];

		const entries = Object.fromEntries(new FormData(e.target as HTMLFormElement));
		response = await getFeatureBenefits({
			description: entries.description as string
		});

		loading = false;
	}
</script>

<PageWrapper title="Product Feature Benefits">
	<form class="flex flex-col gap-y-4" on:submit|preventDefault={handleSubmit}>
		<Label id="description">Describe your feature</Label>
		<TextArea
			placeholder="e.g. Our software includes an inventory management system"
			id="description"
		/>

		<Button type="submit" isLoading={loading}>Create Content</Button>
	</form>

	{#if response}
		<div class="grid gap-4 mt-8">
			{#each response as res}
				<ResultCard text={res.text} />
			{/each}
		</div>
	{/if}
</PageWrapper>
