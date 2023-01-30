<script lang="ts">
	import { ArrowRight } from '#components/Icons';

	export let title: string;
	export let description: string;
	export let href: string;
</script>

<div
	class="flex flex-col gap-4 border border-brand-border rounded-lg p-6 bg-brand-primary shadow-lg"
>
	<h3 class="text-lg font-bold">{title}</h3>
	<div>
		<p class="text-gray-300 mb-4">
			{description}
		</p>
		<a
			{href}
			class="inline-flex items-center gap-x-1 font-semibold text-blue-300 hover:text-blue-400 transition-colors"
			>Try {title}
			<ArrowRight />
		</a>
	</div>
</div>
