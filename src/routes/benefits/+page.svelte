<script async script lang="ts">
	import { getFeatureBenefits } from '#services/getFeatureBenefits';
	import Container from '#components/Container/index.svelte';
	import ResultCard from '#components/ResultCard/index.svelte';
	import Loading from '#components/Icons/Loading.svelte';
	import Button from '#components/Form/Button/index.svelte';
	import TextArea from '#components/Form/TextArea/index.svelte';
	import Label from '#components/Form/Label/index.svelte';
	import type { Reponse } from '#types';

	let title = 'Product Feature Benefits';
	let loading = false;

	let response: Reponse[];
	async function handleSubmit(e: SubmitEvent) {
		loading = true;
		response = [];
		const entries = Object.fromEntries(new FormData(e.target as HTMLFormElement));

		if (!entries) return;

		response = await getFeatureBenefits(entries);
		loading = false;
	}
</script>

<Container {title} on:submit={handleSubmit}>
	<svelte:fragment slot="form">
		<Label id="description">Describe your feature</Label>
		<TextArea
			placeholder="e.g. Our software includes an inventory management system"
			id="description"
		/>

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
