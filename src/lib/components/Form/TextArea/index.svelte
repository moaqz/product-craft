<script lang="ts">
	export let placeholder: string;
	export let id: string;
	export let label: string;
</script>

<div class="flex flex-col gap-y-1">
	<label for={id} class="mb-4 text-xl font-medium">{label}</label>
	<textarea
		{id}
		name={id}
		class="bg-brand-secondary border border-brand-border rounded-md p-3 resize-none outline-none h-40"
		{placeholder}
	/>
</div>
