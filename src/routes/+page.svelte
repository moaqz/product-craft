<script lang="ts">
  import Link from "#/components/Link.svelte";
  import { Spinner } from "#/components/Icons";
  import { generateProductPrompt } from "#/services/cohere";
  import ResultCard from "#/components/ResultCard.svelte";
  import type { CohereReponse } from "#/types/index";

  let isLoading = false;
  let results: CohereReponse[];

  async function handleSubmit(e: SubmitEvent) {
    results = [];
    isLoading = true;

    const formData = new FormData(e.target as HTMLFormElement);
    const description = formData.get("description") as string;
    const option = formData.get("option") as string;

    try {
      results = await generateProductPrompt(description, option);
    } catch (error) {
      console.error(error);
    } finally {
      isLoading = false;
    }
  }
</script>

<section class="mx-auto max-w-2xl px-5 py-28">
  <h1 class="mb-5 text-xl font-medium">
    AI-powered tool that can generate product ads, welcome emails, and more
    based on the description provided.
  </h1>
  <p class="rounded border border-orange-600 bg-orange-500/50 p-5">
    🤖 This project was created during the <Link
      href="https://github.com/midudev/midu-cohere-hackathon"
      >midudev hackaton
    </Link> using Cohere AI models, to learn more about, check out their <Link
      href="https://cohere.ai/">website</Link
    >.
  </p>

  <form
    class="mt-5 flex flex-col space-y-4"
    on:submit|preventDefault={handleSubmit}
  >
    <div class="space-y-2">
      <label for="description">Product Description</label>
      <textarea
        class="mt-2 h-40 w-full resize-none overflow-y-auto rounded border border-gray-800 bg-gray-700 p-4 outline-none focus:ring-1 focus:ring-orange-500"
        placeholder="Enter a brief description of your product here..."
        id="description"
        name="description"
        required
        minlength={4}
      />
    </div>

    <div class="space-y-2">
      <label for="option">Select an option:</label>
      <select
        class="mt-2 w-full rounded border border-gray-800 bg-gray-700 p-2 outline-none focus:ring-1 focus:ring-orange-500"
        id="option"
        name="option"
        required
      >
        <option value="welcomeEmail">Generate a welcome email</option>
        <option value="ad">Generate an ad</option>
      </select>
    </div>

    <button
      type="submit"
      class="flex w-full items-center justify-center rounded border py-2 text-lg font-medium {isLoading
        ? 'cursor-not-allowed border-orange-500/10 bg-orange-500/10 text-gray-500'
        : 'border-orange-500 bg-orange-500 '}"
      aria-label="Submit"
      disabled={isLoading}
    >
      {#if isLoading}
        <Spinner /> Loading...
      {:else}
        Submit
      {/if}
    </button>
  </form>

  {#if results}
    <div class="mt-8 grid gap-4">
      {#each results as res}
        <ResultCard text={res.text} />
      {/each}
    </div>
  {/if}
</section>
