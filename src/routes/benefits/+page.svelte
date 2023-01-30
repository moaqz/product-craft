<script async script lang="ts">
	import PageWrapper from '#components/Layout/PageWrapper.svelte';
	import { getFeatureBenefits } from '#services/getFeatureBenefits';
	import { ResultCard } from '#components/Result';
	import { Button, TextArea, Label } from '#components/Form';
	import type { Reponse } from '#types';

	let loading = false;

	let response: Reponse[];
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

		<Button type="submit" text="Create Content" isLoading={loading} />
	</form>

	{#if response}
		<div class="grid gap-4 mt-8">
			{#each response as res, idx}
				<ResultCard text={res?.text?.trim()} {idx} />
			{/each}
		</div>
	{/if}
</PageWrapper>
