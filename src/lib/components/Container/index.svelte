<script lang="ts">
	export let title: string;
</script>

<section class="z-10 w-full max-w-screen-md mx-auto px-4 my-20">
	<h1
		class="text-center bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500 bg-clip-text text-transparent text-5xl font-extrabold !leading-[1.15] mb-20"
	>
		{title}
	</h1>

	<form class="flex flex-col gap-y-4" on:submit|preventDefault>
		<slot name="form" />
	</form>
	<div class="grid gap-4 mt-8">
		<slot />
	</div>
</section>
