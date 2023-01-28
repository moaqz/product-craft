<script lang="ts">
	import type { InputType } from '#types';

	export let type: InputType = 'text';
	export let id: string;
	export let placeholder: string;
	export let required = true;
</script>

<input
	{type}
	{id}
	{placeholder}
	name={id}
	required={required ? true : false}
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
