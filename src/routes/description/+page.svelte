<script async script lang="ts">
	import { getDescription } from '#services/getProductDescription';
	import Container from '#components/Form/Container.svelte';
	import ResultCard from '#components/ResultCard/index.svelte';
	import Loading from '#components/Icons/Loading.svelte';
	import Button from '#components/Form/Button/index.svelte';
	import TextArea from '#components/Form/TextArea/index.svelte';

	let title = 'Product Descriptions';

	type Reponse = {
		id: string;
		text: string;
	};

	let loading = false;

	let response: Reponse[];
	async function handleSubmit(e: SubmitEvent) {
		loading = true;
		const { description } = Object.fromEntries(new FormData(e.target as HTMLFormElement));

		if (!description) return;

		response = await getDescription(description as string);
		loading = false;
	}
</script>

<Container {title}>
	<svelte:fragment slot="form">
		<form class="flex flex-col gap-y-3" on:submit|preventDefault={handleSubmit}>
			<TextArea
				placeholder="e.g. an AI powered copywriter for small businesses and entrepreneurs..."
				id="description"
				label="Describe your product"
			/>
			{#if !loading}
				<Button type="submit">Create Content</Button>
			{:else}
				<Button disabled>
					<Loading /> Loading...
				</Button>
			{/if}
		</form>
	</svelte:fragment>
	<svelte:fragment slot="resutls">
		{#if response}
			{#each response as res}
				<ResultCard text={res?.text?.trim()} />
			{/each}
		{/if}
	</svelte:fragment>
</Container>
