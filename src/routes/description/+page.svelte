<script async script lang="ts">
	import { getDescription } from '#services/getProductDescription';
	import PageWrapper from '#components/Layout/PageWrapper.svelte';
	import { ResultCard } from '#components/Result';
	import { Button, TextArea, Label, Input } from '#components/Form';
	import type { Reponse } from '#types';

	let loading = false;
	let response: Reponse[];

	async function handleSubmit(e: SubmitEvent) {
		loading = true;

		const entries = Object.fromEntries(new FormData(e.target as HTMLFormElement));
		response = await getDescription({
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

	{#if response}
		<div class="grid gap-4 mt-8">
			{#each response as res, idx}
				<ResultCard text={res?.text?.trim()} {idx} />
			{/each}
		</div>
	{/if}
</PageWrapper>
