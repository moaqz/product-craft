<script lang="ts">
	export let id: string;
	export let placeholder: string;
	export let required = true;
	export let value = '';
</script>

<input
	{id}
	{placeholder}
	{required}
	type="text"
	name={id}
	bind:value
	on:blur
	on:change
	on:click
	on:contextmenu
	on:focus
	on:keydown
	on:keypress
	on:keyup
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:paste
	on:input
	{...$$restProps}
	class="bg-brand-secondary border border-brand-border rounded-md p-3 resize-none outline-none"
/>
