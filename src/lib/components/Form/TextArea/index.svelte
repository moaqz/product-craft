<script lang="ts">
	export let placeholder: string;
	export let id: string;
	export let value = '';
	export let required = true;
</script>

<textarea
	{id}
	name={id}
	class="bg-brand-secondary border border-brand-border rounded-md p-3 resize-none outline-none h-32"
	{placeholder}
	{required}
	on:blur
	on:change
	on:click
	on:contextmenu
	on:focus
	on:input
	on:keydown
	on:keypress
	on:keyup
	on:mouseenter
	on:mouseleave
	on:mouseover
	on:paste
	bind:value
	{...$$restProps}
/>
