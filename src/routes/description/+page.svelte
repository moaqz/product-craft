<script async script lang="ts">
	import { getDescription } from '#services/getProductDescription';
	import Container from '#components/Container/index.svelte';
	import ResultCard from '#components/ResultCard/index.svelte';
	import Loading from '#components/Icons/Loading.svelte';
	import Button from '#components/Form/Button/index.svelte';
	import TextArea from '#components/Form/TextArea/index.svelte';
	import Label from '#components/Form/Label/index.svelte';
	import Input from '#components/Form/Input/index.svelte';
	import type { Reponse } from '#types';

	let title = 'Product Description';
	let loading = false;

	let response: Reponse[];
	async function handleSubmit(e: SubmitEvent) {
		loading = true;
		response = [];
		const entries = Object.fromEntries(new FormData(e.target as HTMLFormElement));

		if (!entries) return;

		response = await getDescription(entries);
		loading = false;
	}
</script>

<Container {title} on:submit={handleSubmit}>
	<svelte:fragment slot="form">
		<Label id="brand">Product / Brand Name</Label>
		<Input id="brand" placeholder="e.g. Flud" required={false} />
		<Label id="description">Describe your product</Label>
		<TextArea
			placeholder="e.g. an AI powered copywriter for small businesses and entrepreneurs..."
			id="description"
		/>
		<Label id="keywords">Keywords</Label>
		<Input id="keywords" placeholder="e.g. Entretaining, Friendly" />

		{#if !loading}
			<Button type="submit">Create Content</Button>
		{:else}
			<Button disabled>
				<Loading /> Loading...
			</Button>
		{/if}
	</svelte:fragment>

	{#if response}
		{#each response as res, idx}
			<ResultCard text={res?.text?.trim()} {idx} />
		{/each}
	{/if}
</Container>
